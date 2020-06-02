<?php

namespace App\Http\Controllers;

use App\ReminderEvent;
use Illuminate\Http\Request;

class ReminderEventController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request)
    {
        $this->validate($request, [
            'date_start' => 'required|date_format:Y-m-d',
            'date_end' => 'required|date_format:Y-m-d',
        ]);

        /** @var \App\User $user */
        $user = $request->user();

        $reminders = $user->reminders()->with([
            'events' => function ($query) use ($request) {
                $query->whereDate('date', '>=', $request->date_start);
                $query->whereDate('date', '<=', $request->date_end);
                $query->with(['site']);
            },
        ])->get();

        $events = [];
        foreach ($reminders as $reminder) {
            foreach ($reminder->events as $event) {
                $events[] = $event;
            }
        }

        return $this->success($events);
    }

    /**
     * @param \App\ReminderEvent $event
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(ReminderEvent $event)
    {
        $this->authorize('view', $event);

        $event->load(['site', 'reminder']);
        $event->site->load([
            'state' => function($query) {},
            'county'=> function($query) {},
            'plots'=> function($query) {
                $query->orderBy('number', 'asc');
            },
        ]);

        return $this->success($event);
    }
}
