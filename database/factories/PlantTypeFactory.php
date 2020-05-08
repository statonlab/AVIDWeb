<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\PlantType;
use Faker\Generator as Faker;

$factory->define(PlantType::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});
