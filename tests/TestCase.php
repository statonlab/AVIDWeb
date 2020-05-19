<?php

namespace Tests;

use App\User;
use App\Role;
use App\State;
use App\County;
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
}
