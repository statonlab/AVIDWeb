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
        return $user->hasPermissionTo('view sites');
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
        if ($user->owns($site)) {
            return true;
        }

        if ($site->groups()->whereIn('group_id', $user->groups()
            ->wherePivot('can_view', 1)->get()
            ->pluck('pivot.group_id'))->exists()) {

            return true;
        }

        if ($site->groups()->whereIn('id', $user->groups()
            ->wherePivot('is_leader', 1)->get()
            ->pluck('id'))->exists()) {

            return true;
        }

        return $user->hasPermissionTo('view sites');
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
        if ($site->groups()->whereIn('groups.id', $user->groups()
            ->wherePivot('can_edit', 1)->get()
            ->pluck('id'))->exists()) {

            return true;
        }

        if ($site->groups()->whereIn('groups.id', $user->groups()
            ->wherePivot('is_leader', 1)->get()
            ->pluck('id'))->exists()) {

            return true;
        }

        return $user->owns($site) || $user->hasPermissionTo('update sites');
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
        return $user->owns($site) || $user->hasPermissionTo('delete sites');
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
        return $user->owns($site) || $user->hasPermissionTo('delete sites');
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
        return $user->owns($site) || $user->hasPermissionTo('delete sites');
    }
}
