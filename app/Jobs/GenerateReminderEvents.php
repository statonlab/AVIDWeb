<?php

namespace App\Jobs;

use App\Reminder;
use App\Services\ReminderEventMaker;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateReminderEvents implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var \App\Reminder
     */
    protected $reminder;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Reminder $reminder)
    {
        $this->reminder = $reminder;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $maker = new ReminderEventMaker();
        $date = $this->reminder->site ? $this->reminder->site->last_measured_at : null;
        for ($i = $date ?? now(); $i < now()->addYears(10); $i->addDays($this->reminder->days)) {
            $maker->make($this->reminder, $i);
        }
    }
}
