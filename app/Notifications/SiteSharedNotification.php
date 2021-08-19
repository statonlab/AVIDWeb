<?php

namespace App\Notifications;

use App\Site;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class SiteSharedNotification extends Notification
{
    use Queueable;

    /**
     * @var \App\Reminder
     */
    protected Site $site;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $line = '';
        if ($this->site->last_measured_at) {
            $line = ' The last measurement taken at this site was on ' . $this->site->last_measured_at->format('M jS, Y');
        }

        $message = (new MailMessage)->greeting("Hello $notifiable->name,")
            ->subject(Str::title("You've been invited to edit {$this->site->name}"))
            ->line('This is a notification that you\'ve been added to the site ' . $this->site->name . '. If you have the AVID app on your iPhone or Android device, make sure to log into the app and tap \'Download data\' from the Settings tab to download the shared site data.' . $line);


        $message->action('Visit Site', url("/app/sites/{$this->site->id}"))
            ->line('Thank you for using our application!');

        return $message;
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
