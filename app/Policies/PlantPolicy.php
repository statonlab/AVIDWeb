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
        return $user->isAdmin() || $user->isScientist();
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
        return $user->owns($plant) || $user->isAdmin() || $user->isScientist();
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
        return $user->owns($plant) || $user->isAdmin();
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
        return $user->owns($plant) || $user->isAdmin();
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
        return $user->owns($plant) || $user->isAdmin();
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
        return $user->owns($plant) || $user->isAdmin();
    }
}
