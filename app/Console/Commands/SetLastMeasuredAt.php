<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Site;
use App\Plot;

class SetLastMeasuredAt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'set:lastmeasuredat';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sets the last_measured_at column for sites and plots.';

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
        $plots = Plot::cursor();

        foreach ($plots as $plot) {
            $most_recent = null;

            $plants = $plot->plants()->cursor();
            foreach ($plants as $plant) {
                $measurement = $plant->measurements()->orderBy('date', 'desc')->first();
                if ($measurement === null) continue;
                if ($most_recent === null || $measurement->date > $most_recent->date) {
                    $most_recent = $measurement;
                }
            }

            if ($most_recent !== null) {
                $plot->setLastMeasuredAt($most_recent);
            }
        }
    }
}
