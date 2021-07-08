<?php

namespace App\Http\Controllers\Api;

use App\Events\PlotCreated;
use App\Events\PlotUpdated;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePlotRequest;
use App\Plot;
use App\Site;
use Illuminate\Http\Request;

class PlotsController extends Controller
{
    /**
     * @param \App\Site $site
     * @param \App\Http\Requests\CreatePlotRequest $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Site $site, CreatePlotRequest $request)
    {
        $this->authorize('update', $site);

        /** @var \App\User $user */
        $user = $request->user();

        $exists = Plot::where([
            'site_id' => $site->id,
            'number' => $request->number,
        ])->exists();

        if ($exists) {
            return $this->error('Already exists', [
                'number' => ['This plot number already exists'],
            ]);
        }

        $plot = Plot::create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'number' => $request->number,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'custom_latitude' => $request->latitude,
            'custom_longitude' => $request->longitude,
            'accuracy' => $request->accuracy,
            'altitude' => $request->altitude,
            'basal_area' => $request->basal_area,
            'is_protected' => $request->is_protected == '1' ? 1 : 0,
            'protection_seasons' => $request->protection_seasons,
            'canopy' => $request->canopy,
            'subcanopy' => $request->subcanopy,
            'ground_cover' => $request->ground_cover,
            'recorders' => $request->recorders,
        ]);

        $plot->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        $plot->loadCount(['plants']);

        event(new PlotCreated($plot));

        return $this->created($plot);
    }

    /**
     * @param Request $request
     * @param Plot $plot
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(CreatePlotRequest $request, Plot $plot)
    {
        $this->authorize('update', $plot);

        if ($plot->number != $request->number) {
            $exists = Plot::where([
                'site_id' => $plot->site_id,
                'number' => $request->number,
            ])->exists();

            if ($exists) {
                return $this->error('Already exists', [
                    'number' => ['This plot number already exists'],
                ]);
            }
        }

        $plot->fill([
            'number' => $request->number,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'custom_latitude' => $request->latitude,
            'custom_longitude' => $request->longitude,
            'accuracy' => $request->accuracy,
            'altitude' => $request->altitude,
            'basal_area' => $request->basal_area,
            'is_protected' => $request->is_protected == '1' ? 1 : 0,
            'protection_seasons' => $request->protection_seasons,
            'canopy' => $request->canopy,
            'subcanopy' => $request->subcanopy,
            'ground_cover' => $request->ground_cover,
            'recorders' => $request->recorders,
        ])->save();

        $plot->load([
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

        $plot->loadCount(['plants']);

        event(new PlotUpdated($plot));

        return $this->created($plot);
    }
}
