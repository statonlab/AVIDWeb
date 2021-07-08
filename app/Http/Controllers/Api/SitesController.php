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

    /**
     * Takes in one or more sites from the app and updates the server with it
     * @param Request $request
     * @return string
     * @throws \Throwable
     */
    public function uploadSites(Request $request)
    {
        $user = $request->user();
        if ($request->site) {
            $sites = [$request->site];
        } else {
            $sites = $request->sites;
        }

        $sitesApi = new SitesApi();

        foreach ($sites as $site) {
            $validation = $this->validateSite($site);
            if ($validation != 'validated successfully') {
                return $validation;
            }
        }

        DB::beginTransaction();
        foreach ($sites as $site) {

            if ($site['id']) { // site exists on server already
                $serverSite = Site::find($site['id']);
                $serverSite = $sitesApi->update($serverSite, $site);
            } else {
                $serverSite = $sitesApi->upload($site, $user);
            }
            if ($site['plots']) {
                foreach ($site['plots'] as $plot) {
                    $plotsApi = new PlotsApi();
                    if ($plot['id']) { // plot exists on server already
                        $serverPlot = Plot::find($plot['id']);
                        $serverPlot = $plotsApi->update($serverPlot, $plot);
                    } else {
                        $serverPlot = $plotsApi->upload($serverSite, $plot, $user);
                    }
                    if ($serverPlot === 'error, number in use') {
                        return $this->error('Already exists', [
                            'number' => ['This plot number already exists'],
                        ]);
                    }
                    if ($plot['plants']) {
                        $plantsApi = new PlantsApi();
                        foreach ($plot['plants'] as $plant) {
                            if ($plant['id']) { // plant exists on server already
                                $serverPlant = Plant::find($plant['id']);
                                $serverPlant = $plantsApi->update($serverPlant, $plant);
                            } else {
                                $serverPlant = $plantsApi->upload($serverPlot, $plant, $user);
                            }
                            if ($serverPlant == 'error, tag exists') {
                                return $this->error('Plant already exists', [
                                    'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
                                ]);
                            }
                            if ($plant['measurements']) {
                                $measurementsApi = new MeasurementsApi();
                                foreach ($plant['measurements'] as $measurement) {
                                    if ($measurement['id']) { // measurement exists on server already
                                        $serverMeasurement = Measurement::find($measurement['id']);
                                        $serverMeasurement = $measurementsApi->update($serverMeasurement, $measurement);
                                    } else {
                                        $serverMeasurement = $measurementsApi->upload($serverPlant, $measurement, $user);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        DB::commit();
        return $this->success('');
    }

    /**
     * Work in progress... will eventually handle all validation for a single site
     * @param $site
     * @return string
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function validateSite($site)
    {
        $quadrants = implode(',', static::$quadrants);
        $validator = \Validator::make($site, [
            'name' => 'required',
            'basal_area' => 'nullable|numeric',
            'tree_diameter' => 'nullable|numeric',
            'city' => 'nullable|max:255',
            'owner_name' => 'nullable|max:255',
            'owner_contact' => 'nullable',
            'comments' => 'nullable',
        ]);
        if ($validator->fails()) {
            return $this->error('Message', $validator->errors()->toArray());
        }

        if ($site['id']) { // site exists on server already
            $serverSite = Site::find($site['id']);
            $this->authorize('update', $serverSite);
        } else {
            $this->authorize('create', Site::class);
        }

        if ($site['plots']) {
            foreach ($site['plots'] as $plot) {
                $validator = \Validator::make($plot, ['number' => 'required|integer',]);
                if ($validator->fails()) {
                    return $this->error('Message', [$validator->errors()]);
                }

                if ($plot['id']) { // plot exists on server already
                    $serverPlot = Plot::find($plot['id']);
                    $this->authorize('update', $serverPlot);
                }

                if ($plot['plants']) {
                    foreach ($plot['plants'] as $plant) {
                        $validator = \Validator::make($plant, [
                            'tag' => 'required|integer',
                            'plant_type_id' => 'required|exists:plant_types,id',
                            'quadrant' => "required|in:$quadrants",
                        ]);
                        if ($validator->fails()) {
                            return $this->error('Message', [$validator->errors()]);
                        }

                        if ($plant['id']) { // plant exists on server already
                            $serverPlant = Plant::find($plant['id']);
                            $this->authorize('update', $serverPlant);
                        }

                        if ($plant['measurements']) {
                            foreach ($plant['measurements'] as $measurement) {
                                if ($measurement['is_located'] == 1) {
                                    $validator = \Validator::make($measurement, [
                                        'date' => 'required|date',
                                        'is_located' => 'required|boolean',
                                        'height' => 'required|numeric',
                                        'is_alive' => 'required|boolean',
                                    ]);
                                } else {
                                    $validator = \Validator::make($measurement, [
                                        'date' => 'required|date',
                                        'is_located' => 'required|boolean',
                                    ]);
                                }
                                if ($validator->fails()) {
                                    return $this->error('Message', [$validator->errors()]);
                                }

                                if ($measurement['id']) { // measurement exists on server already
                                    $serverMeasurement = Measurement::find($measurement['id']);
                                    $this->authorize('update', $serverMeasurement);
                                }
                            }
                        }
                    }
                }
            }
        }
        return 'validated successfully';
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
