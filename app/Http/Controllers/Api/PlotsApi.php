<?php

namespace App\Http\Controllers\Api;

use App\Events\PlotCreated;
use App\Events\PlotUpdated;
use App\Plot;
use App\Site;
use Illuminate\Support\Facades\DB;

class PlotsApi
{
    /**
     * Creates plot on server from uploaded app data.
     * @param Site $site
     * @param $plot
     * @param $user
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|mixed
     * @throws \Throwable
     */
    public function upload(Site $site, $plot, $user)
    {
        $exists = Plot::where([
            'site_id' => $site->id,
            'number' => $plot['number'],
        ])->exists();

        if ($exists) {
            return 'error, number in use';
        }

        $created = Plot::create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'number' => $plot['number'],
            'latitude' => $plot['latitude'],
            'longitude' => $plot['longitude'],
            'basal_area' => $plot['basal_area'],
            'is_protected' => $plot['is_protected'] == '1' ? 1 : 0,
            'protection_seasons' => $plot['protection_seasons'],
            'canopy' => $plot['canopy'],
            'subcanopy' => $plot['subcanopy'],
            'ground_cover' => $plot['ground_cover'],
            'recorders' => $plot['recorders'],
        ]);

        $created->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        event(new PlotCreated($created));

        return $created;
    }

    public function update(Plot $serverPlot, $appPlot)
    {

        if ($serverPlot->number != $appPlot['number']) {
            $exists = Plot::where([
                'site_id' => $serverPlot->site_id,
                'number' => $appPlot['number'],
            ])->exists();

            if ($exists) {
                return 'error, number in use';
            }
        }

        $serverPlot->fill([
            'number' => $appPlot['number'],
            'latitude' => $appPlot['latitude'],
            'longitude' => $appPlot['longitude'],
            'basal_area' => $appPlot['basal_area'],
            'is_protected' => $appPlot['is_protected'] == '1' ? 1 : 0,
            'protection_seasons' => $appPlot['protection_seasons'],
            'canopy' => $appPlot['canopy'],
            'subcanopy' => $appPlot['subcanopy'],
            'ground_cover' => $appPlot['ground_cover'],
            'recorders' => $appPlot['recorders'],
        ])->save();

        $serverPlot->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
            'site' => function ($query) {
            },
            'plants.measurements' => function ($query) {
            },
            'plants.species' => function ($query) {
            },
        ]);

        $serverPlot->loadCount(['plants']);

        event(new PlotUpdated($serverPlot));

        return $serverPlot;
    }
}
