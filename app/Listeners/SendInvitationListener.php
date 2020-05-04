<?php

namespace App\Listeners;

use App\Mail\InvitationMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendInvitationListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\InvitationCreated $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::send(new InvitationMail($event->invitation));
    }
}
