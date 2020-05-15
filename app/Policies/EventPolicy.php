<?php

namespace App\Policies;

use App\Event;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
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
        return $user->hasPermissionTo('manage events');
    }

    /**
     * Determine whether the user can view a model.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function view(User $user, Event $event)
    {
        return $user->hasPermissionTo('manage events');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('manage events');
    }

    /**
     * Determine whether the user can update models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function update(User $user)
    {
        return $user->hasPermissionTo('manage events');
    }

    /**
     * Determine whether the user can delete models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function delete(User $user)
    {
        return $user->hasPermissionTo('manage events');
    }
}
