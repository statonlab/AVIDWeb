<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class, 10)->create();
        \App\User::create([
            'name' => 'Chance Stribling',
            'email' => 'cstribling1717@gmail.com',
            'password' => bcrypt('testpass'),
            'role_id' => \App\Role::where('name', 'Admin')->first()->id,
        ]);
    }
}
