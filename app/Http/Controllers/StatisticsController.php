<?php

namespace App\Http\Controllers;

use App\Site;
use App\Plot;
use App\Species;
use App\Measurement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

    protected static $wmus = [
        '1A', '1C',
        '2A',
        '3A', '3C', '3F', '3G', '3H', '3J', '3K', '3M', '3N', '3P', '3R', '3S',
        '4A', '4B', '4C', '4F', '4G', '4H', '4J', '4K', '4L', '4O', '4P', '4R', '4S', '4T', '4U', '4W', '4Y', '4Z',
        '5A', '5C', '5F', '5G', '5H', '5J', '5R', '5S', '5T',
        '6A', '6C', '6F', '6G', '6H', '6J', '6K', '6N', '6P', '6R', '6S',
        '7A', '7F', '7H', '7J', '7M', '7P', '7R', '7S',
        '8A', '8C', '8F', '8G', '8H', '8J', '8M', '8N', '8P', '8R', '8S', '8T', '8W', '8X', '8Y',
        '9A', '9C', '9F', '9G', '9H', '9J', '9K', '9M', '9N', '9P', '9R',' 9S', '9T', '9W', '9X', '9Y',
    ];

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function sites(Request $request)
    {
        $this->validate($request, [
            'data_type' => 'nullable|in:owned,admin',
        ]);

        if ($request->data_type === 'admin') {
            $this->authorize('viewAny', Site::class);
        }

        /** @var \App\User $user */
        $user = $request->user();

        $sites = Site::orderBy('name', 'asc');

        if ($request->data_type !== 'admin') {
            $sites->where('user_id', $user->id);
        }

        $sites->with('plots')->select(['sites.id', 'sites.name', 'sites.user_id']);

        $sites = $sites->get();

        if ($request->data_type === 'admin') {
            $sites->transform(function (Site $site) {
                $site->name .= $site->user ? ' (' . $site->user->name . ')' : '';

                return $site;
            });
        }

        return $this->success($sites);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function plots(Request $request)
    {
        $this->validate($request, [
            'data_type' => 'nullable|in:owned,admin',
            'sites' => 'nullable|array',
            'sites.*' => 'nullable|exists:sites,id',
        ]);

        if ($request->data_type === 'admin') {
            $this->authorize('viewAny', Site::class);
        }

        /** @var \App\User $user */
        $user = $request->user();

        $plots = Plot::orderBy('number', 'asc');

        if ($request->data_type !== 'admin') {
            $plots->where('user_id', $user->id);
        }

        if ($request->sites) {
            $plots = $plots->whereIn('site_id', $request->sites);
        }

        $plots = $plots->get();

        $plots->transform(function (Plot $plot) {
            $plot->name = 'Plot #' . $plot->number;
            $plot->name .= $plot->site ? ' (' . $plot->site->name . ')' : '';

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
        $wmus = implode(',', static::$wmus);

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
            'wmu' => "nullable|in:$wmus",
            'protection' => 'nullable|in:both,unprotected',
            'years_filter' => 'nullable|array',
        ]);

        if ($request->data_type === 'admin') {
            $this->authorize('viewAny', Site::class);
        }

        $measurements = Measurement::with(['plot']); //->orderBy('date', 'asc');

        if ($request->sites) {
            $measurements = $measurements->whereIn('site_id', $request->sites);
        }

        if ($request->data_type === 'owned') {
            $measurements = $measurements->where('user_id', $request->user()->id);
        }

        if ($request->plots) {
            $measurements->whereIn('plot_id', $request->plots);
        }

        if ($request->wmu) {
            $measurements->where(function ($query) use ($request) {
                $query->whereHas('plot', function ($query) use ($request) {
                    $query->where('wmu', $request->wmu);
                });
            });
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

        if ($request->state || $request->group || $request->protection) {
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
                    if ($request->protection) {
                        $query->withCount([
                            'plots as protected_count' => function ($query) {
                                $query->where('is_protected', 1);
                            },
                            'plots as unprotected_count' => function ($query) {
                                $query->where('is_protected', 0);
                            },
                        ]);
                        if ($request->protection === 'both') {
                            $query->having('protected_count', '>', 0)
                                ->having('unprotected_count', '>', 0);
                        }
                        if ($request->protection === 'unprotected') {
                            $query->having('unprotected_count', '>', 0)
                                ->having('protected_count', 0);
                        }
                    }
                });
            });
        }

        if (!$measurements->exists()) {
            return $this->success([]);
        }

        $unprotected = clone $measurements;
        $protected = clone $measurements;

        $years = range($measurements->orderBy('date', 'asc')->first()->date->year, now()->year);
        $years_literal = $years;
        if ($request->years_filter) {
            $years = array_values(array_diff($years, $request->years_filter));
        }

        $protected->whereHas('plot', function ($query) {
            $query->where('is_protected', 1);
        })->select(DB::raw('ROUND(AVG(height), 2) as average, COUNT(id) as count, YEAR(date) as year'))
            ->groupBy(DB::raw('YEAR(date)'));

        $protected = $protected->get();

        $protected_heights = [];
        $protected_counts  = [];

        foreach ($years as $year) {
            $protected_heights[] = $protected->where('year', $year)->first()->average ?? 0;
            $protected_counts[]  = $protected->where('year', $year)->first()->count ?? 0;
        }

        $unprotected->whereHas('plot', function ($query) {
            $query->where('is_protected', 0);
        })->select(DB::raw('ROUND(AVG(height), 2) as average, COUNT(id) as count, YEAR(date) as year'))
            ->groupBy(DB::raw('YEAR(date)'));

        $unprotected = $unprotected->get();

        $unprotected_heights = [];
        $unprotected_counts  = [];

        foreach ($years as $year) {
            $unprotected_heights[] = $unprotected->where('year', $year)->first()->average ?? 0;
            $unprotected_counts[]  = $unprotected->where('year', $year)->first()->count ?? 0;
        }

        return $this->success([
            'xaxis' => $years,
            'data' => [
                [
                    'protected' => $protected_heights,
                    'count' => $protected_counts,
                ],
                [
                    'unprotected' => $unprotected_heights,
                    'count' => $unprotected_counts,
                ]
            ],
            'years' => $years_literal,
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
            ->with(['plot']);
        //->orderBy('date', 'asc');

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
            ],
        ]);
    }
}
