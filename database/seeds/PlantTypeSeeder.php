<?php

use Illuminate\Database\Seeder;

class PlantTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
