<?php

namespace App\Policies;

use App\Group;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GroupPolicy
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
        return $user->hasPermissionTo('view groups');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function view(User $user, Group $group)
    {
        if ($user->owns($group)) {
            return true;
        }

        if ($group->users()->where('users.id', $user->id)->exists()) {
            return true;
        }

        return $user->hasPermissionTo('view groups');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function viewSites(User $user, Group $group)
    {
        if ($user->owns($group)) {
            return true;
        }

        $pivot = $user->groups()->find($group->id)->pivot;

        if ($pivot->isLeader || $pivot->can_view) {
            return true;
        }
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
     * @param \App\Group $group
     * @return mixed
     */
    public function update(User $user, Group $group)
    {
        return $user->owns($group) || $user->hasPermissionTo('update groups');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function delete(User $user, Group $group)
    {
        return $user->owns($group) || $user->hasPermissionTo('delete groups');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function restore(User $user, Group $group)
    {
        return $user->owns($group) || $user->hasPermissionTo('delete groups');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function forceDelete(User $user, Group $group)
    {
        return $user->owns($group) || $user->hasPermissionTo('delete groups');
    }

    /**
     * Determine whether the user can permanently remove the model.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @return mixed
     */
    public function deleteUser(User $user, Group $group)
    {
        return $user->owns($group) || $user->hasPermissionTo('delete groups');
    }
}
