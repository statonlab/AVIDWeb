<?php

namespace App\Listeners;

use App\Jobs\GenerateReminderEvents;
use App\Reminder;
use App\Services\ReminderEventMaker;
use Illuminate\Contracts\Queue\ShouldQueue;

class GenerateSiteRemindersListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteCreated $event
     * @return void
     */
    public function handle($event)
    {
        $user = $event->site->user;

        if ($user->email_verified_at === null) {
            return;
        }

        $reminder = Reminder::create([
            'days' => 365 - 30,
            'user_id' => $user->id,
            'site_id' => $event->site->id,
        ]);

        $this->dispatch(new GenerateReminderEvents($reminder));

        $reminder = Reminder::create([
            'days' => 365 - 7,
            'user_id' => $user->id,
            'site_id' => $event->site->id,
        ]);

        $this->dispatch(new GenerateReminderEvents($reminder));
    }
}
