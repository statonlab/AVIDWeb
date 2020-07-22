<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteSharedSiteReminders implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteStoppedSharing $event
     * @return void
     */
    public function handle($event)
    {
        $user_site = $event->user_site;

        $site = $user_site->site;

        $site->reminders()->where('user_id', $user_site->user_id)->delete();
    }
}
