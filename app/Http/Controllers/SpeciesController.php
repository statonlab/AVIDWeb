<?php

namespace App\Http\Controllers;

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
        ]);

        $species = Species::orderBy('name', 'asc');

        if (! empty($request->search)) {
            $species->where('name', 'like', "%{$request->search}%");
        }

        $species = $species->paginate(20);

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
            'genus' => 'required|max:255',
            'species' => 'required|max:255',
        ]);

        $name = "$request->genus $request->species";
        $species = Species::create([
            'genus' => $request->genus,
            'species' => $request->species,
            'name' => $name,
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

        $this->validate($request, [
            'genus' => 'required|max:255',
            'species' => 'required|max:255',
        ]);

        $name = "$request->genus $request->species";
        $species->update([
            'genus' => $request->genus,
            'species' => $request->species,
            'name' => $name,
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

        $species->delete();

        return $this->deleted();
    }
}
