<?php

namespace App\Console\Commands;

use App\Measurement;
use Illuminate\Console\Command;

class AddSiteInfoToMeasurements extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'measurements:add-sites';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $measurements = Measurement::cursor();

        foreach ($measurements as $measurement) {
            $measurement->fill([
                'site_id' => $measurement->plant->plot->site_id,
                'plot_id' => $measurement->plant->plot_id,
            ])->save();
        }
    }
}
