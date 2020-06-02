<?php

namespace App\Notifications;

use App\Reminder;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class ReminderNotification extends Notification
{
    use Queueable;

    /**
     * @var \App\Reminder
     */
    protected Reminder $reminder;

    /**
     * @var string|null
     */
    protected ?string $attachment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Reminder $reminder, ?string $attachment = null)
    {
        $this->reminder = $reminder;
        $this->attachment = $attachment;
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
        if ($this->reminder->site->last_measured_at) {
            $line = ' The last measurement taken at this site was on '.$this->reminder->site->last_measured_at->format('M jS, Y');
        }

        $message = (new MailMessage)->greeting("Hello $notifiable->name,")
            ->subject(Str::title("Reminder to visit {$this->reminder->site->name}"))
            ->line('This is a reminder that '.$this->reminder->site->name.' should be visited.'.$line);

        if ($this->attachment) {
            $message->line('Attached is an importable excel sheet to facilitate measurement acquisition.')
                ->attach($this->attachment, [
                    'as' => $this->reminder->site->name.'.xlsx',
                ]);
        }

        $message->action('Visit Site', url("/app/sites/{$this->reminder->site->id}"))
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
        return [//
        ];
    }
}
