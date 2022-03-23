<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ReminderSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Reminder::class, 10)->create();
    }
}
