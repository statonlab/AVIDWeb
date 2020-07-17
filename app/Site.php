<?php

namespace App;

use App\Events\SiteDeleted;
use App\Events\SiteUpdatedEvent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Site extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'state_id',
        'county_id',
        'name',
        'city',
        'owner_address',
        'owner_name',
        'owner_contact',
        'basal_area',
        'diameter',
        'last_measured_at',
    ];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'updated' => SiteUpdatedEvent::class,
        'deleted' => SiteDeleted::class,
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'last_measured_at' => 'date:Y-m-d',
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
    public function county()
    {
        return $this->belongsTo(County::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function plots()
    {
        return $this->hasMany(Plot::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function plants()
    {
        return $this->hasManyThrough(Plant::class, Plot::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function species()
    {
        return $this->belongsToMany(Species::class, 'site_species', 'site_id',
            'species_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function shrubs()
    {
        return $this->belongsToMany(Species::class, 'site_shrubs', 'site_id',
            'species_id');
    }
}
