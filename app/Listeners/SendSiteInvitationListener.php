<?php

namespace App\Listeners;

use App\Mail\SiteInvitationMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendSiteInvitationListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param \App\Events\SiteInvitationCreated $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::send(new SiteInvitationMail($event->invitation));
    }
}
