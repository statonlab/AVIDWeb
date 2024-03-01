<?php

namespace App\Http\Controllers;

use App\Jobs\GenerateReminderEvents;
use App\Reminder;
use App\Site;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        return $this->success($user->reminders()->with(['site'])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->authorize('create', Reminder::class);

        $this->validate($request, [
            'days' => 'required|integer|min:1',
            'site_id' => 'required|exists:sites,id',
        ]);

        $this->authorize('view', Site::find($request->site_id));

        $reminder = Reminder::create([
            'days' => $request->days,
            'user_id' => $request->user()->id,
            'site_id' => $request->site_id,
        ]);

        $this->dispatch_sync(new GenerateReminderEvents($reminder));

        $reminder->load(['site']);

        return $this->created($reminder);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function show(Reminder $reminder)
    {
        $this->authorize('view', $reminder);

        $reminder->load(['site']);

        return $this->success($reminder);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reminder $reminder)
    {
        $this->authorize('update', $reminder);

        $this->validate($request, [
            'days' => 'required|integer|min:1',
            'site_id' => 'required|exists:sites,id',
        ]);

        $this->authorize(Site::findOrFail($request->site_id));

        $reminder->fill([
            'days' => $request->days,
            'site_id' => $request->site_id,
        ])->save();

        $reminder->load(['site']);

        $this->dispatch_sync(new GenerateReminderEvents($reminder));

        return $this->created($reminder);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reminder $reminder)
    {
        $this->authorize('delete', $reminder);

        $reminder->delete();

        return $this->deleted();
    }
}
