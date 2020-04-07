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
        'is_located',
        'is_alive',
        'date',
        'height',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plant() {
        return $this->belongsTo(Plant::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
