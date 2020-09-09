<?php

namespace App\Policies;

use App\Species;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SpeciesPolicy
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
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Species $species
     * @return mixed
     */
    public function view(?User $user, Species $species)
    {
        return true;
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
     * @param \App\Species $species
     * @return mixed
     */
    public function update(User $user, Species $species)
    {
        return $user->hasPermissionTo('manage species');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Species $species
     * @return mixed
     */
    public function delete(User $user, Species $species)
    {
        return $user->hasPermissionTo('manage species');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Species $species
     * @return mixed
     */
    public function restore(User $user, Species $species)
    {
        return $user->hasPermissionTo('manage species');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Species $species
     * @return mixed
     */
    public function forceDelete(User $user, Species $species)
    {
        return $user->hasPermissionTo('manage species');
    }

    /**
     * @param \App\User $user
     * @param \App\Species $species
     * @return bool
     */
    public function merge(User $user)
    {
        return $user->isAdmin();
    }
}
