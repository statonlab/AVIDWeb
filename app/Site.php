<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'state_id',
        'county_id',
        'name',
        'city',
        'address',
        'owner_name',
        'owner_address',
        'basal_area',
        'diameter',
    ];

    public function county()
    {
        return $this->belongsTo(County::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }
}
