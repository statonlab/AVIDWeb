<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class);
    }

    /**
     * @param string $ability
     * @return bool
     */
    public function can(string $ability): bool
    {
        return $this->permissions()->where('permissions.name', $ability)->exists();
    }
}
