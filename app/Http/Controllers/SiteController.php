<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\ListsSites;
use App\Site;
use App\User;
use App\Species;
use Illuminate\Http\Request;
use App\Exports\SiteExport;
use App\Imports\SiteImport;
use Maatwebsite\Excel\Facades\Excel;

class SiteController extends Controller
{
    use ListsSites;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request, ?User $user = null)
    {
        // If given a user then we want to view sites for the given user only
        if ($user !== null) {
            $this->authorize('viewSites', $user);
        } else {
            /** @var \App\User $user */
            $user = $request->user();
        }

        $this->validate($request, [
            'order_by' => 'nullable|in:name,plots_count,plants_count,last_measured_at',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
            'limit' => 'nullable|integer',
            'site_type' => 'nullable|in:shared,owned',
        ]);

        $sites = null;

        $sites = $this->getSites()->paginate($request->limit ?? 20);

        return $this->success($sites);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Request $request)
    {
        $user = $request->user();

        $this->authorize('create', Site::class);

        $this->validate($request, [
            'name' => 'required|max:255',
            'state_id' => 'required|exists:states,id',
            'county_id' => 'required|exists:counties,id',
            'basal_area' => 'nullable|numeric',
            'diameter' => 'nullable|numeric',
            'city' => 'required|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            'species' => 'required|array',
            'shrubs' => 'required|array',
        ]);

        $site = Site::create([
            'user_id' => $request->user()->id,
            'name' => $request->name,
            'state_id' => $request->state_id,
            'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->diameter,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_contact' => $request->owner_contact,
        ]);

        foreach ($user->groups as $group) {
            $group->sites()->attach($site->id);
        }

        $species = array_map(function ($species) {
            if (Species::find($species) !== null) {
                return $species;
            }
            return Species::create(['name' => $species])->id;
        }, $request->species);

        $shrubs = array_map(function ($shrub) {
            if (Species::find($shrub) !== null) {
                return $shrub;
            }
            return Species::create(['name' => $shrub])->id;
        }, $request->shrubs);

        $site->species()->sync($species);
        $site->shrubs()->sync($shrubs);

        $site->load(['county', 'state', 'species', 'shrubs']);
        $site->loadCount(['plants', 'plots']);

        return $this->created($site);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Site $site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Site $site)
    {
        $this->authorize('view', $site);

        $site->load(['county', 'state', 'species', 'shrubs']);
        $site->loadCount(['plants', 'plots']);

        return $this->success($site);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Site $site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Site $site)
    {
        $this->authorize('update', $site);

        $this->validate($request, [
            'name' => 'required|max:255',
            'state_id' => 'required|exists:states,id',
            'county_id' => 'required|exists:counties,id',
            'basal_area' => 'nullable|numeric',
            'diameter' => 'nullable|numeric',
            'city' => 'required|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            'species' => 'required|array',
            'species.*' => 'required|exists:species,id',
            'shrubs' => 'required|array',
            'shrubs.*' => 'required|exists:species,id',
        ]);

        $site->fill([
            'name' => $request->name,
            'state_id' => $request->state_id,
            'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->diameter,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_contact' => $request->owner_contact,
        ])->save();

        $site->species()->sync($request->species);
        $site->shrubs()->sync($request->shrubs);

        $site->load(['user', 'county', 'state', 'species', 'shrubs']);
        $site->loadCount(['plants', 'plots']);

        return $this->created($site);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Site $site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Site $site)
    {
        $this->authorize('delete', $site);

        $site->delete();

        return $this->created('Site deleted successfully');
    }

    public function export(Site $site)
    {
        $this->authorize('view', $site);

        return Excel::download(new SiteExport($site), "$site->name.xlsx");
    }

    public function import(Site $site, Request $request)
    {
        $user = $request->user();

        $this->authorize('create', $site);

        $this->validate($request, [
            'file' => 'required|file',
        ]);

        Excel::import(new SiteImport($user, $site), $request->file('file'));

        return $this->success('Measurements uploaded successfully.');
    }

    public function scopeWithShared($query, User $user) {
        return $query->whereHas('userSite', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->orWhere('user_id', $user->id);
    }
}
