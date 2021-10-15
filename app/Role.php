<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'is_default',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'is_default' => 'boolean',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    /**
     * @param string $ability
     * @return bool
     */
    public function can(string $ability) {
        if($this->name === 'Admin') {
            return true;
        }

        return $this->permissions()->where('permissions.name', $ability)->exists();
    }
}
