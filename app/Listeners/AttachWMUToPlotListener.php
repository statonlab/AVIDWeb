<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use App\Services\WMURetriever;

class AttachWMUToPlotListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\PlotCreated $event
     * @return void
     */
    public function handle($event)
    {
        $plot = $event->plot;

        $retriever = new WMURetriever($plot);

        $retriever->setWMU();
    }
}
