<?php

use Illuminate\Database\Seeder;

class ReminderEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\ReminderEvent::class, 10)->create();
    }
}
