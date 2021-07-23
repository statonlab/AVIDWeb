<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Site;
use App\Plot;
use App\Plant;
use App\Measurement;
use App\Species;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SitesController extends Controller
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

    /**
     * Returns a user's sites and shared sites, as well as the associated plots, plants, and measurements.
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function download(Request $request)
    {
        // Authorization taken care of by Sanctum

        $user = $request->user();

        $sites = Site::with([
            'species',
            'shrubs',
            'plots' => function ($query) {
                $query->with([
                    'plants' => function ($query) {
                        $query->with(['measurements', 'species']);
                    },
                ]);
            }
        ])
            ->withShared($user)
            ->orWhere('user_id', $user->id)
            ->get();

        return $this->success($sites);
    }

    public function create(Request $request)
    {
        $user = $request->user();

        $this->authorize('create', Site::class);

        $this->validate($request, [
            'name' => 'required|max:255',
            //'state_id' => 'required|exists:states,id',
            //'county_id' => 'required|exists:counties,id',
            'basal_area' => 'nullable|numeric',
            'tree_diameter' => 'nullable|numeric',
            'city' => 'nullable|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            //'species' => 'required|array',
            //'shrubs' => 'required|array',
            'comments' => 'nullable',
        ]);

        $site = Site::create([
            'user_id' => $request->user()->id,
            'name' => $request->name,
            //'state_id' => $request->state_id,
            //'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->tree_diameter,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_contact' => $request->owner_contact,
            'comments' => $request->comments,
        ]);

        foreach ($user->groups as $group) {
            $group->sites()->attach($site->id);
        }

        $site->load(['county', 'state']);
        $site->loadCount(['plants', 'plots']);

        return $this->created($site);
    }

    /**
     * Updates site from app.
     * @param Request $request
     * @param Site $site
     * @return JsonResponse|Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Site $site)
    {
        $this->authorize('update', $site);

        $this->validate($request, [
            'name' => 'required|max:255',
            //'state_id' => 'required|exists:states,id',
            //'county_id' => 'required|exists:counties,id',
            'basal_area' => 'nullable|numeric',
            'tree_diameter' => 'nullable|numeric',
            'city' => 'nullable|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            //'species' => 'required|array',
            //'shrubs' => 'required|array',
            'comments' => 'nullable',
        ]);

        $site->fill([
            'name' => $request->name,
            //'state_id' => $request->state_id,
            //'county_id' => $request->county_id,
            'basal_area' => $request->basal_area,
            'diameter' => $request->tree_diameter,
            'city' => $request->city,
            'owner_name' => $request->owner_name,
            'owner_contact' => $request->owner_contact,
            'comments' => $request->comments,
        ])->save();

        $site->load(['user', 'shrubs']);
        $site->loadCount(['plants', 'plots']);

        return $this->created($site);
    }
}
