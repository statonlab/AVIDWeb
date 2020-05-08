<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Plant;
use Faker\Generator as Faker;

$factory->define(Plant::class, function (Faker $faker) {
    return [
        'plot_id' => factory(\App\Plot::class)->create()->id,
        'user_id' => factory(\App\User::class)->create()->id,
        'plant_type_id' => \App\PlantType::first()->id,
        'species_id' => factory(\App\Species::class)->create()->id,
        'tag' => $faker->numberBetween(1000, 10000),
        'quadrant' => 'Northeast',
        'collected_at' => now(),
        'stems' => $faker->numberBetween(10, 20),
        'flowers' => $faker->numberBetween(10, 20),
    ];
});
