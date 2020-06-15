<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Image;
use App\Event;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
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

            if ($event->ends_at !== null) {
                $event->ends_at = $event->event_end->format('Y-m-d H:i:s');
            }

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

        $this->validate($request, $this->validationRules());

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
            'event_end' => $request->event_end,
            'timezone' => $request->timezone,
            'notification_date' => $request->notification_date,
            'address' => $request->address,
            'event_type' => $request->event_type,
            'contact_info' => $request->contact_info,
            'excerpt' => $this->generateExcerpt($request->description),
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

        $this->validate($request, $this->validationRules());

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
            'event_start' => $request->event_start,
            'event_end' => $request->event_end,
            'timezone' => $request->timezone,
            'notification_date' => $request->notification_date,
            'address' => $request->address,
            'event_type' => $request->event_type,
            'contact_info' => $request->contact_info,
            'excerpt' => $this->generateExcerpt($request->description),
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

    /**
     * Validation rules for `create` and `update` methods.
     *
     * @return array
     */
    public function validationRules()
    {
        $timezones = [
            'EST',
            'CST',
            'MST',
            'PST',
        ];

        return [
            'title' => 'required|max:255',
            'description' => 'required',
            'contact_info' => 'nullable',
            'event_start' => 'required|date_format:Y-m-d H:i',
            'event_end' => 'nullable|date_format:Y-m-d H:i',
            'timezone' => ['required', Rule::in($timezones)],
            'image' => 'nullable|image|max:5120',
            'notification_date' => 'nullable|date',
            'address' => 'nullable|max:255',
            'event_type' => 'required|max:255',
        ];
    }

    /**
     * Generates an excerpt for the given description.
     *
     * @return array
     */
    private function generateExcerpt($description)
    {
        $excerpt = strip_tags($description);
        $excerpt = substr($excerpt, 0, 100);
        $excerpt = str_replace("\n", "", $excerpt);

        return $excerpt;
    }
}
