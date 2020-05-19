<?php

namespace Tests\Feature;

use App\Site;
use App\State;
use App\County;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testAdminCanListSitesFromAnotherUser()
    {
        $user = $this->makeAdmin();

        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $response = $this->get("/web/user/$site->user_id/sites");
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
    }

    public function testMemberCannotListSitesFromOtherUsers()
    {
        $user = $this->makeMember();

        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $response = $this->get("/web/user/$site->user_id/sites");
        $response->assertForbidden();
    }

    public function testMemberCanListOwnSites()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create(['user_id' => $user->id]);

        $response = $this->get('/web/sites');
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
    }

    public function testRetrievingSite()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $response = $this->get("/web/sites/$site->id");

        $response->assertSuccessful()->assertJsonStructure([
            'id',
            'user_id',
            'state_id',
            'county_id',
            'name',
            'last_measured_at',
            'plants_count',
            'plots_count',
        ]);
    }

    public function testMemberCannotRetrieveSiteFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $response = $this->get("/web/sites/$site->id");
        $response->assertForbidden();
    }

    public function testCreatingSite()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        $this->post('/web/sites', [
            'name' => '__site controller test__',
            'state_id' => State::first()->id,
            'county_id' => County::first()->id,
        ])->assertSuccessful();
    }

    public function testUpdatingSite()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create([
            'name' => '__site controller test__'
        ]);

        $update = '__site controller testedit__';

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'name' => $update,
        ]);
    }

    public function testUserCannotUpdateSiteFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create([
            'name' => '__site controller test__',
        ]);

        $update = '__site controller testedit__';

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
        ]);

        $response->assertForbidden();
    }

    public function testDeletingSite()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $response = $this->delete("/web/sites/$site->id");

        $response->assertSuccessful();
    }
}
