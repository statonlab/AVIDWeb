<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Measurement;
use Faker\Generator as Faker;

$factory->define(Measurement::class, function (Faker $faker) {
    $plant = factory(\App\Plant::class)->create();
    return [
        'plot_id' => $plant->plot->id,
        'site_id' => $plant->plot->site_id,
        'plant_id' => $plant->id,
        'user_id' => factory(\App\User::class)->create()->id,
        'is_located' => $faker->boolean,
        'date' => now()->format('Y-m-d'),
        'height' => $faker->numberBetween(10, 20),
        'is_alive' => $faker->boolean,
    ];
});
