<?php

namespace App\Mail;

use App\SiteInvitation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SiteInvitationMail extends Mailable
{
    use Queueable, SerializesModels;

    /** @var \App\SiteInvitation */
    public $invitation;

    /**
     * Create a new message instance.
     *
     * @param \App\SiteInvitation $invitation
     * @return void
     */
    public function __construct(SiteInvitation $invitation)
    {
        $this->invitation = $invitation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        /** @var \App\User $recipient */
        $recipient = $this->invitation->recipient;

        return $this->to($recipient->email, $recipient->name)
            ->subject($this->invitation->user->name.' Wants to Share '.$this->invitation->site->name)
            ->markdown('mail.site_invitation');
    }
}
