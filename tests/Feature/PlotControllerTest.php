<?php

namespace Tests\Feature;

use App\Site;
use App\Plot;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PlotControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testListingPlots()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $response = $this->get("/web/sites/$plot->site_id/plots");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'id',
                    'user_id',
                    'site_id',
                    'number',
                ]
            ]
        ]);
    }

    public function testMemberCannotListPlotsFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $this->get("/web/sites/$plot->site_id/plots")->assertForbidden();
    }

    public function testRetrievingPlot()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $response = $this->get("/web/plots/$plot->id");

        $response->assertSuccessful()->assertJsonStructure([
            'id',
            'user_id',
            'site_id',
            'number',
        ]);
    }

    public function testUserCannotRetrievePlotFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $this->get("/web/plots/$plot->id")->assertForbidden();
    }

    public function testCreatingPlot()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create();

        $this->post("/web/sites/$site->id/plots", [
            'site_id' => $site->id,
            'number' => 1,
        ])->assertSuccessful();
    }

    public function testUserCannotCreatePlotForSiteFromAnotherUser()
    {
        $owner = $this->makeMember();
        $user = $this->makeMember();

        $this->actingAs($user);

        /** @var Site $site */
        $site = factory(Site::class)->create([
            'user_id' => $owner->id,
        ]);

        $this->post("/web/sites/$site->id/plots", [
            'site_id' => $site->id,
            'number' => 1,
        ])->assertForbidden();
    }

    public function testUpdatingPlot()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create([
            'number' => 1,
        ]);

        $response = $this->put("/web/plots/$plot->id", [
            'site_id' => $plot->site_id,
            'number' => 2,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'number' => 2,
        ]);
    }

    public function testUserCannotUpdatePlotFromAnotherUser()
    {
        $owner = $this->makeMember();
        $user = $this->makeMember();

        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create([
            'user_id' => $owner->id,
            'number' => 1,
        ]);

        $this->put("/web/plots/$plot->id", [
            'site_id' => $plot->site_id,
            'number' => 2,
        ])->assertForbidden();
    }

    public function testDeletingPlot()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $response = $this->delete("/web/plots/$plot->id");

        $response->assertSuccessful();
    }
}
