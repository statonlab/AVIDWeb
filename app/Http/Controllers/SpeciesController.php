<?php

namespace App\Http\Controllers;

use App\Plant;
use App\PlantType;
use App\Site;
use App\Species;
use Illuminate\Http\Request;

class SpeciesController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Species::class);

        $this->validate($request, [
            'search' => 'nullable|max:255',
            'plant_type_id' => 'nullable|exists:plant_types,id',
            'limit' => 'nullable|integer|min:20|max:100',
        ]);

        $species = Species::with(['type'])
            ->withCount(['plants', 'sites', 'shrubs'])
            ->orderBy('name', 'asc');

        if (! empty($request->search)) {
            $species->where(function ($query) use ($request) {
                $query->where('name', 'like', "%{$request->search}%");
            });
        }

        if (! empty($request->plant_type_id)) {
            $species->where('plant_type_id', $request->plant_type_id);
        }

        if (! empty($request->limit)) {
            $species = $species->paginate($request->limit);
        } else {
            $species = $species->paginate(20);
        }

        return $this->success($species);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request)
    {
        $this->authorize('create', Species::class);

        $this->validate($request, [
            'name' => 'required|max:255|unique:species,name',
            'plant_type_id' => 'nullable|exists:plant_types,id',
        ]);

        $species = Species::create([
            'name' => $request->name,
            'plant_type_id' => $request->plant_type_id,
        ]);

        $species->load([
            'type' => function ($query) {
            },
        ]);

        return $this->created($species);
    }

    /**
     * @param Species $species
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Species $species, Request $request)
    {
        $this->authorize('update', $species);

        $rules = [
            'name' => 'required|max:255',
            'plant_type_id' => 'required|exists:plant_types,id',
        ];
        if ($request->name !== $species->name) {
            $rules['name'] .= '|unique:species,name';
        }

        $this->validate($request, $rules);

        $species->fill([
            'name' => $request->name,
            'plant_type_id' => $request->plant_type_id,
        ])->save();

        $species->load([
            'type' => function ($query) {
            },
        ]);

        return $this->created($species);
    }

    /**
     * @param \App\Species $species
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Exception
     */
    public function delete(Species $species)
    {
        $this->authorize('delete', $species);

        $common_trees = Site::whereHas('species', function ($query) use ($species) {
            $query->where('species.id', $species->id);
        })->count();

        $shrubs = Site::whereHas('shrubs', function ($query) use ($species) {
            $query->where('species.id', $species->id);
        })->count();

        $plants = Plant::whereHas('species', function ($query) use ($species) {
            $query->where('species.id', $species->id);
        })->count();

        if ($common_trees > 0 || $plants > 0 || $shrubs > 0) {
            return $this->error('Sites are attached to this species', [
                'species' => [
                    'This species is used in multiple resources and cannot be deleted
                     until all sites (common trees and shrubs) and plants are no longer
                     associated with this species.',
                ],
            ]);
        }

        $species->delete();

        return $this->deleted();
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function getMergeOptions(Request $request)
    {
        $this->authorize('merge', Species::class);

        $this->validate($request, [
            'species' => 'required|array',
            'species.*' => 'required|exists:species,id',
        ]);

        return $this->success([
            'types' => PlantType::orderBy('id', 'asc')->get(),
            'species' => Species::with('type')
                ->whereIn('id', $request->input('species'))
                ->get(),
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function mergeSpecies(Request $request)
    {
        $this->authorize('merge', Species::class);

        // Allow application to take its time

        $this->validate($request, [
            'species' => 'required|array',
            'species.*' => 'required|exists:species,id',
            'type' => 'required|exists:plant_types,id',
        ]);

        $species = Species::with('type')
            ->whereIn('id', $request->input('species'))
            ->get();

        if ($species->count() < 2) {
            return $this->error('Invalid species', [
                'species' => ['Please select at least 2 species'],
            ]);
        }

        $original = $species->shift();

        $original->fill([
            'plant_type_id' => $request->type,
        ])->save();

        foreach ($species as $item) {
            Plant::where('species_id', $item->id)->update([
                'species_id' => $original->id,
            ]);

            \DB::table('site_shrubs')->where('species_id', $item->id)->update([
                'species_id' => $original->id,
            ]);

            \DB::table('site_species')->where('species_id', $item->id)->update([
                'species_id' => $original->id,
            ]);

            $item->delete();
        }

        return $this->created('Merged successfully');
    }
}
