<?php

namespace App;

use App\ModelTraits\Permissions\HasRole;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, HasRole, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sites()
    {
        return $this->hasMany(Site::class);
    }

    /**
     * @return bool
     */
    public function isAdmin()
    {
        return $this->role->name === 'Admin';
    }

    /**
     * @return bool
     */
    public function isScientist()
    {
        return $this->role->name === 'Scientist';
    }

    /**
     * Whether the user owns a certain resource
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     * @return bool
     */
    public function owns($model)
    {
        return $this->id === ($model->user_id ?? null);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function plants()
    {
        return $this->hasManyThrough(Plant::class, Plot::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function measurements()
    {
        return $this->hasMany(Measurement::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userSites()
    {
        return $this->hasMany(UserSite::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class)->withPivot([
            'is_leader',
            'can_view',
            'can_edit',
        ]);
    }

    /**
     * @param \App\User $user
     * @return bool
     */
    public function isFriendsWith(User $user)
    {
        return $user->groups()->whereHas('users', function ($query) use ($user) {
            $query->where('users.id', $user->id);
        })->exists();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reminders()
    {
        return $this->hasMany(Reminder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function siteInvitations()
    {
        return $this->hasMany(SiteInvitation::class, 'recipient_id', 'id');
    }

    /**
     * @return bool
     */
    public function isSuperUser(): bool
    {
        return SuperUser::where('user_id', $this->id)->exists();
    }
}
