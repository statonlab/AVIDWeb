<?php

namespace Tests;

use App\User;
use App\Role;
use App\Site;
use App\Species;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * @param string $role
     * @param array $overrides
     * @return User
     * @throws \Exception
     */
    public function makeUser($role, $overrides = [])
    {
        $role = Role::where('name', $role)->first();

        if (! $role) {
            throw new \Exception('Undefined role');
        }

        /** @var User $user */
        $user = factory(User::class)->create(array_merge(
            ['role_id' => $role->id], $overrides));

        return $user;
    }

    /**
     * @param array $overrides
     * @return \App\User
     * @throws \Exception
     */
    public function makeAdmin($overrides = [])
    {
        return $this->makeUser('Admin', $overrides);
    }

    /**
     * @param array $overrides
     * @return \App\User
     * @throws \Exception
     */
    public function makeMember($overrides = [])
    {
        return $this->makeUser('Member', $overrides);
    }

    /**
     * @param array $overrides
     * @return \App\Site
     */
    public function makeSite($overrides = [])
    {
        $site = factory(Site::class)->create($overrides);
        $species = [];
        $shrubs = [];

        for ($i = 0; $i < rand(1, 3); $i++) {
            $species[] = factory(Species::class)->create()->id;
        }

        for ($i = 0; $i < rand(1, 3); $i++) {
            $shrubs[] = factory(Species::class)->create()->id;
        }

        $site->species()->attach($species);
        $site->shrubs()->attach($shrubs);

        return $site;
    }
}
