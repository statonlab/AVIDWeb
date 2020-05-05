<?php

namespace App\Console\Commands;

use App\Species;
use Illuminate\Console\Command;

class TrimSpecies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'species:trim';

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
        $species = Species::cursor();
        foreach ($species as $item) {
            $item->fill([
                'name' => trim($item->name),
            ])->save();
        }
    }
}
