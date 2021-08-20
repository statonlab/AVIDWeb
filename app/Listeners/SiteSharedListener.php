<?php

namespace App\Listeners;

use App\Notifications\SiteSharedNotification;
use App\User;
use App\Site;
use App\Reminder;
use App\ReminderEvent;
use Illuminate\Contracts\Queue\ShouldQueue;

class SiteSharedListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteShared $event
     * @return void
     */
    public function handle($event)
    {
        $user_site = $event->user_site;

        $user = $user_site->user;

        if ($user->email_verified_at === null) {
            return;
        }

        $site = $user_site->site;

        if ($site->last_measured_at === null) {
            return;
        }

        /** @var \App\Reminder */
        $reminder = Reminder::create([
            'days' => 0,
            'user_id' => $user_site->user_id,
            'site_id' => $user_site->site_id,
        ]);

        $reminder->events()->delete();

        ReminderEvent::create([
            'reminder_id' => $reminder->id,
            'site_id' => $site->id,
            'date' => $site->last_measured_at->addYear()->subWeek(),
        ]);

        ReminderEvent::create([
            'reminder_id' => $reminder->id,
            'site_id' => $site->id,
            'date' => $site->last_measured_at->addYear()->subMonth(),
        ]);

        $event->user_site->user->notify(new SiteSharedNotification($site));
    }
}
