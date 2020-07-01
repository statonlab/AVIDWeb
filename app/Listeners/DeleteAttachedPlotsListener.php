<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteAttachedPlotsListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteDeleted $event
     * @return void
     */
    public function handle($event)
    {
        $site = $event->site;

        $site->plots->each(function ($plot) {
            $plot->delete();
        });
    }
}
