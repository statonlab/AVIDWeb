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
            'species_id' => 'nullable|exists:species,id',
        ]);

        $protected = [];
        $unprotected = [];

        $site = Site::with('plots.plants')->findOrFail($request->site->id);

        $measurements = Measurement::where('site_id', $site->id)
            ->with(['plot'])
            ->orderBy('date', 'asc');

        $measurements->where(function ($query) use ($request) {
            $query->whereHas('plant', function ($query) use ($request) {
                if ($request->plant_type_id) {
                    $query->where('plant_type_id', $request->plant_type_id);
                }
                if ($request->species_id) {
                    $query->where('species_id', $request->species_id);
                }
            });
        });

        $measurements = $measurements->get();

        if ($measurements->isEmpty()) {
            return $this->success([]);
        }

        $years = range($measurements->first()->date->year, now()->year);

        foreach ($years as $year) {
            $annual = $measurements->where('date.year', $year);

            $protected_annual = $annual->where('plot.is_protected', 1);
            $unprotected_annual = $annual->where('plot.is_protected', 0);

            $protected_average = $protected_annual->average('height');
            $protected_average = number_format($protected_average, 2);
            $protected_count[] = $protected_annual->count();

            $unprotected_average = $unprotected_annual->average('height');
            $unprotected_average = number_format($unprotected_average, 2);
            $unprotected_count[] = $unprotected_annual->count();

            array_push($protected, $protected_average);
            array_push($unprotected, $unprotected_average);
        }

        $counts = [
            $protected_count,
            $unprotected_count,
        ];

        return $this->success([
            'xaxis' => $years,
            'data' => [
                [
                    'protected' => $protected,
                    'count' => $protected_count,
                ],
                [
                    'unprotected' => $unprotected,
                    'count' => $unprotected_count,
                ],
            ]
            //'protected' => $protected,
            //'unprotected' => $unprotected,
            //'counts' => $counts,
        ]);
    }
}
