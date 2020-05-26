<?php

namespace App\Console\Commands;

use App\Species;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CleanDuplicateSpecies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'species:clean-duplicates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Locates any duplicate species and merges them into one.';

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
        $deleted = 0;

        foreach (Species::cursor() as $species) {
            $duplicates = Species::where('name', $species->name)
                ->where('plant_type_id', $species->plant_type_id);
            if ($duplicates->count() > 1) {
                $duplicates = $duplicates->orderBy('id', 'desc')->get();
                $original = $duplicates->pop();
                foreach ($duplicates as $duplicate) {
                    DB::table('plants')->where('species_id', $duplicate->id)->update(['species_id' => $original->id]);
                    DB::table('site_species')->where('species_id', $duplicate->id)->update(['species_id' => $original->id]);
                    DB::table('site_shrubs')->where('species_id', $duplicate->id)->update(['species_id' => $original->id]);
                    $duplicate->delete();
                    $deleted++;
                }
            }
        }

        $this->info("Cleaned $deleted duplicate species.");
    }
}
