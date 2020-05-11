<?php

namespace Tests\Unit;

use App\Site;
use App\Group;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GroupSitesTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testGroupUsersCanSeeSharedSites()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $this->actingAs($member);

        $response = $this->get("/web/groups/$group->id/sites");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'id',
                    'user_id',
                    'state_id',
                    'county_id',
                    'name',
                    'last_measured_at',
                    'plants_count',
                    'plots_count',
                ]
            ],
        ]);

        $ungrouped_user = $this->makeMember();

        $this->actingAs($ungrouped_user);
        $response = $this->get("/web/groups/$group->id/sites");

        $response->assertForbidden();
    }
}
