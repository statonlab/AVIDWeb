<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return [
        'event_start' => now()->addWeek(),
        'title' => $faker->word,
        'description' => $faker->paragraph,
    ];
});
