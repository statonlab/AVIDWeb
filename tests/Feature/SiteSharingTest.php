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

    $this->actingAs($member);

    $site = factory(Site::class)->create([
        'user_id' => $member->id,
    ]);

    $response = $this->post("/web/sites/$site->id/invitations");

    $response->assertSuccessful();
  }

  public function testAdminCanShareASite()
  {

  }
}