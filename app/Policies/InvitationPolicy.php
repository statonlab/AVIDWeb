<?php

namespace App\Policies;

use App\Group;
use App\Invitation;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InvitationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\User $user
     * @param Group $group
     * @return mixed
     */
    public function viewAny(User $user, Group $group)
    {
        return $user->owns($group) || $group->isLeader($user) || $user->hasPermissionTo('view groups');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function view(User $user, Invitation $invitation)
    {
        return $user->owns($invitation) || $invitation->group->isLeader($user) || $user->isAdmin();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user, Group $group)
    {
        if ($user->owns($group)) {
            return true;
        }

        if ($group->isLeader($user)) {
            return true;
        }

        return $user->hasPermissionTo('update groups');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function update(User $user, Invitation $invitation)
    {
        if ($user->owns($invitation)) {
            return true;
        }

        if ($invitation->group->isLeader($user)) {
            return true;
        }

        return $user->hasPermissionTo('update groups');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function delete(User $user, Invitation $invitation)
    {
        return $user->owns($invitation) || $invitation->group->isLeader($user) || $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function restore(User $user, Invitation $invitation)
    {
        return $user->owns($invitation) || $invitation->group->isLeader($user) || $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function forceDelete(User $user, Invitation $invitation)
    {
        return $user->owns($invitation) || $invitation->group->isLeader($user) || $user->isAdmin();
    }
}
