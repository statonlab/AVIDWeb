<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plant extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $fillable = [
        'plot_id',
        'user_id',
        'plant_type_id',
        'species_id',
        'tag',
        'quadrant',
        'collected_at',
        'stems',
        'flowers',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'collected_at' => 'datetime',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plot()
    {
        return $this->belongsTo(Plot::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function species()
    {
        return $this->belongsTo(Species::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function type()
    {
        return $this->belongsTo(PlantType::class, 'plant_type_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function measurements()
    {
        return $this->hasMany(Measurement::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function site()
    {
        return $this->plot->site();
    }
}
