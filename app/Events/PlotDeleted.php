<?php

namespace App\Events;

use App\Plot;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PlotDeleted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var \App\Plot
     */
    public $plot;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Plot $plot)
    {
        $this->plot = $plot;
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
