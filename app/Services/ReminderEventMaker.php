<?php

namespace App\Services;

use App\Reminder;
use App\ReminderEvent;

class ReminderEventMaker
{
    public function make(Reminder $reminder, \DateTimeInterface $date)
    {
            ReminderEvent::firstOrCreate([
                'site_id' => $reminder->site->id,
                'reminder_id' => $reminder->id,
                'date' => $date->format('Y-m-d'),
            ]);
    }
}
