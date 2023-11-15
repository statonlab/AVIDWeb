<?php

namespace App\Jobs;

use App\UserSite;
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
            ->andWhereHas('site', function ($query) {
                /**
                 * possible cases:
                 * site collected this year, but not 11 months ago -> no reminders
                 * site collected this year, but 11 months ago -> send reminder
                 * site collected last year or earlier, but it hasn't been 11 months -> no reminders
                 * site collected last year or earlier, and it has been 11 months -> send reminders
                 * the logic to solve this is:
                 *
                 * we can ignore year, the entire dependency is on if it's been 11 months.
                 * if last_measured_at is before 11 months ago, send reminders
                 * if last_measured_at is after 11 months ago, don't send reminders
                 */
//                $query->whereYear('last_measured_at', '<', now()->year);
                $query->where('last_measured_at', '<', now()->subMonths(11));
            })
            ->with(['reminder'])
            ->cursor();

        $events = $events->filter(function ($event) {
          if ($event->site->user_id === $event->reminder->user_id) {
            if ($event->site->sends_reminders) {
              return true;
            }
          } else {
            $user_site = UserSite::where('user_id', $event->reminder->user_id)
                ->where('site_id', $event->site_id)
                ->first();
            if ($user_site !== null) {
              if ($user_site->sends_reminders) {
                return true;
              }
            }
          }

          return false;
        });

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
