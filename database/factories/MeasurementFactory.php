<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Measurement;
use Faker\Generator as Faker;

$factory->define(Measurement::class, function (Faker $faker) {
    return [
        'plant_id' => factory(\App\Plant::class)->create()->id,
        'user_id' => factory(\App\User::class)->create()->id,
        'is_located' => $faker->boolean,
        'date' => now()->format('Y-m-d'),
        'height' => $faker->numberBetween(10, 20),
        'is_alive' => $faker->boolean,
    ];
});
