<?php

namespace App;

use App\Scopes\QuarantinedScope;
use App\Events\PlotDeleted;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plot extends Model
{
    use SoftDeletes;

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
        'recorders',
        'last_measured_at',
        'wmu',
        'is_quarantined',
    ];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'deleted' => PlotDeleted::class,
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'last_measured_at' => 'date:Y-m-d',
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

    /**
     * Sets the measured at field for both the current plot and the parent site based on the provided measurement.
     * @param \App\Measurement $measurement
     */
    public function setLastMeasuredAt(Measurement $measurement) {
        if ($this->last_measured_at === null || $this->last_measured_at < $measurement->date) {
            $this->fill(['last_measured_at' => $measurement->date])->save();

            /** @var \App\Site $site */
            $site = $this->site()->first();

            if ($site->last_measured_at === null || $site->last_measured_at < $this->last_measured_at) {
                $site->fill(['last_measured_at' => $this->last_measured_at])->save();
            }
        }
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
