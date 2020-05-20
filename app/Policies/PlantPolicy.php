<?php

namespace App\Policies;

use App\Plant;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PlantPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('view sites');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Plant $plant
     * @return mixed
     */
    public function view(User $user, Plant $plant)
    {
        if ($user->owns($plant->plot) || $user->can('view', $plant->site)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\User $user
     * @param \App\Plant $plant
     * @return mixed
     */
    public function update(User $user, Plant $plant)
    {
        return $user->owns($plant->plot) || $user->can('update', $plant->site);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Plant $plant
     * @return mixed
     */
    public function delete(User $user, Plant $plant)
    {
        return $user->owns($plant->plot) || $user->can('delete', $plant->site);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Plant $plant
     * @return mixed
     */
    public function restore(User $user, Plant $plant)
    {
        return $user->owns($plant->plot) || $user->can('delete', $plant->site);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Plant $plant
     * @return mixed
     */
    public function forceDelete(User $user, Plant $plant)
    {
        return $user->owns($plant->plot) || $user->can('delete', $plant->site);
    }
}
