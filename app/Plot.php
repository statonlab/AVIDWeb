<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plot extends Model
{
    /**
     * @var array
     */
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function plants()
    {
        return $this->hasMany(Plant::class);
    }
}
