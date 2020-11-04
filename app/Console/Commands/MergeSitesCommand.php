<?php

namespace App\Console\Commands;

use App\Services\SiteMerger;
use App\Site;
use Illuminate\Console\Command;

class MergeSitesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sites:merge {--original= : provide the id of the site} {--duplicate= : provide the id of the duplicate site}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Merge a duplicate site back into the original site';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $original_id = $this->option('original');
        $duplicate_id = $this->option('duplicate');

        if (empty($original_id)) {
            $this->error("Please provide an id for the original site");
        }

        if (empty($duplicate_id)) {
            $this->error("Please provide an id for the duplicate site");
        }

        $original = Site::findOrFail($original_id);
        $duplicate = Site::findOrFail($duplicate_id);

        $this->info("Moving ".$duplicate->plots()->count(). " plots and ".$duplicate->measurements()->count()." measurements from $duplicate->name to $original->name.");

        if (! $this->confirm("Merge $duplicate->name into $original->name? This will move all plots and measurements from $duplicate->name into $original->name")) {
            $this->info("Aborted!");

            return 0;
        }

        (new SiteMerger($original, $duplicate))->merge();

        \Artisan::call('plots:update-measurements-date');

        $this->info("Sites merged successfully.");

        return 0;
    }
}
