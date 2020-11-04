<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MergeBackup extends Model
{
    protected $fillable = [
        'resource_id',
        'resource_type',
        'data'
    ];

    protected $casts = [
        'data' => 'array'
    ];
}
