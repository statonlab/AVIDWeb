<?php

namespace App\Events;

use App\UserSite;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SiteStoppedSharing
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var \App\UserSite
     */
    public $user_site;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(UserSite $user_site)
    {
        $this->user_site = $user_site;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
