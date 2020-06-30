<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteAttachedPlantsListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\PlotDeleted $event
     * @return void
     */
    public function handle($event)
    {
        $plot = $event->plot;

        $plot->plants->each(function ($plant) {
            $plant->delete();
        });
    }
}
