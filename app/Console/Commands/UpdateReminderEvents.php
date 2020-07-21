<?php

namespace App\Console\Commands;

use App\Reminder;
use App\Services\ReminderEventMaker;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Builder;

class UpdateReminderEvents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminders:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Keep reminder events at 10 years ahead';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $processed = 0;
        $end = now()->addYears(10);
        $reminders = Reminder::where('reminders.updated_at', '<', now()->subMonth())
            ->whereDoesntHave('events', function ($query) use ($end) {
                /** @var \Illuminate\Database\Eloquent\Builder $query */
                $query->whereDate('reminder_events.date', '>', $end->format('Y-m-d'));
            })
            ->where('days', '>', 0)
            ->cursor();

        $maker = new ReminderEventMaker();

        /** @var Reminder $reminder */
        foreach ($reminders as $reminder) {
            /** @var \App\ReminderEvent $last_event */
            $last_event = $reminder->events()->orderBy('date', 'desc')->first();

            if ($last_event) {
                $date = $last_event->date->addDays($reminder->days);
                for ($i = $date; $i < $end; $i->addDays($reminder->days)) {
                    $maker->make($reminder, $i);
                    $processed++;
                }
            }
        }

        $this->info("Processed $processed events");
    }
}
