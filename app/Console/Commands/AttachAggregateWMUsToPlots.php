<?php

namespace App\Console\Commands;

use App\Plot;
use App\Services\AggregateWMURetriever;
use Illuminate\Console\Command;

class AttachAggregateWMUsToPlots extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'attach:aggregate_wmus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Attaches an aggregate WMU to all plots';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $count = 0;

        foreach (Plot::orderBy('id')->whereNull('aggregate_wmu')->cursor() as $plot) {
            $retriever = new AggregateWMURetriever($plot);
            $retriever->setAggregateWMU();

            $count++;
        }

        $this->info("Attached aggregate WMUs to $count plots.");

        return Command::SUCCESS;
    }
}
