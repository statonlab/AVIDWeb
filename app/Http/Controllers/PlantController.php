<?php

namespace App\Http\Controllers;

use App\Console\Commands\SetLastMeasuredAt;
use App\Measurement;
use App\Species;
use App\Plant;
use App\Plot;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PlantController extends Controller
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Plot $plot, Request $request)
    {
        $this->authorize('view', $plot);

        $this->validate($request, [
            'search' => 'nullable|max:255',
            'order_by' => 'nullable|in:tag,name,quadrant,measurements_count',
            'order_dir' => 'nullable|in:asc,desc',
        ]);

        $plants = $plot->plants()->with([
            'type',
            'plot',
        ]);

        $plants = $plants->select([
            'plants.id as id',
            'plants.tag as tag',
            'species.name as species_name',
            'species_id',
            'quadrant',
            'plants.plant_type_id',
            'plot_id',
            'plants.user_id as user_id',
            'plants.old_tag as old_tag',
        ])
            ->join('species', 'plants.species_id', '=', 'species.id')
            ->withCount(['measurements']);

        if (! empty($request->search)) {
            $term = $request->search;
            $plants->where(function ($query) use ($term) {
                $term = "%$term%";
                $query->whereHas('type', function ($query) use ($term) {
                    $query->where('plant_types.name', 'like', $term);
                });
                $query->orWhere('tag', 'like', $term);
                $query->orWhere('quadrant', 'like', $term);
                $query->orWhere('name', 'like', $term);
            });
        }

        $plants = $plants->orderBy($request->order_by ?? 'tag',
            $request->order_dir ?? 'asc')->paginate(20);

        return $this->success($plants);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Plot $plot, Request $request)
    {
        $this->authorize('update', $plot);

        $quadrants = implode(',', static::$quadrants);
        $this->validate($request, [
            'plant_type_id' => 'required|exists:plant_types,id',
            'tag' => 'required|integer',
            'quadrant' => "required|in:$quadrants",
            'new_species' => 'nullable|boolean',
            'new_measurement' => 'nullable|boolean',
        ]);

        if ($request->new_species) {
            $this->validate($request, [
                'new_species_name' => 'required|max:255'
            ]);
        } else {
            $this->validate($request, [
                'species_id' => 'required|exists:species,id',
            ]);
        }

        if ($request->new_measurement) {
            $this->validate($request, [
                'date' => 'required|date_format:Y-m-d',
                'height' => 'required|numeric',
            ]);
        }

        $exists = Plant::where('tag', $request->tag)
            ->where('plot_id', $plot->id)
            ->exists();
        if ($exists) {
            return $this->error('Plant already exists', [
                'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
            ]);
        }

        $new_species = null;

        if ($request->new_species) {
            $species = Species::where('name', $request->new_species_name)
                ->where('plant_type_id', $request->plant_type_id)
                ->first();
            if ($species !== null) {
                $new_species = $species;
            } else {
                $new_species = Species::create([
                    'name' => $request->new_species_name,
                    'plant_type_id' => $request->plant_type_id,
                ]);
            }
        }

        $plant = Plant::create([
            'plot_id' => $plot->id,
            'plant_type_id' => $request->plant_type_id,
            'species_id' => $new_species ? $new_species->id : $request->species_id,
            'tag' => $request->tag,
            'quadrant' => $request->quadrant,
            'user_id' => $request->user()->id,
        ]);

        $plant->load([
            'species',
            'type',
            'plot',
        ]);

        if ($request->new_measurement) {
            Measurement::create([
                'plant_id' => $plant->id,
                'plot_id' => $plant->plot->id,
                'site_id' => $plant->plot->site_id,
                'user_id' => $request->user()->id,
                'date' => Carbon::createFromFormat('Y-m-d', $request->date),
                'height' => $request->height,
                'is_alive' => true,
                'is_located' => true,
            ]);
        }

        $plant->loadCount(['measurements']);

        return $this->created($plant);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Plant $plant
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function show(Plant $plant)
    {
        $this->authorize('view', $plant);

        $plant->load([
            'type' => function ($query) {
            },
            'species' => function ($query) {
            },
            'plot' => function ($query) {
                $query->with(['site']);
            },
        ]);
        $plant->loadCount(['measurements']);

        return $this->success($plant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Plant $plant
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Plant $plant, Request $request)
    {
        $this->authorize('update', $plant);

        $quadrants = implode(',', static::$quadrants);
        $this->validate($request, [
            'species_id' => 'required|exists:species,id',
            'plant_type_id' => 'required|exists:plant_types,id',
            'tag' => 'required|integer',
            'quadrant' => "required|in:$quadrants",
            'new_species' => 'nullable|boolean'
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

        $new_species = null;

        if ($request->new_species) {
            $species = Species::where('name', $request->new_species_name)
                ->where('plant_type_id', $request->plant_type_id)
                ->first();
            if ($species !== null) {
                $new_species = $species;
            } else {
                $new_species = Species::create([
                    'name' => $request->new_species_name,
                    'plant_type_id' => $request->plant_type_id,
                ]);
            }
        }

        $plant->fill([
            'plant_type_id' => $request->plant_type_id,
            'species_id' => $new_species ? $new_species->id : $request->species_id,
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

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Plant $plant
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Plant $plant)
    {
        $this->authorize('delete', $plant);

        $plant->delete();

        return $this->deleted($plant);
    }

    /**
     * @param Plant $plant
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function transfer(Plant $plant, Request $request)
    {
        $this->authorize('update', Plot::find($request->plot_id));
        $this->validate($request, [
            'plot_id' => 'required|exists:plots,id',
            'site_id' => 'required|exists:sites,id',
        ]);

        $plant->fill([
            'plot_id' => $request->plot_id,
        ])->save();

        Measurement::where(['plant_id' => $plant->id])->update([
            'plot_id' => $request->plot_id,
            'site_id' => $request->site_id,
        ]);

        dispatch(fn () => \Artisan::call(SetLastMeasuredAt::class));
        return $this->created($plant);
    }
}
