<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Plot;
use Faker\Generator as Faker;

$factory->define(Plot::class, function (Faker $faker) {
    $user = factory(\App\User::class)->create();
    $percentages = [
        '0-9%',
        '10-19%',
        '20-29%',
        '30-39%',
        '40-49%',
        '50-59%',
        '60-69%',
        '70-79%',
        '80-89%',
        '90-100%',
    ];

    return [
        'user_id' => $user->id,
        'site_id' => factory(\App\Site::class)->create(['user_id' => $user->id])->id,
        'number' => $faker->numberBetween(1, 1000),
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude,
        'basal_area' => $faker->numberBetween(0, 1000),
        'is_protected' => $faker->boolean,
        'protection_seasons' => $faker->randomElement(['0', '1-2', '>=3']),
        'canopy' => $faker->randomElement($percentages),
        'subcanopy' => $faker->randomElement($percentages),
        'ground_cover' => $faker->randomElement($percentages),
    ];
});
