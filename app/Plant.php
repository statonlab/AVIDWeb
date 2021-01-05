<?php

namespace App;

use App\Events\PlantDeleted;
use App\Scopes\QuarantinedScope;
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
        'old_tag',
        'is_quarantined',
    ];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'deleted' => PlantDeleted::class,
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'collected_at' => 'datetime',
        'is_quarantined' => 'boolean',
    ];

    /**
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new QuarantinedScope);
    }

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
    public function plot()
    {
        return $this->belongsTo(Plot::class)->withQuarantined();
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
        return $this->plot()->first()->site();
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeWithQuarantined($query)
    {
        return $query->withoutGlobalScope(QuarantinedScope::class);
    }
}
