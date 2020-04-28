<?php

namespace App\Mail;

use App\Invitation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InvitationAcceptedMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $invitation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Invitation $invitation)
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
        return $this
            ->to($this->invitation->user->email, $this->invitation->user->name)
            ->subject("{$this->invitation->name} has Accepted Your Invitation")
            ->markdown('mail.invitation_accepted');
    }
}
