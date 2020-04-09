<?php

namespace App\Policies;

use App\User;
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
    public function lists(User $user)
    {
        return $user->isAdmin();
    }
}
