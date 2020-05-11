<?php

namespace App\Http\Controllers;

use App\Plant;
use App\Plot;
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
            'species_id' => 'required|exists:species,id',
            'plant_type_id' => 'required|exists:plant_types,id',
            'tag' => 'required|integer',
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
}
