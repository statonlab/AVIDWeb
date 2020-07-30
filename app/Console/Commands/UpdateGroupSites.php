<?php

namespace App\Console\Commands;

use App\Group;
use Illuminate\Console\Command;

class UpdateGroupSites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:group-sites';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Detach and reattach all sites for every group';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $groups = Group::cursor();
        $group_count = 0;

        foreach ($groups as $group) {
          $users = $group->users()->cursor();
          $group_count++;

          foreach ($users as $user) {
            $sites = $user->sites()->select(['sites.id'])->get()->pluck('id');
            $group->sites()->syncWithoutDetaching($sites);
          }
        }

        $this->info("Updated sites for $group_count groups.");
    }
}
