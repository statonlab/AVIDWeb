<?php

namespace App\Listeners;

use App\Mail\InvitationAcceptedMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class InvitationAcceptedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param \App\Events\InvitationAccepted $event
     * @return void
     */
    public function handle($event)
    {
        // Attach sites to group
        $sites = $event->user->sites()->select(['sites.id'])->get()->pluck('id');
        $event->invitation->group->sites()->syncWithoutDetaching($sites);

        \Mail::send(new InvitationAcceptedMail($event->invitation));
    }
}
