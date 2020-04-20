<?php

namespace App;

use App\ModelTraits\Permissions\HasRole;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, HasRole;

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
    public function sites() {
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
}
