<?php

namespace App\Listeners;

use App\Reminder;
use App\ReminderEvent;
use App\Jobs\GenerateReminderEvents;
use App\Services\ReminderEventMaker;
use Illuminate\Contracts\Queue\ShouldQueue;

class MeasurementCreatedListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\MeasurementCreated $event
     * @return void
     */
    public function handle($event)
    {
        $measurement = $event->measurement;

        $site = $measurement->site;

        if ($site->user->email_verified_at === null) {
            return;
        }

        if ($site->last_measured_at !== null && $measurement->date < $site->last_measured_at) {
            return;
        }

        /** @var \App\Reminder */
        $reminder = Reminder::firstOrCreate([
            'days' => 0,
            'user_id' => $site->user->id,
            'site_id' => $site->id,
        ]);

        $reminder->events()->delete();

        ReminderEvent::create([
            'reminder_id' => $reminder->id,
            'site_id' => $site->id,
            'date' => $measurement->date->addYear()->subWeek(),
        ]);

        ReminderEvent::create([
            'reminder_id' => $reminder->id,
            'site_id' => $site->id,
            'date' => $measurement->date->addYear()->subMonth(),
        ]);

        $measurement->plot->setLastMeasuredAt($measurement);
    }
}
