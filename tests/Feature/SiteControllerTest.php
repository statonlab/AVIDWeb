<?php

namespace Tests\Feature;

use App\Site;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    //public function testListingSites()
    //{
    //    $user = $this->makeAdmin();
    //    $other_user = $this->makeMember();
    //
    //    $this->actingAs($user);
    //
    //    /** @var Site $site */
    //    $site = factory(Site::class)->create(['user_id' => $other_user->id]);
    //
    //    $response = $this->get('/web/sites');
    //    $response->assertSuccessful()->assertJsonStructure([
    //        'data' => [
    //            [
    //                'id',
    //                'user_id',
    //                'state_id',
    //                'county_id',
    //                'name',
    //                'owner_name',
    //                'owner_contact',
    //                'city',
    //                'basal_area',
    //                'diameter',
    //                'created_at',
    //                'updated_at',
    //                'deleted_at',
    //                'last_measured_at',
    //                'plants_count',
    //                'plots_count',
    //            ]
    //        ],
    //    ]);
    //}

    public function testListingSitesForMembers()
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
                    'user_idf',
                    'state_id',
                    'county_id',
                    'name',
                    'owner_name',
                    'owner_contact',
                    'city',
                    'basal_area',
                    'diameter',
                    'created_at',
                    'updated_at',
                    'deleted_at',
                    'last_measured_at',
                    'plants_count',
                    'plots_count',
                ]
            ],
        ]);
    }

    //
    //public function testCreatingSite()
    //{
    //
    //}
    //
    //public function testRetrievingSite()
    //{
    //
    //}
    //
    //public function testUpdatingSite()
    //{
    //
    //}
    //
    //public function testDeletingSite()
    //{
    //
    //}
}
