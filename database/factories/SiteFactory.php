<?php
namespace Database\Factories;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Site;
use App\State;
use App\County;
use Faker\Generator as Faker;

$factory->define(Site::class, function (Faker $faker) {
    $state = State::first();
    $county = County::first();

    return [
        'user_id' => factory(\App\User::class)->create()->id,
        'name' => $faker->name,
        'state_id' => $state->id,
        'county_id' => $county->id,
        'basal_area' => $faker->numberBetween(10, 100),
        'diameter' => $faker->numberBetween(10, 100),
        'city' => $faker->city,
        'owner_name' => $faker->name,
        'owner_contact' => $faker->paragraph,
        'comments' => $faker->paragraph,
    ];
});
