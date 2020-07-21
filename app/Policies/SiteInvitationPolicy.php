<?php

namespace App\Policies;

use App\User;
use App\Site;
use App\SiteInvitation;
use Illuminate\Auth\Access\HandlesAuthorization;

class SiteInvitationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\User $user
     * @param Site $group
     * @return mixed
     */
    public function viewAny(User $user, Site $site)
    {
        return $user->owns($site);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function view(User $user, SiteInvitation $invitation)
    {
        return $user->owns($invitation->site);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user, Site $site)
    {
        return $user->owns($site);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function update(User $user, SiteInvitation $invitation)
    {
        return $user->owns($invitation->site);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function delete(User $user, SiteInvitation $invitation)
    {
        return $user->owns($invitation->site);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function restore(User $user, SiteInvitation $invitation)
    {
        return $user->owns($invitation->site);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Invitation $invitation
     * @return mixed
     */
    public function forceDelete(User $user, SiteInvitation $invitation)
    {
        return $user->owns($invitation->site);
    }
}
