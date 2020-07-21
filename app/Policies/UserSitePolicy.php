<?php

namespace App\Policies;

use App\User;
use App\UserSite;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserSitePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\UserSite $user_site
     * @return mixed
     */
    public function delete(User $user, UserSite $user_site)
    {
        return $user->owns($user_site->site);
    }
}
