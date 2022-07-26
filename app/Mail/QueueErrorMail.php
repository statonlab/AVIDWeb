<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class QueueErrorMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var \App\User
     */
    private User $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $reply_to = User::where('users.id', '!=', $this->user->id)
            ->whereHas('role', function ($query) {
                $query->where('roles.name', 'Admin');
            })
            ->get();

        return $this->subject("AVID | Possible Error in Queue!")
            ->to($this->user->email, $this->user->name)
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->replyTo($reply_to)
            ->html('<div>Make sure the queue is running correctly, the jobs table has more than 10 jobs waiting.</div>');
    }
}
