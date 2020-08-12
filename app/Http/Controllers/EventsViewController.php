<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventsViewController extends Controller
{
    /**
     * Show the Events page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function events()
    {
        $events = Event::orderBy('event_start', 'desc')->get();

        $events->transform(function (Event $event) {
            if ($event->image !== null) {
                $event->image->url = $event->image->makeUrl();
            }

            return $event;
        });

        return view('events.events', ['events' => $events]);
    }

    /**
     * Show the page for an event.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function event(Event $event)
    {
        if ($event->image !== null) {
            $event->image->url = $event->image->makeUrl();
        }

        $event->starts_at = $event->event_start->isoFormat('MMM Do YYYY [at] H:mm');

        if ($event->event_end) {
            $event->starts_at = $event->event_start->isoFormat('MMM Do YYYY [at] H:mm');
        }

        return view('events.event', ['event' => $event]);
    }
}
