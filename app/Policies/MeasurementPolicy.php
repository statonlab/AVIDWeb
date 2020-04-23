<?php

namespace App\Policies;

use App\Measurement;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MeasurementPolicy
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
     * @param \App\Measurement $measurement
     * @return mixed
     */
    public function view(User $user, Measurement $measurement)
    {
        return $user->owns($measurement) || $user->hasPermissionTo('view sites');
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
     * @param \App\Measurement $measurement
     * @return mixed
     */
    public function update(User $user, Measurement $measurement)
    {
        return $user->id === $measurement->user_id || $user->hasPermissionTo('update sites');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Measurement $measurement
     * @return mixed
     */
    public function delete(User $user, Measurement $measurement)
    {
        return $user->id === $measurement->user_id || $user->hasPermissionTo('delete sites');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Measurement $measurement
     * @return mixed
     */
    public function restore(User $user, Measurement $measurement)
    {
        return $user->id === $measurement->user_id || $user->hasPermissionTo('delete sites');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Measurement $measurement
     * @return mixed
     */
    public function forceDelete(User $user, Measurement $measurement)
    {
        return $user->id === $measurement->user_id || $user->hasPermissionTo('delete sites');
    }
}
