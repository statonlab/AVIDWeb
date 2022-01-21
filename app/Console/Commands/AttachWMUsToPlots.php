<?php

namespace App\Console\Commands;

use App\Plot;
use Illuminate\Console\Command;
use App\Services\WMURetriever;

class AttachWMUsToPlots extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'attach:wmus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Attaches a WMU to all plots';

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
     * @return mixed
     */
    public function handle()
    {
        $count = 0;

        foreach (Plot::orderBy('id')->whereNull('wmu')->cursor() as $plot) {
            $retriever = new WMURetriever($plot);
            $retriever->setWMU();

            $count++;
        }

        $this->info("Attached WMUs to $count plots.");
    }
}
