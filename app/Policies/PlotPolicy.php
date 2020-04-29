<?php

namespace App\Policies;

use App\Plot;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PlotPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any plots.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('view sites');
    }

    /**
     * Determine whether the user can view the plot.
     *
     * @param \App\User $user
     * @param \App\Plot $plot
     * @return mixed
     */
    public function view(User $user, Plot $plot)
    {
        if ($user->owns($plot) || $user->can('view', $plot->site)) {
            return true;
        }

        if ($user->hasPermissionTo('view sites')) {
            return true;
        }

        if ($user->isFriendsWith($plot->user) || $user->isFriendsWith($plot->site->user)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create plots.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the plot.
     *
     * @param \App\User $user
     * @param \App\Plot $plot
     * @return mixed
     */
    public function update(User $user, Plot $plot)
    {
        if ($user->owns($plot) || $user->can('update', $plot->site)) {
            return true;
        }

        return $user->hasPermissionTo('update sites');
    }

    /**
     * Determine whether the user can delete the plot.
     *
     * @param \App\User $user
     * @param \App\Plot $plot
     * @return mixed
     */
    public function delete(User $user, Plot $plot)
    {
        if ($user->owns($plot) || $user->can('delete', $plot->site)) {
            return true;
        }

        return $user->hasPermissionTo('delete sites');
    }

    /**
     * Determine whether the user can restore the plot.
     *
     * @param \App\User $user
     * @param \App\Plot $plot
     * @return mixed
     */
    public function restore(User $user, Plot $plot)
    {
        if ($user->owns($plot) || $user->can('delete', $plot->site)) {
            return true;
        }

        return $user->hasPermissionTo('delete sites');
    }

    /**
     * Determine whether the user can permanently delete the plot.
     *
     * @param \App\User $user
     * @param \App\Plot $plot
     * @return mixed
     */
    public function forceDelete(User $user, Plot $plot)
    {
        if ($user->owns($plot) || $user->can('delete', $plot->site)) {
            return true;
        }

        return $user->hasPermissionTo('delete sites');
    }
}
