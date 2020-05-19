<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlantType extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function plants() {
        return $this->hasMany(Plant::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function species() {
        return $this->hasMany(Species::class);
    }
}
