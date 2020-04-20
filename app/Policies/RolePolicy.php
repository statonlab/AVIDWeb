<?php

namespace App\Policies;

use App\User;
use App\Role;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Listing roles.
     *
     * @param \App\User $user
     * @param \App\Role $role
     * @return bool|void
     */
    public function viewAny(User $user)
    {
        return $user->isAdmin();
    }

    /**
     * @param \App\User $user
     * @param \App\Role $role
     * @return bool
     */
    public function update(User $user, Role $role)
    {
        return $user->isAdmin();
    }
}
