<?php

namespace App\Http\Controllers\Api;

use App\Site;
use App\Species;
use Illuminate\Support\Facades\DB;

class SitesApi
{
    /**
     * Creates site on server from uploaded app data.
     * @param $site
     * @param $user
     * @return mixed
     * @throws \Throwable
     */
    public function upload($site, $user)
    {
        $serverSite = Site::create([
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

        // Can't change species and shrubs from within the app

        $serverSite->load(['user', 'county', 'state', 'species', 'shrubs']);
        $serverSite->loadCount(['plants', 'plots']);

        return $serverSite;
    }
}
