<?php

namespace App;

use App\Exceptions\UserDoesntBelongToGroupException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'name',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot([
            'is_leader',
            'can_view',
        ]);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sites()
    {
        return $this->belongsToMany(Site::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    /**
     * @param \App\User $user
     * @return bool
     */
    public function isLeader(User $user)
    {
        return ! ! $this->users()->wherePivot('is_leader', true)->find($user->id);
    }

    /**
     * @param \App\User $user
     * @return $this
     * @throws \App\Exceptions\UserDoesntBelongToGroupException
     */
    public function remove(User $user) {
        if($this->users()->where('users.id', $user->id)->doesntExist()) {
            throw new UserDoesntBelongToGroupException();
        }

        $this->sites()->detach($user->sites->pluck('id'));
        $this->users()->detach($user->id);

        return $this;
    }
}
