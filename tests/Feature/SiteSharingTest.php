<?php

namespace Tests\Feature;

use App\Site;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteSharingTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testUserCanShareASite()
    {
        $member = $this->makeMember();
        $invitee = $this->makeMember();

        $this->actingAs($member);

        $site = factory(Site::class)->create([
          'user_id' => $member->id,
        ]);

        $this->post("/web/sites/$site->id/invitations", [
          'user_id' => $invitee->id,
          'can_edit' => false,
        ])->assertSuccessful();
    }

    public function testAdminCanShareASiteTheyDoNotOwn()
    {
        $admin = $this->makeAdmin();
        $member = $this->makeMember();
        $invitee = $this->makeMember();

        $this->actingAs($admin);

        $site = factory(Site::class)->create([
            'user_id' => $member->id,
        ]);

        $this->post("/web/sites/$site->id/invitations", [
            'user_id' => $invitee->id,
            'can_edit' => false,
        ])->assertSuccessful();
    }

    public function testUserCanViewASharedSite()
    {
        $user = $this->makeMember();

        $site = factory(Site::class)->create();

        $this->actingAs($user);

        $this->get("/web/sites/$site->id")->assertForbidden();

        $user_site = factory(\App\UserSite::class)->create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'is_shared' => true,
        ]);

        $this->get("/web/sites/$site->id")->assertSuccessful();
    }

    public function testUserCanEditASharedSite()
    {
        $user = $this->makeMember();

        $site = $this->makeSite([
            'name' => '__site controller test__'
        ]);

        $this->actingAs($user);

        $user_site = factory(\App\UserSite::class)->create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'is_shared' => true,
            'editable' => false,
        ]);

        $update = '__site controller testedit__';

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
            'city' => 'town',
            'species' => $site->species()->pluck('species.id')->toArray(),
            'shrubs' => $site->shrubs()->pluck('species.id')->toArray(),
        ]);

        $response->assertForbidden();

        $user_site->fill(['editable' => true])->save();

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
            'city' => 'town',
            'species' => $site->species()->pluck('species.id')->toArray(),
            'shrubs' => $site->shrubs()->pluck('species.id')->toArray(),
        ]);

        $response->assertSuccessful();
    }
}