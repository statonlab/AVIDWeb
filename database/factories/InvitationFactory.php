<?php
namespace Database\Factories;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Invitation;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Invitation::class, function (Faker $faker) {
    $leader = factory(\App\User::class)->create();
    $recipient = factory(\App\User::class)->create();
    $group = factory(\App\Group::class)->create(['user_id' => $leader->id]);

    return [
        'user_id' => $leader->id,
        'group_id' => $group->id,
        'name' => $recipient->name,
        'email' => $recipient->email,
        'status' => Invitation::PENDING,
        'token' => Str::random(60),
        'expires_at' => now()->addWeek(),
    ];
});
