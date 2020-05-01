<?php

namespace App\Http\Controllers;

use App\Site;
use App\User;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request, ?User $user = null)
    {
        if ($user !== null) {
            $this->authorize('viewSites', $user);
        } else {
            /** @var \App\User $user */
            $user = $request->user();
        }

        $this->validate($request, [
            'order_by' => 'nullable|in:name,plots_count,plants_count',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
        ]);

        $sites = $user->sites()->with([
            'state',
            'county',
            'species',
            'shrubs',
        ])->withCount(['plants', 'plots']);

        if (! empty($request->search)) {
            $term = $request->search;
            $sites->where(function ($query) use ($term) {
                $query->where('name', 'like', "%$term%");
            });
        }

        $sites = $sites->orderBy($request->order_by ?? 'created_at',
            $request->order_dir ?? 'desc')->paginate(20);

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
        $this->authorize('create', Site::class);

        $this->validate($request, [
            'name' => 'required|max:255',
            'state_id' => 'required|exists:states,id',
            'county_id' => 'required|exists:counties,id',
            'basal_area' => 'nullable|numeric',
            'diameter' => 'nullable|numeric',
            'city' => 'nullable|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            'species' => 'nullable|array',
            'species.*' => 'nullable|exists:species,id',
            'shrubs' => 'nullable|array',
            'shrubs.*' => 'nullable|exists:species,id',
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

        $site->species()->sync($request->species);
        $site->shrubs()->sync($request->shrubs);

        $site->load(['county', 'state']);
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
            'city' => 'nullable|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            'species' => 'nullable|array',
            'shrubs' => 'nullable|array',
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

        $site->load(['county', 'state', 'species', 'shrubs']);
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
}
