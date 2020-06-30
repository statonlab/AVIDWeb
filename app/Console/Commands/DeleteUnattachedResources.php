<?php

namespace App\Console\Commands;

use App\Plot;
use App\Plant;
use App\Measurement;
use Illuminate\Console\Command;

class DeleteUnattachedResources extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:unattached';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes any plots, plants, or measurements that no longer belong to an existing resource.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $count = 0;

        $count += Plot::whereDoesntHave('site')->delete();
        $count += Plant::whereDoesntHave('plot')->delete();
        $count += Measurement::whereDoesntHave('plant')->delete();

        $this->info("Deleted $count unattached resources.");
    }
}
