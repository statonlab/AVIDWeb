<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plot extends Model
{
    protected $fillable = [
        'user_id',
        'site_id',
        'number',
        'latitude',
        'longitude',
        'basal_area',
        'is_protected',
        'protection_seasons',
        'canopy',
        'subcanopy',
        'ground_cover',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function site()
    {
        return $this->belongsTo(Site::class);
    }
}
