<?php

namespace App;

use App\Events\MeasurementCreated;
use App\Scopes\QuarantinedScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Measurement extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'plant_id',
        'plot_id',
        'site_id',
        'is_located',
        'is_alive',
        'date',
        'height',
        'is_quarantined',
    ];

    protected $casts = [
        'is_quarantined' => 'boolean',
        'is_located' => 'boolean',
        'is_alive' => 'boolean',
        'date' => 'date:Y-m-d',
    ];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => MeasurementCreated::class,
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
    public function plant()
    {
        return $this->belongsTo(Plant::class);
    }

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
     * @param $query
     * @return mixed
     */
    public function scopeWithQuarantined($query)
    {
        return $query->withoutGlobalScope(QuarantinedScope::class);
    }
}
