<?php

namespace App\Jobs;

use App\Exports\SiteExport;
use App\Notifications\ReminderNotification;
use App\ReminderEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Facades\Excel;

class SendReminders implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $events = ReminderEvent::whereDate('date', now())
            ->whereDoesntHave('reminder', function ($query) {
                $query->whereDate('sent_at', now());
            })
            ->with(['reminder'])
            ->cursor();

        /** @var ReminderEvent $event */
        foreach ($events as $event) {
            $attachment = $this->makeSheet($event);
            $event->reminder->user->notify(new ReminderNotification($event->reminder,
                $attachment));

            $exists = $event->reminder->events()->where('date', '>', now())->exists();
            if (! $exists) {
                ReminderEvent::create([
                    'reminder_id' => $event->reminder_id,
                    'site_id' => $event->site_id,
                    'date' => $event->date->addWeek(),
                ]);
            }

            $event->reminder->fill(['sent_at' => now()]);
            if($attachment) {
                \Storage::delete($attachment);
            }
        }
    }

    /**
     * @param \App\ReminderEvent $event
     * @return string|null
     */
    protected function makeSheet(ReminderEvent $event)
    {
        $name = 'exports/reminder-'.$event->id.'-'.uniqid().'.xlsx';
        $path = storage_path("app/$name");
        if (Excel::store(new SiteExport($event->site), $name)) {
            return $path;
        }

        return null;
    }
}
