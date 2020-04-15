<?php

namespace App\Policies;

use App\Role;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Listing roles.
     *
     * @param \App\User $user
     * @return bool|void
     */
    public function viewAny(Role $role)
    {
        return $user->isAdmin();
    }
}
