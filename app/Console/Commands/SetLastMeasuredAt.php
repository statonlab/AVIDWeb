<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
        
    }
}
