<?php

namespace App\Console\Commands;

use App\Group;
use Illuminate\Console\Command;

class ShareGroupData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'groups:share-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Associate sites to their appropriate groups.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $groups = Group::cursor();
        /** @var Group $group */
        foreach ($groups as $group) {
            foreach ($group->users as $user) {
                $group->sites()->syncWithoutDetaching($user->sites->pluck('id'));
            }
        }
    }
}
