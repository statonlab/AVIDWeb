<?php

namespace App\Http\Controllers;

use App\Site;
use App\Measurement;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function sites(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        return $this->success($user->sites()
            ->orderBy('name', 'asc')
            ->with('plots')
            ->select(['sites.id', 'sites.name'])
            ->get());
    }

    public function chart(Site $site, Request $request)
    {
        $this->validate($request, [
            'plant_type_id' => 'nullable|exists:plant_types,id',
        ]);

        $protected = [];
        $unprotected = [];

        $chart = [
            'options' => [
                'chart' => [
                    'id' => 'sites-chart',
                    'toolbar' => ['show' => false],
                ],
                'xaxis' => [
                    'labels' => ['show' => false],
                ],
                'yaxis' => [
                    'title' => [
                        'text' => 'Height (inches)',
                        'style' => [
                            'fontSize' => '14px',
                        ],
                    ],
                ],
                //'title' => ['text' => 'Annual Height at ' . $site->name],
                'noData' => ['text' => 'No measurements found.'],
            ],

            'series' => [
                ['name' => 'protected', 'data' => []],
                ['name' => 'unprotected', 'data' => []],
            ],
        ];

        $site = Site::with('plots.plants')->findOrFail($request->site->id);

        $measurements = Measurement::where('site_id', $site->id)
            ->with(['plot'])
            ->orderBy('date', 'asc');

        if ($request->plant_type_id) {
            $measurements->where(function ($query) use ($request) {
                $query->whereHas('plant', function ($query) use ($request) {
                    $query->where('plant_type_id', $request->plant_type_id);
                });
            });
        }

        $measurements = $measurements->get();

        if ($measurements->isEmpty()) {
            return $this->success($chart);
        }

        $years = range($measurements->first()->date->year, now()->year);

        foreach ($years as $year) {
            $annual = $measurements->where('date.year', $year);

            $protected_average = $annual->where('plot.is_protected', 1)->average('height');
            $protected_average = number_format($protected_average, 2);

            $unprotected_average = $annual->where('plot.is_protected', 0)->average('height');
            $unprotected_average = number_format($unprotected_average, 2);

            array_push($protected, $protected_average);
            array_push($unprotected, $unprotected_average);
        }

        $chart['options']['xaxis']['labels']['show'] = true;
        $chart['options']['xaxis']['categories'] = $years;
        $chart['series'][0]['data'] = $protected;
        $chart['series'][1]['data'] = $unprotected;

        return $this->success($chart);
    }
}
