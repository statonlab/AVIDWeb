<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Site;
use App\Plot;
use App\Plant;
use App\Measurement;
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
     * Takes in one site from the app and updates the server with it.
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Throwable
     */
    public function uploadSite(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $quadrants = implode(',', static::$quadrants);
            $user = $request->user();
            $site = $request->site;
            $validator = \Validator::make($site, [
                'name' => 'required',
                'basal_area' => 'nullable|numeric',
                'diameter' => 'nullable|numeric',
                'city' => 'nullable|max:255',
                'owner_name' => 'nullable|max:255',
                'owner_contact' => 'nullable',
                'comments' => 'nullable',
            ]);
            if ($validator->fails()) {
                return $this->error('Message', [$validator->errors()]);
            }
            $sitesApi = new SitesApi();
            if ($site['id']) { // site exists on server already
                $serverSite = Site::find($site['id']);
                $this->authorize('update', $serverSite);
                $serverSite = $sitesApi->update($serverSite, $site);
            } else {
                $this->authorize('create', Site::class);
                $serverSite = $sitesApi->upload($site, $user);
            }
            if ($site['plots']) {
                foreach ($site['plots'] as $plot) {
                    $validator = \Validator::make($plot, ['number' => 'required|integer',]);
                    if ($validator->fails()) {
                        return $this->error('Message', [$validator->errors()]);
                    }
                    $plotsApi = new PlotsApi();
                    if ($plot['id']) { // plot exists on server already
                        $serverPlot = Plot::find($plot['id']);
                        $this->authorize('update', $serverPlot);
                        $serverPlot = $plotsApi->update($serverPlot, $plot);
                    } else {
                        $this->authorize('update', $serverSite);
                        $serverPlot = $plotsApi->upload($serverSite, $plot, $user);
                    }
                    if ($plot['plants']) {
                        $plantsApi = new PlantsApi();
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
                                $serverPlant = $plantsApi->update($serverPlant, $plant);
                            } else {
                                $this->authorize('update', $serverPlot);
                                $serverPlant = $plantsApi->upload($serverPlot, $plant, $user);
                            }
                            if ($serverPlant === 'error, tag exists') {
                                return $this->error('Plant already exists', [
                                    'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
                                ]);
                            }
                            if ($plant['measurements']) {
                                $measurementsApi = new MeasurementsApi();
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
                                        $serverMeasurement = $measurementsApi->update($serverMeasurement, $measurement);
                                    } else {
                                        $this->authorize('update', $serverPlant);
                                        $measurementsApi->upload($serverPlant, $measurement, $user);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return $this->success('');
        });
    }

    /**
     * Takes in several sites from the app and updates the server with it
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Throwable
     */
    public function uploadSites(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $quadrants = implode(',', static::$quadrants);
            $user = $request->user();
            $sites = $request->sites;
            $sitesApi = new SitesApi();
            foreach ($sites as $site) {
                $validator = \Validator::make($site, [
                    'name' => 'required',
                    'basal_area' => 'nullable|numeric',
                    'diameter' => 'nullable|numeric',
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
                    $serverSite = $sitesApi->update($serverSite, $site);
                } else {
                    $this->authorize('create', Site::class);
                    $serverSite = $sitesApi->upload($site, $user);
                }
                if ($site['plots']) {
                    foreach ($site['plots'] as $plot) {
                        $validator = \Validator::make($plot, ['number' => 'required|integer',]);
                        if ($validator->fails()) {
                            return $this->error('Message', [$validator->errors()]);
                        }
                        $plotsApi = new PlotsApi();
                        if ($plot['id']) { // plot exists on server already
                            $serverPlot = Plot::find($plot['id']);
                            $this->authorize('update', $serverPlot);
                            $serverPlot = $plotsApi->update($serverPlot, $plot);
                        } else {
                            $this->authorize('update', $serverSite);
                            $serverPlot = $plotsApi->upload($serverSite, $plot, $user);
                        }
                        if ($plot['plants']) {
                            $plantsApi = new PlantsApi();
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
                                    $serverPlant = $plantsApi->update($serverPlant, $plant);
                                } else {
                                    $this->authorize('update', $serverPlot);
                                    $serverPlant = $plantsApi->upload($serverPlot, $plant, $user);
                                }
                                if ($serverPlant === 'error, tag exists') {
                                    return $this->error('Plant already exists', [
                                        'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
                                    ]);
                                }
                                if ($plant['measurements']) {
                                    $measurementsApi = new MeasurementsApi();
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
                                            $serverMeasurement = $measurementsApi->update($serverMeasurement, $measurement);
                                        } else {
                                            $this->authorize('update', $serverPlant);
                                            $serverMeasurement = $measurementsApi->upload($serverPlant, $measurement, $user);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return $this->success('');
        });
    }
}
