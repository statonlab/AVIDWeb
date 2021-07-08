<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Measurement;
use App\Plant;
use App\Plot;
use App\Species;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PlantsController extends Controller
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request)
    {
        $plot = Plot::findOrFail($request->plot_id);
        $this->authorize('update', $plot);

        $quadrants = implode(',', static::$quadrants);
        $this->validate($request, [
            'tag' => 'required|integer',
            'plant_type_id' => 'required|exists:plant_types,id',
            'quadrant' => "required|in:$quadrants",
        ]);

        $exists = Plant::where('tag', $request->tag)
            ->where('plot_id', $plot->id)
            ->exists();
        if ($exists) {
            return $this->error('Plant already exists', [
                'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
            ]);
        }

        $plant = Plant::create([
            'plot_id' => $plot->id,
            'plant_type_id' => $request->plant_type_id,
            'species_id' => $request->species_id,
            'tag' => $request->tag,
            'quadrant' => $request->quadrant,
            'user_id' => $request->user()->id,
        ]);

        $plant->load([
            'species',
            'type',
            'plot',
        ]);

        return $this->created($plant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Plant $plant
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Plant $plant, Request $request)
    {
        $this->authorize('update', $plant);

        $quadrants = implode(',', static::$quadrants);
        $this->validate($request, [
            'tag' => 'required|integer',
            'plant_type_id' => 'required|exists:plant_types,id',
            'quadrant' => "required|in:$quadrants",
        ]);

        if ($request->tag != $plant->tag) {
            $exists = Plant::where('tag', $request->tag)
                ->where('plot_id', $plant->plot->id)
                ->exists();
            if ($exists) {
                return $this->error('Plant already exists', [
                    'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
                ]);
            }
        }

        $plant->fill([
            'plant_type_id' => $request->plant_type_id,
            'species_id' => $request->species_id,
            'tag' => $request->tag,
            'quadrant' => $request->quadrant,
        ])->save();

        $plant->load([
            'type' => function ($query) {
            },
            'species' => function ($query) {
            },
            'plot' => function ($query) {
                $query->with(['site']);
            },
            'measurements' => function ($query) {
            },
        ]);

        $plant->loadCount(['measurements']);

        $plant->species_name = $plant->species->name;

        return $this->created($plant);
    }
}
