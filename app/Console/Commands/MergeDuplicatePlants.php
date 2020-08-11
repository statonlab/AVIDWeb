<?php

namespace App\Console\Commands;

use App\Plant;
use Illuminate\Console\Command;

class MergeDuplicatePlants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'plants:merge-duplicates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Merges any duplicate plants into one.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $plants = Plant::cursor();
        $merged_count = 0;

        foreach ($plants as $plant) {
            $duplicates = Plant::where('plot_id', $plant->plot_id)
                ->where('tag', $plant->tag)
                ->where('species_id', $plant->species_id)
                ->where('old_tag', $plant->old_tag);

            if ($duplicates->count() > 1) {
                $duplicates = $duplicates->oldest()->get();
                $original = $duplicates->pop();

                foreach ($duplicates as $duplicate) {
                    foreach ($duplicate->measurements as $measurement) {
                        $measurement->fill(['plant_id' => $original->id])->save();
                    }
                    $duplicate->delete();

                    $merged_count++;
                }
            }
        }

        $this->info("Merged $merged_count plants.");
    }
}
