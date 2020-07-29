<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteSiteReminders implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteDeleted $event
     * @return void
     */
    public function handle($event)
    {
        $event->site->reminders()->delete();
    }
}
