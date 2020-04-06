<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlantType extends Model
{
    protected $fillable = [
        'name',
    ];

    public function plants() {
        return $this->hasMany(Plant::class);
    }
}
