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

        if ($measurement->plot->last_measured_at === null) {
            $site = $measurement->site;

            if ($site->user->email_verified_at === null) {
                return;
            }

            /** @var \App\Reminder */
            $reminder = Reminder::create([
                'days' => 0,
                'user_id' => $site->user->id,
                'site_id' => $site->id,
            ]);

            for ($i = now()->addYear(); $i < now()->addYears(10); $i->addYear()) {
                ReminderEvent::create([
                    'reminder_id' => $reminder->id,
                    'site_id' => $site->id,
                    'date' => $i->copy()->subWeek(),
                ]);

                ReminderEvent::create([
                    'reminder_id' => $reminder->id,
                    'site_id' => $site->id,
                    'date' => $i->copy()->subMonth(),
                ]);
            }
        }

        $measurement->plot->setLastMeasuredAt($measurement);
    }
}
