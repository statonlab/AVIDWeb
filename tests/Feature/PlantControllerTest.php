<?php

namespace Tests\Feature;

use App\Plant;
use App\Plot;
use App\PlantType;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PlantControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    public function testListingPlants()
    {
        $user = $this->makeAdmin();

        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create();

        $response = $this->get("/web/plots/$plant->plot_id/plants");
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

    public function testUserCannotListPlantsFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create();

        $this->get("/web/plots/$plant->plot_id/plants")->assertForbidden();
    }

    public function testRetrievingPlant()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create();

        $response = $this->get("/web/plants/$plant->id");

        $response->assertSuccessful()->assertJsonStructure([
            'id',
            'tag',
            'species_id',
        ]);
    }

    public function testUserCannotRetrievePlantFromAnotherUser()
    {
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create();

        $this->get("/web/plants/$plant->id")->assertForbidden();
    }

    public function testCreatingPlant()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create();

        $this->post("/web/plots/$plot->id/plants", [
            'species_id' => factory(\App\Species::class)->create()->id,
            'plant_type_id' => factory(\App\PlantType::class)->create()->id,
            'tag' => 1,
            'quadrant' => 'Northeast',
        ])->assertSuccessful();
    }

    public function testUserCannotCreatePlantForPlotFromAnotherUser()
    {
        $owner = $this->makeMember();
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plot $plot */
        $plot = factory(Plot::class)->create([
            'user_id' => $owner->id,
        ]);

        $this->post("/web/plots/$plot->id/plants", [
            'species_id' => factory(\App\Species::class)->create()->id,
            'plant_type_id' => factory(\App\PlantType::class)->create()->id,
            'tag' => 1,
            'quadrant' => 'Northeast',
        ])->assertForbidden();
    }

    public function testUpdatingPlant()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create([
            'tag' => 1,
        ]);

        $response = $this->put("/web/plants/$plant->id", [
            'species_id' => $plant->species_id,
            'plant_type_id' => $plant->plant_type_id,
            'tag' => 2,
            'quadrant' => 'Northeast',
        ]);

        $response->assertSuccessful()->assertJsonFragment([
            'tag' => 2,
        ]);
    }

    public function testUserCannotUpdatePlantFromAnotherUser()
    {
        $owner = $this->makeMember();
        $user = $this->makeMember();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create([
            'user_id' => $owner->id,
            'tag' => 1,
        ]);

        $this->put("/web/plants/$plant->id", [
            'species_id' => $plant->species_id,
            'plant_type_id' => $plant->plant_type_id,
            'tag' => 2,
            'quadrant' => 'Northeast',
        ])->assertForbidden();
    }

    public function testDeletingPlant()
    {
        $user = $this->makeAdmin();
        $this->actingAs($user);

        /** @var Plant $plant */
        $plant = factory(Plant::class)->create();

        $response = $this->delete("/web/plants/$plant->id");

        $response->assertSuccessful();
    }
}