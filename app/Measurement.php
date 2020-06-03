<?php

namespace App;

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
    ];

    protected $casts = [
        'is_located' => 'boolean',
        'is_alive' => 'boolean',
        'date' => 'date:Y-m-d',
    ];

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
}
