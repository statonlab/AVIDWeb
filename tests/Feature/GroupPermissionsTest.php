<?php

namespace Tests\Feature;

use App\Site;
use App\Plot;
use App\Group;
use App\Plant;
use App\Measurement;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GroupPermissionsTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testMemberCanViewSitesWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 0,
        ]);

        $response = $this->get("/web/groups/$group->id/sites");

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 1,
        ]);

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
    }

    public function testMemberCanEditSitesWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
            'name' => '__group permissions test__'
        ]);

        $group->sites()->attach($site->id);

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 0,
        ]);

        $update = '__group permissions testedit__';

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
        ]);

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 1,
        ]);

        $response = $this->put("/web/sites/$site->id", [
            'name' => $update,
            'state_id' => $site->state_id,
            'county_id' => $site->county_id,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'name' => $update,
        ]);
    }


    public function testMemberCanViewPlotsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 0,
        ]);

        $response = $this->get("/web/sites/$site->id/plots");

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 1,
        ]);

        $response = $this->get("/web/sites/$site->id/plots");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'id',
                    'user_id',
                    'site_id',
                    'number',
                ]
            ],
        ]);
    }

    public function testMemberCanEditPlotsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
            'number' => 1,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 0,
        ]);

        $response = $this->put("/web/plots/$plot->id", [
            'site_id' => $plot->site_id,
            'number' => 2,
        ]);

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 1,
        ]);

        $response = $this->put("/web/plots/$plot->id", [
            'site_id' => $plot->site_id,
            'number' => 2,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'number' => 2,
        ]);
    }

    public function testMemberCanViewPlantsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
        ]);

        $plant = factory(Plant::class)->create([
            'plot_id' => $plot->id,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 0,
        ]);

        $response = $this->get("/web/plots/$plot->id/plants");

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 1,
        ]);

        $response = $this->get("/web/plots/$plot->id/plants");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'id',
                    'tag',
                    'species_name',
                    'species_id',
                ]
            ],
        ]);
    }


    public function testMemberCanEditPlantsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
            'number' => 1,
        ]);

        $plant = factory(Plant::class)->create([
            'plot_id' => $plot->id,
            'tag' => 1,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 0,
        ]);

        $response = $this->put("/web/plants/$plant->id", [
            'tag' => 2,
            'species_id' => $plant->species_id,
            'plant_type_id' => $plant->plant_type_id,
            'quadrant' => $plant->quadrant,
        ]);

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 1,
        ]);

        $response = $this->put("/web/plants/$plant->id", [
            'tag' => 2,
            'species_id' => $plant->species_id,
            'plant_type_id' => $plant->plant_type_id,
            'quadrant' => $plant->quadrant,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'tag' => 2,
        ]);
    }

    public function testMemberCanViewMeasurementsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
        ]);

        $plant = factory(Plant::class)->create([
            'plot_id' => $plot->id,
        ]);

        $measurement = factory(Measurement::class)->create([
            'plant_id' => $plant->id,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 0,
        ]);

        $response = $this->get("/web/plants/$plant->id/measurements");

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_view' => 1,
        ]);

        $response = $this->get("/web/plants/$plant->id/measurements");

        $response->assertSuccessful()->assertJsonStructure([
            'data' => [
                [
                    'id',
                    'plant_id',
                    'user_id',
                    'height',
                ]
            ],
        ]);
    }

    public function testMemberCanEditMeasurementsWithPermission()
    {
        $leader = $this->makeAdmin();
        $member = $this->makeMember();

        $this->actingAs($member);

        $group = factory(Group::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->users()->attach($member->id);

        $site = factory(Site::class)->create([
            'user_id' => $leader->id,
        ]);

        $group->sites()->attach($site->id);

        $plot = factory(Plot::class)->create([
            'site_id' => $site->id,
            'number' => 1,
        ]);

        $plant = factory(Plant::class)->create([
            'plot_id' => $plot->id,
            'tag' => 1,
        ]);

        $measurement = factory(Measurement::class)->create([
            'plant_id' => $plant->id,
            'is_located' => 1,
        ]);

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 0,
        ]);

        $response = $this->put("/web/measurements/$measurement->id", [
            'date' => now()->format('Y-m-d'),
            'is_located' => 0,
        ]);

        $response->assertForbidden();

        $group->users()->updateExistingPivot($member->id, [
            'can_edit' => 1,
        ]);

        $response = $this->put("/web/measurements/$measurement->id", [
            'date' => now()->format('Y-m-d'),
            'is_located' => 0,
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'is_located' => false,
        ]);
    }
}
