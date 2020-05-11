<?php

namespace Tests\Feature;

use App\Invitation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InvitationControllerTest extends TestCase
{
    public function testUserCanAcceptInvitation()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        $invitation = factory(Invitation::class)->create([
            'email' => $user->email,
            'name' => $user->name,
        ]);

        $response = $this->get("/invitations/$invitation->id/accept?auth=$invitation->token");

        $response->assertStatus(302);
    }

    public function testCreatingInvitation()
    {
        $owner = $this->makeMember();
        $user = $this->makeMember();
        $this->actingAs($owner);

        $group = factory(\App\Group::class)->create([
            'user_id' => $owner->id,
        ]);

        $this->post("/web/groups/$group->id/invitations", [
            'name' => $user->name,
            'email' => $user->email,
        ])->assertSuccessful();
    }
}
