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

    public function uploadSite(Request $request)
    {
        Log::info('beginning upload');
        $created = '';
        $user = $request->user();
        $site = $request->site;
        $sitesController = new SitesController();
        Log::info('site found?');
        if ($site['id']) { // site exists on server already
            $serverSite = Site::find($site['id']);
            $serverSite = $sitesController->update($serverSite, $site);
        } else {
            Log::info('attempting site creation');
            $serverSite = $sitesController->upload($site, $user);
            Log::info('site creation success');
        }
        Log::info('site found!');
        if ($site['plots']) {
            foreach ($site['plots'] as $plot) {
                $plotsController = new PlotsController();
                if ($plot['id']) { // plot exists on server already
                    $serverPlot = Plot::find($plot['id']);
                    $serverPlot = $plotsController->update($serverPlot, $plot);
                } else {
                    $serverPlot = $plotsController->upload($serverSite, $plot, $user);
                }
                if ($plot['plants']) {
                    $plantsController = new PlantsController();
                    foreach ($plot['plants'] as $plant) {
                        if ($plant['id']) { // plant exists on server already
                            $serverPlant = Plant::find($plant['id']);
                            $serverPlant = $plantsController->update($serverPlant, $plant);
                        } else {
                            $serverPlant = $plantsController->upload($serverPlot, $plant, $user);
                            //$serverPlant = Plant::find($plant['id']);
                        }
                        if ($plant['measurements']) {
                            $measurementController = new MeasurementsController();
                            foreach ($plant['measurements'] as $measurement) {
                                if ($measurement['id']) { // measurement exists on server already
                                    $serverMeasurement = Measurement::find($measurement['id']);
                                    $serverMeasurement = $measurementController->update($serverMeasurement, $measurement);
                                } else {
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

    /**
     * Creates site on server from uploaded app data.
     * @param $site
     * @param $user
     * @return mixed
     * @throws \Throwable
     */
    public function upload($site, $user)
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

        foreach ($user->groups as $group) {
            $group->sites()->attach($serverSite->id);
        }

        $species = array_map(function ($species) {
            if (Species::find($species) !== null) {
                return $species;
            }
            return Species::create(['name' => $species])->id;
        }, $site['over_species']);

        $shrubs = array_map(function ($shrub) {
            if (Species::find($shrub) !== null) {
                return $shrub;
            }
            return Species::create(['name' => $shrub])->id;
        }, $site['under_species']);

        $serverSite->species()->sync($species);
        $serverSite->shrubs()->sync($shrubs);

        $serverSite->load(['county', 'state', 'species', 'shrubs']);
        $serverSite->loadCount(['plants', 'plots']);

        return $serverSite;
    }

    public function update(Site $serverSite, $appSite)
    {

        $serverSite = DB::transaction(function () use ($serverSite, $appSite) {
            $serverSite->fill([
                'name' => $appSite['name'],
                //'state_id' => $appSite['state_id'],
                //'county_id' => $appSite['county_id'],
                'basal_area' => $appSite['basal_area'],
                'diameter' => $appSite['tree_diameter'],
                'city' => $appSite['city'],
                'owner_name' => $appSite['owner_name'],
                'owner_contact' => $appSite['owner_contact'],
                'comments' => $appSite['comments'],
            ])->save();
            return $serverSite;
        });

        // Can't change species and shrubs from within the app

        $serverSite->load(['user', 'county', 'state', 'species', 'shrubs']);
        $serverSite->loadCount(['plants', 'plots']);

        return $serverSite;
    }
}
