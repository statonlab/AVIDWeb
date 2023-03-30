<?php

namespace Database\Factories;

use App\PendingFile;
use App\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class PendingFileFactory extends Factory
{
    protected $model = PendingFile::class;

    public function definition(): array
    {
        return [
            'user_id' => factory(User::class),
            'path' => $this->faker->word(),
            'disk' => $this->faker->word(),
            'url' => $this->faker->url(),
            'progress' => $this->faker->randomNumber(),
            'error' => $this->faker->word(),
        ];
    }
}
