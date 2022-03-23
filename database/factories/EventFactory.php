<?php
namespace Database\Factories;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return [
        'event_start' => now()->addWeek(),
        'title' => $faker->word,
        'description' => $faker->paragraph,
        'notification_date' => now()->addWeek(),
        'timezone' => $faker->randomElement(['EST', 'CST', 'MST', 'PST']),
        'event_type' => $faker->randomElement(['Webinar', 'In-Person']),
        'address' => $faker->address,
        'contact_info' => $faker->text,
        'excerpt' => $faker->text,
    ];
});
