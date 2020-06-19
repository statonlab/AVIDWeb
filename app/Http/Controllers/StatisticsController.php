<?php

namespace App\Http\Controllers;

use App\Site;
use App\Plot;
use App\Species;
use App\Measurement;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

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

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function plots(Request $request)
    {
        $this->validate($request, [
            'sites' => 'nullable|array',
            'sites.*' => 'nullable|exists:sites,id',
        ]);

        /** @var \App\User $user */
        $user = $request->user();

        $plots = Plot::where('user_id', $user->id)
            ->orderBy('number', 'asc');

        if ($request->sites) {
            $plots = $plots->whereIn('site_id', $request->sites);
        }

        $plots = $plots->get();

        $plots->transform(function (Plot $plot) {
            $plot->name = 'Plot #' . $plot->number . ' (' . $plot->site->name . ')';

            return $plot;
        });

        return $this->success($plots);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function species(Request $request)
    {
        $this->validate($request, [
            'types' => 'nullable|array',
            'types.*' => 'nullable|exists:plant_types,id',
        ]);

        $species = Species::orderBy('name', 'asc');

        if ($request->types) {
            $species = $species->whereIn('plant_type_id', $request->types);
        }

        $species = $species->get();

        return $this->success($species);
    }

    public function chart(Request $request)
    {
        $quadrants = implode(',', static::$quadrants);

        $this->validate($request, [
            'sites' => 'nullable|array',
            'sites.*' => 'nullable|exists:sites,id',
            'plots' => 'nullable|array',
            'plots.*' => 'nullable|exists:plots,id',
            'quadrants' => 'nullable|array',
            'quadrants.*' => "nullable|in:$quadrants",
            'types' => 'nullable|array',
            'types.*' => 'nullable|exists:plant_types,id',
            'species' => 'nullable|array',
            'species.*' => 'nullable|exists:species,id',
            'state' => 'nullable|exists:states,id',
            'county' => 'nullable|exists:counties,id',
            'data_type' => 'nullable|in:owned,admin',
            'group' => 'nullable|exists:groups,id',
        ]);

        if ($request->data_type === 'admin') {
            $this->authorize('viewAny', Site::class);
        }

        $measurements = Measurement::with(['plot'])->orderBy('date', 'asc');

        if ($request->sites) {
            $measurements = $measurements->whereIn('site_id', $request->sites);
        }

        if ($request->data_type === 'owned') {
            $measurements = $measurements->where('user_id', $request->user()->id);
        }

        if ($request->plots) {
            $measurements->whereIn('plot_id', $request->plots);
        }

        if ($request->quadrants || $request->types || $request->species) {
            $measurements->where(function ($query) use ($request) {
                $query->whereHas('plant', function ($query) use ($request) {
                    if ($request->quadrants) {
                        $query->whereIn('quadrant', $request->quadrants);
                    }
                    if ($request->types) {
                        $query->whereIn('plant_type_id', $request->types);
                    }
                    if ($request->species) {
                        $query->whereIn('species_id', $request->species);
                    }
                });
            });
        }

        if ($request->state || $request->group) {
            $measurements->where(function ($query) use ($request) {
                $query->whereHas('site', function ($query) use ($request) {
                    if ($request->state) {
                        $query->where('state_id', $request->state);
                    }
                    if ($request->county) {
                        $query->where('county_id', $request->county);
                    }
                    if ($request->group) {
                        $query->whereHas('groups', function ($query) use ($request) {
                            $query->where('group_id', $request->group);
                        });
                    }
                });
            });
        }

        $measurements = $measurements->get();

        if ($measurements->isEmpty()) {
            return $this->success([]);
        }

        $years = range($measurements->first()->date->year, now()->year);
        $protected = [];
        $protected_count = [];
        $unprotected = [];
        $unprotected_count = [];

        foreach ($years as $year) {
            $annual = $measurements->where('date.year', $year);

            $protected_annual = $annual->where('plot.is_protected', 1);
            $protected_average = $protected_annual->average('height');
            $protected_average = number_format($protected_average, 2);
            $protected_count[] = $protected_annual->count();
            $protected[] = $protected_average;

            $unprotected_annual = $annual->where('plot.is_protected', 0);
            $unprotected_average = $unprotected_annual->average('height');
            $unprotected_average = number_format($unprotected_average, 2);
            $unprotected_count[] = $unprotected_annual->count();
            $unprotected[] = $unprotected_average;
        }

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
                ]
            ],
        ]);
    }

    public function siteChart(Site $site, Request $request)
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

        if ($request->plant_type_id) {
            $measurements->where(function ($query) use ($request) {
                $query->whereHas('plant', function ($query) use ($request) {
                    $query->where('plant_type_id', $request->plant_type_id);

                    if ($request->species_id) {
                        $query->where('species_id', $request->species_id);
                    }
                });
            });
        }

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

            $protected[] = $protected_average;
            $unprotected[] = $unprotected_average;
        }

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
        ]);
    }
}
