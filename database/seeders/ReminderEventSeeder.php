<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ReminderEventSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\ReminderEvent::class, 10)->create();
    }
}
