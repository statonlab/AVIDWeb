<?php

namespace App\Listeners;

use App\Jobs\GenerateReminderEvents;
use App\Reminder;
use App\ReminderEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SiteUpdatedListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteUpdatedEvent $event
     * @return void
     */
    public function handle($event)
    {
        $site = $event->site;
        if ($site->last_measured_at) {
            ReminderEvent::where('site_id', $site->id)
                ->where('date', '>', $site->last_measured_at->format('Y-m-d'))
                ->delete();

            foreach (Reminder::where('site_id', $site->id)->cursor() as $reminder) {
                dispatch_sync(new GenerateReminderEvents($reminder));
            }
        }
    }
}
