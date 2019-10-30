<?php

namespace App\Policies;

use App\Site;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SitePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any sites.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isAdmin() || $user->isScientist();
    }

    /**
     * Determine whether the user can view the site.
     *
     * @param \App\User $user
     * @param \App\Site $site
     * @return mixed
     */
    public function view(User $user, Site $site)
    {
        return $user->owns($site) || $user->isAdmin() || $user->isScientist();
    }

    /**
     * Determine whether the user can create sites.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the site.
     *
     * @param \App\User $user
     * @param \App\Site $site
     * @return mixed
     */
    public function update(User $user, Site $site)
    {
        return $user->owns($site) || $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the site.
     *
     * @param \App\User $user
     * @param \App\Site $site
     * @return mixed
     */
    public function delete(User $user, Site $site)
    {
        return $user->owns($site) || $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the site.
     *
     * @param \App\User $user
     * @param \App\Site $site
     * @return mixed
     */
    public function restore(User $user, Site $site)
    {
        return $user->owns($site) || $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the site.
     *
     * @param \App\User $user
     * @param \App\Site $site
     * @return mixed
     */
    public function forceDelete(User $user, Site $site)
    {
        return $user->owns($site) || $user->isAdmin();
    }
}
