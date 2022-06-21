<?php

namespace App\Notifications;

use App\DeleteAccountRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AccountDeleteRequestNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(protected DeleteAccountRequest $request)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)->line($this->request->user->name.' with user_id = '.$this->request->user->id.' has requested to delete their account.')
            ->when($this->request->reason, function ($message) {
                $message->line('Reason: "'.$this->request->reason.'"');
            })
            ->line('Thank you for using our application!');
    }
}
