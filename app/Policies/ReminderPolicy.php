<?php

namespace App\Policies;

use App\Reminder;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReminderPolicy
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
        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\Reminder $reminder
     * @return mixed
     */
    public function view(User $user, Reminder $reminder)
    {
        return $user->owns($reminder);
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
     * @param \App\Reminder $reminder
     * @return mixed
     */
    public function update(User $user, Reminder $reminder)
    {
        return $user->owns($reminder);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Reminder $reminder
     * @return mixed
     */
    public function delete(User $user, Reminder $reminder)
    {
        return $user->owns($reminder);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\Reminder $reminder
     * @return mixed
     */
    public function restore(User $user, Reminder $reminder)
    {
        return $user->owns($reminder);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\Reminder $reminder
     * @return mixed
     */
    public function forceDelete(User $user, Reminder $reminder)
    {
        return $user->owns($reminder);
    }
}
