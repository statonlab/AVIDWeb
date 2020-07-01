<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteAttachedMeasurementsListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\PlantDeleted $event
     * @return void
     */
    public function handle($event)
    {
        $plant = $event->plant;

        $plant->measurements()->delete();
    }
}
