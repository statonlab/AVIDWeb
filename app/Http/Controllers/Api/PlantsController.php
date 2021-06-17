<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Measurement;
use App\Plant;
use App\Plot;
use App\Species;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PlantsController extends Controller
{
    /**
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
}
