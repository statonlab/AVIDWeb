<?php
namespace Database\Factories;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ReminderEvent;
use Faker\Generator as Faker;

$factory->define(ReminderEvent::class, function (Faker $faker) {
    return [
        'reminder_id' => factory(\App\Reminder::class)->create()->id,
        'site_id' => factory(\App\Site::class)->create()->id,
        'date' => $faker->date(),
    ];
});
