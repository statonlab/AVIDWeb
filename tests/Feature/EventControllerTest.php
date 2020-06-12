<?php

namespace Tests\Feature;

use App\Event;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EventControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testListingEvents()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Event $plant */
        $event = factory(Event::class)->create();

        $response = $this->get("/web/events");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'image_id',
                    'event_start',
                    'title',
                    'description',
                    'notification_date',
                    'starts_at',
                ]
            ],
        ]);
    }

    public function testNonAdminCantListEvents()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        $event = factory(Event::class)->create();

        $this->get('/web/events')->assertForbidden();
    }

    public function testCreatingEvent()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        $this->post("/web/events", [
            'title' => 'title',
            'description' => 'description',
            'event_start' => now()->format('Y-m-d H:i'),
            'timezone' => 'EST',
            'event_type' => 'Webinar',
        ])->assertSuccessful();
    }

    public function testUpdatingEvent()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Event $event */
        $event = factory(Event::class)->create([
            'title' => 'unedited',
        ]);

        $this->post("/web/events/$event->id/update", [
            'title' => 'edited',
            'description' => $event->description,
            'event_start' => $event->event_start->format('Y-m-d H:i'),
            'timezone' => $event->timezone,
            'event_type' => $event->event_type,
        ])->assertSuccessful();
    }

    public function testDeletingEvent()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        $event = factory(Event::class)->create();

        $this->delete("/web/events/$event->id")->assertSuccessful();
    }
}
