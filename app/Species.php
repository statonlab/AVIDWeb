<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Species extends Model
{
    protected $fillable = [
        'genus',
        'species',
        'name',
    ];
}
