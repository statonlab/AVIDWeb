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
        return $user->isAdmin() || $user->isScientist();
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
        return $user->owns($plot) || $user->owns($plot->site) || $user->isAdmin() || $user->isScientist();
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
        return $user->owns($plot) || $user->owns($plot->site) || $user->isAdmin();
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
        return $user->owns($plot) || $user->owns($plot->site) || $user->isAdmin();
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
        return $user->owns($plot) || $user->owns($plot->site) || $user->isAdmin();
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
        return $user->owns($plot) || $user->owns($plot->site) || $user->isAdmin();
    }
}
