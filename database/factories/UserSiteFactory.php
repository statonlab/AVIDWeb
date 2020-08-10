<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\UserSite;
use Faker\Generator as Faker;

$factory->define(UserSite::class, function (Faker $faker) {
    return [
        'user_id' => factory(\App\User::class)->create()->id,
        'site_id' => factory(\App\Site::class)->create()->id,
        'editable' => $faker->boolean,
        'sends_reminders' => $faker->boolean,
        'is_shared' => $faker->boolean,
    ];
});
