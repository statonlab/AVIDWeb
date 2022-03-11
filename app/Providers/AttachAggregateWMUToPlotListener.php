<?php

namespace App\Providers;

use App\Events\PlotUpdated;
use App\Services\AggregateWMURetriever;

class AttachAggregateWMUToPlotListener
{
    /**
     * Handle the event.
     *
     * @param PlotUpdated $event
     * @return void
     * @throws \Exception
     */
    public function handle(PlotUpdated $event)
    {
        $plot = $event->plot;

        $retriever = new AggregateWMURetriever($plot);

        $retriever->setAggregateWMU();
    }
}
