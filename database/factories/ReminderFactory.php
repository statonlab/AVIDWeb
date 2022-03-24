<?php
namespace Database\Factories;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Reminder;
use Faker\Generator as Faker;

$factory->define(Reminder::class, function (Faker $faker) {
    return [
        'user_id' => factory(\App\User::class)->create()->id,
        'days' => $faker->numberBetween(100, 3000),
        'sent_at' => \Carbon\Carbon::now()->addDays($faker->numberBetween()),
    ];
});
