<?php

namespace App\Http\Controllers;

use App\Site;
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
    public function index(Request $request)
    {
        $this->validate($request, [
            'search' => 'nullable|max:255',
        ]);

        /** @var \App\User $user */
        $user = $request->user();

        $sites = $user->sites()->with([
            'state',
            'county',
        ]);

        if (! empty($request->search)) {
            $term = $request->search;
            $sites->where(function ($query) use ($term) {
                $query->where('name', 'like', "%$term%");
            });
        }

        $sites = $sites->paginate(20);

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
            'owner_address' => 'nullable',
        ]);

        $site = Site::create([
            'user_id' => $request->user()->id,
            'name' => $request->name,
            'state_id' => $request->state_id,
            'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->diamater,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_address' => $request->owner_address,
        ]);

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
            'owner_address' => 'nullable',
        ]);

        $site->update([
            'name' => $request->name,
            'state_id' => $request->state_id,
            'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->diamater,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_address' => $request->owner_address,
        ]);

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
