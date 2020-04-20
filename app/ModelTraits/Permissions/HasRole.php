<?php

namespace App\ModelTraits\Permissions;

use App\Role;

trait HasRole
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissions()
    {
        return $this->role()->first()->permissions();
    }

    /**
     * @param string $ability
     * @return bool
     */
    public function hasPermissionTo(string $ability)
    {
        return $this->role()->first()->can($ability);
    }
}
