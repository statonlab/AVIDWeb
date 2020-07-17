<?php

namespace App\Events;

use App\Measurement;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MeasurementCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /** @var \App\Measurement */
    public $measurement;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Measurement $measurement)
    {
        $this->measurement = $measurement;
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
