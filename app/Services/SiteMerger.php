<?php

namespace App\Services;

use App\Measurement;
use App\MergeBackup;
use App\Plot;
use App\Site;

class SiteMerger
{
    /**
     * @var \App\Site
     */
    protected Site $duplicate;

    /**
     * @var \App\Site
     */
    protected Site $original;

    /**
     * SiteMerger constructor.
     *
     * @param \App\Site $original
     * @param \App\Site $duplicate
     */
    public function __construct(Site $original, Site $duplicate)
    {
        $this->original = $original;
        $this->duplicate = $duplicate;
    }

    /**
     * Merge duplicate into original.
     *
     * @throws \Exception
     */
    public function merge()
    {
        // Fix measurement site_id after backing up the original data
        Measurement::where('site_id', $this->duplicate->id)
            ->get()
            ->map(function (Measurement $measurement) {
                MergeBackup::create([
                    'resource_type' => Measurement::class,
                    'resource_id' => $measurement->id,
                    'data' => $measurement->toArray(),
                ]);

                $measurement->fill([
                    'site_id' => $this->original->id,
                ])->save();
            });

        // Fix plots site_id after backing up the original data
        Plot::where('site_id', $this->duplicate->id)
            ->get()
            ->map(function (Plot $plot) {
                MergeBackup::create([
                    'resource_type' => Plot::class,
                    'resource_id' => $plot->id,
                    'data' => $plot->toArray(),
                ]);

                $plot->fill([
                    'site_id' => $this->original->id,
                ])->save();
            });

        // Soft delete the duplicate site
        $this->duplicate->delete();
    }
}