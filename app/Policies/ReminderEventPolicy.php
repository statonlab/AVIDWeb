<?php

namespace App\Policies;

use App\ReminderEvent;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReminderEventPolicy
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
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\User $user
     * @param \App\ReminderEvent $reminderEvent
     * @return mixed
     */
    public function view(User $user, ReminderEvent $reminderEvent)
    {
        if ($user->id === $reminderEvent->reminder->user_id) {
            return true;
        }

        if ($user->isAdmin()) {
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
     * @param \App\ReminderEvent $reminderEvent
     * @return mixed
     */
    public function update(User $user, ReminderEvent $reminderEvent)
    {
        if ($user->id === $reminderEvent->reminder->user_id) {
            return true;
        }

        if ($user->isAdmin()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\ReminderEvent $reminderEvent
     * @return mixed
     */
    public function delete(User $user, ReminderEvent $reminderEvent)
    {
        if ($user->id === $reminderEvent->reminder->user_id) {
            return true;
        }

        if ($user->isAdmin()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\User $user
     * @param \App\ReminderEvent $reminderEvent
     * @return mixed
     */
    public function restore(User $user, ReminderEvent $reminderEvent)
    {
        return $this->delete($user, $reminderEvent);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\User $user
     * @param \App\ReminderEvent $reminderEvent
     * @return mixed
     */
    public function forceDelete(User $user, ReminderEvent $reminderEvent)
    {
        return $this->delete($user, $reminderEvent);
    }
}
