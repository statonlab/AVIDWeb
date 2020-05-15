<?php

namespace App\Console\Commands;

use App\User;
use App\Event;
use App\Notifications\EventNotification;
use Illuminate\Console\Command;
use Carbon\Carbon;

class SendEventNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'events:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies users of events that have a notification date.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $users = User::cursor();
        $events = Event::where('notification_date', '<', Carbon::now())->where('notified', false)->cursor();

        foreach ($events as $event) {
            if (!$event->notified) {
                foreach ($users as $user) {
                    $user->notify(new EventNotification($event));
                    $event->fill(['notified' => true])->save();
                }
            }
        }
    }
}
