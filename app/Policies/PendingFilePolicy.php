<?php

namespace App\Policies;

use App\PendingFile;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PendingFilePolicy
{
    use HandlesAuthorization;

    public function download(User $user, PendingFile $file): bool
    {
        return $user->id === $file->user_id;
    }
}
