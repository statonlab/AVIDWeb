<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Site;
use App\Plot;
use App\Plant;
use App\Measurement;
use App\Species;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SitesController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function download(Request $request)
    {
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

    public function upload(Request $request)
    {
        Log::info('beginning upload');
        $created = '';
        $user = $request->user();
        $site = $request->site;
        Log::info('site found?');
        if ($site['id']) { // site exists on server already
            $serverSite = Site::find($site['id']);
            // sync $site and $serverSite
        } else {
            Log::info('attempting site creation');
            $siteController = new SitesController();
            $serverSite = $siteController->create($site, $user);
            Log::info('site creation success');
        }
        Log::info('site found!');
        if ($site['plots']) {
            foreach ($site['plots'] as $plot) {
                if ($plot['id']) { // plot exists on server already
                    $serverPlot = Plot::find($plot['id']);
                    // sync $plot and $serverPlot
                } else {
                    $plotController = new PlotsController();
                    try {
                        $serverPlot = $plotController->upload($serverSite, $plot, $user);
                    } catch (\Throwable $e) {
                        Log::info('ruh roh');
                        Log::info($e);
                    }
                }
                if ($plot['plants']) {
                    foreach ($plot['plants'] as $plant) {
                        if ($plant['id']) { // plant exists on server already
                            $serverPlant = Plant::find($plant['id']);
                            // sync $plant and $serverplant
                        } else {
                            $plantsController = new PlantsController();
                            try {
                                $serverPlant = $plantsController->upload($serverPlot, $plant, $user);
                            } catch (\Throwable $e) {
                                Log::info('ruh roh');
                                Log::info($e);
                            }
                            //$serverPlant = Plant::find($plant['id']);
                        }
                        if ($plant['measurements']) {
                            foreach ($plant['measurements'] as $measurement) {
                                if ($measurement['id']) { // measurement exists on server already
                                    $serverMeasurement = Measurement::find($measurement['id']);
                                    // sync $measurement and $serverMeasurement
                                } else {
                                    $measurementController = new MeasurementsController();
                                    $measurementController->upload($serverPlant, $measurement, $user);
                                }
                            }
                        }
                    }
                }
            }
        }

        return $this->success($created);
    }

    public function create($site, $user)
    {
        $serverSite = DB::transaction(function () use ($site, $user) {
            return Site::create([
                'user_id' => $user->id,
                'name' => $site['name'],
//            'state_id' => //$site['state_id'],
//            'county_id' => //$site['county_id'],
                'basal_area' => $site['basal_area'],
                'diameter' => $site['tree_diameter'],
                'city' => $site['city'],
                'owner_name' => $site['owner_name'],
                'owner_contact' => $site['owner_contact'],
                'comments' => $site['comments'],
            ]);
        });
        Log::info('1');
        foreach ($user->groups as $group) {
            $group->sites()->attach($serverSite->id);
        }

        Log::info('2');
        $species = array_map(function ($species) {
            if (Species::find($species) !== null) {
                return $species;
            }
            return Species::create(['name' => $species])->id;
        }, $site['over_species']);

        Log::info('3');
        $shrubs = array_map(function ($shrub) {
            if (Species::find($shrub) !== null) {
                return $shrub;
            }
            return Species::create(['name' => $shrub])->id;
        }, $site['under_species']);

        Log::info('4');
        $serverSite->species()->sync($species);
        $serverSite->shrubs()->sync($shrubs);

        Log::info('5');
        $serverSite->load(['county', 'state', 'species', 'shrubs']);
        $serverSite->loadCount(['plants', 'plots']);

        Log::info('6');
        return $serverSite;
    }
}
