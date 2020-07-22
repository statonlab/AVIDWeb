<?php

namespace App\Console\Commands;

use App\Site;
use App\Reminder;
use App\ReminderEvent;
use Illuminate\Console\Command;

class GenerateSiteReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates site reminders for all existing sites.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $sites = Site::whereNotNull('last_measured_at')
            ->whereHas('user', function ($query) {
                $query->whereNotNull('email_verified_at');
            })->cursor();

        foreach ($sites as $site) {
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
                'date' => $site->last_measured_at->addYear()->subWeek(),
            ]);

            ReminderEvent::create([
                'reminder_id' => $reminder->id,
                'site_id' => $site->id,
                'date' => $site->last_measured_at->addYear()->subMonth(),
            ]);
        }

        $count = $sites->count();

        $this->info("Generated reminders for $count sites.");
    }
}
