<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
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
        return $user->hasPermissionTo('view users');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\User $model
     * @return mixed
     */
    public function view(User $user, User $model)
    {
        return $user->is($model) || $user->hasPermissionTo('view users');
    }

    /**
     * Determine whether the user can view the sites of another user.
     *
     * @param \App\User $user
     * @param \App\User $model
     * @return mixed
     */
    public function viewSites(User $user, User $model)
    {
        return $user->is($model) || $user->hasPermissionTo('view sites') || $user->hasPermissionTo('view users');
    }

    /**
     * Determine whether the user can set the role of another user.
     *
     * @param \App\User $user
     * @param \App\User $model
     * @return mixed
     */
    public function setRole(User $user, User $model)
    {
        return $user->hasPermissionTo('manage permissions');
    }
}
