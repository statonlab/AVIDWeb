<?php

namespace App\Http\Controllers\Api;

use App\Plant;
use App\Plot;
use App\Species;
use Illuminate\Support\Facades\DB;

class PlantsApi
{
    /**
     * Creates plant on server from uploaded app data.
     * @param Plot $plot
     * @param $plant
     * @param $user
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Throwable
     */
    public function upload(Plot $plot, $plant, $user)
    {
        $exists = Plant::where('tag', $plant['tag'])
            ->where('plot_id', $plot['id'])
            ->exists();
        if ($exists) {
            return $this->error('Plant already exists', [
                'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
            ]);
        }

        // new species not applicable for now... but this should work when it's implemented app-side
        $new_species = null;
        if ($plant['new_species']) {
            $species = Species::where('name', $plant['new_species_name'])
                ->where('plant_type_id', $plant['plant_type_id'])
                ->first();
            if ($species !== null) {
                $new_species = $species;
            } else {
                $new_species = Species::create([
                    'name' => $plant['new_species_name'],
                    'plant_type_id' => $plant['plant_type_id'],
                ]);
            }
        }

        $plant = DB::transaction(function () use ($plot, $plant, $user, $new_species) {
            /** @var \App\User $user */
            $plant = Plant::create([
                'plot_id' => $plot['id'],
                'plant_type_id' => $plant['plant_type_id'],
                'species_id' => $new_species ? $new_species->id : $plant['species_id'],
                'tag' => $plant['tag'],
                'quadrant' => $plant['quadrant'],
                'user_id' => $user->id,
            ]);
            return $plant;
        });

        return $plant;
    }

    public function update(Plant $serverPlant, $appPlant)
    {
        if ($serverPlant->tag != $appPlant['tag']) {
            $exists = Plant::where('tag', $appPlant['tag'])
                ->where('plot_id', $serverPlant->plot->id)
                ->exists();
            if ($exists) {
                return $this->error('Plant already exists', [
                    'tag' => ['Tag already exists in this plot. Please use a unique tag.'],
                ]);
            }
        }

        // At the moment, cannot make new species from app
//        $new_species = null;
//
//        if ($request->new_species) {
//            $species = Species::where('name', $request->new_species_name)
//                ->where('plant_type_id', $request->plant_type_id)
//                ->first();
//            if ($species !== null) {
//                $new_species = $species;
//            } else {
//                $new_species = Species::create([
//                    'name' => $request->new_species_name,
//                    'plant_type_id' => $request->plant_type_id,
//                ]);
//            }
//        }

        $serverPlant = DB::transaction(function () use ($serverPlant, $appPlant) {
            $serverPlant->fill([
                'plant_type_id' => $appPlant['plant_type_id'],
                'species_id' => $appPlant['species_id'], // $new_species ? $new_species->id : $request->species_id,
                'tag' => $appPlant['tag'],
                'quadrant' => $appPlant['quadrant'],
            ])->save();
            return $serverPlant;
        });

        $serverPlant->load([
            'type' => function ($query) {
            },
            'species' => function ($query) {
            },
            'plot' => function ($query) {
                $query->with(['site']);
            },
            'measurements' => function ($query) {
            },
        ]);

        $serverPlant->loadCount(['measurements']);

//        if ($serverPlant->species->name) {
//            $serverPlant->species_name = $serverPlant->species->name;
//        }
//        else {
//            $serverPlant->species_name = $serverPlant->species;
//        }

        return $serverPlant;
    }
}
