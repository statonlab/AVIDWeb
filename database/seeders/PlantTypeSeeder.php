<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PlantTypeSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        \App\PlantType::firstOrCreate([
            'name' => 'Spring Wildflower',
        ]);

        \App\PlantType::firstOrCreate([
            'name' => 'Woody Seedling',
        ]);
    }
}
