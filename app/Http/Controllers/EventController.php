<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Image;
use App\Event;
use Illuminate\Http\Request;
use Storage;

class EventController extends Controller
{
    /**
     * Display a listing of events.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Event::class);

        $this->validate($request, [
            'search' => 'nullable|max:255',
        ]);

        $events = Event::orderBy('event_start', 'asc');

        if ($request->search) {
            $term = $request->search;

            $events->where(function ($query) use ($term) {
                $query->where('events.title', 'like', "%$term%");
            });
        }

        $events = $events->paginate(15);

        $events->getCollection()->transform(function (Event $event) {
            if ($event->image !== null) {
                $event->image->url = $event->image->makeUrl();
            }

            if ($event->notification_date !== null) {
                $event->notify_at = Carbon::parse($event->notification_date)->format('Y-m-d H:i:s');
            }

            $event->starts_at = $event->event_start->format('Y-m-d H:i:s');

            return $event;
        });

        return $this->success($events);
    }

    /**
     * Store a newly created event in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $this->authorize('create', Event::class);

        $this->validate($request, [
            'title' => 'required|max:255',
            'description' => 'required',
            'event_start' => 'required|date_format:Y-m-d H:i',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:5120',
            'notification_date' => 'nullable|date',
        ]);

        $image = null;

        if ($request->image) {
            $image = Image::create([
                'path' => $request->file('image')->store('images'),
                'size' => $request->file('image')->getSize(),
            ]);
        }

        $event = Event::create([
            'title' => $request->title,
            'image_id' => $image ? $image->id : null,
            'description' => $request->description,
            'event_start' => $request->event_start,
            'url' => $request->url,
            'notification_date' => $request->notification_date,
        ]);

        return $this->created($event);
    }

    /**
     * Update the specified event in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Resource $event
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $this->validate($request, [
            'title' => 'required|max:255',
            'description' => 'required',
            'event_start' => 'required|date_format:Y-m-d H:i',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:5120',
            'notification_date' => 'nullable|date_format:Y-m-d'
        ]);

        $image = null;

        if ($request->image) {
            // Delete old image
            if ($event->image) {
                if (Storage::exists($event->image->path)) {
                    Storage::delete($event->image->path);
                }
                $event->image->delete();
            }

            $image = Image::create([
                'path' => $request->file('image')->store('images'),
                'size' => $request->file('image')->getSize(),
            ]);
        } elseif ($event->image) {
            $image = $event->image;
        }

        $event->fill([
            'title' => $request->title,
            'image_id' => $image ? $image->id : null,
            'description' => $request->description,
            'url' => $request->url,
            'event_start' => $request->event_start,
            'notification_date' => $request->notification_date,
        ])->save();

        $event->load(['image']);
        if ($event->image) {
            $event->image->url = $event->image->makeUrl();
        }

        if ($event->notification_date !== null) {
            $event->notify_at = Carbon::parse($event->notification_date)->format('Y-m-d H:i:s');
        }

        $event->starts_at = $event->event_start->format('Y-m-d H:i:s');

        return $this->created($event);
    }

    /**
     * @param \App\Event $event
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Event $event)
    {
        $this->authorize('view', $event);

        $event->load(['image']);
        if ($event->image) {
            $event->image->url = $event->image->makeUrl();
        }

        return $this->success($event);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Event $event
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Event $event)
    {
        $this->authorize('delete', $event);

        if ($event->image) {
            $event->image->delete();
        }

        $event->delete();

        return $this->deleted('Event deleted');
    }
}
