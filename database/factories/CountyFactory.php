<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\County;
use Faker\Generator as Faker;

$factory->define(County::class, function (Faker $faker) {
    return [
        'state_id' => factory(\App\State::class)->create()->id,
        'name' => $faker->word,
    ];
});
