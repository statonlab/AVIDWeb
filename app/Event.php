<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'image_id',
        'title',
        'description',
        'url',
        'event_start',
        'notification_date',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'event_start' => 'datetime',
        'notification_date' => 'datetime',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo(Image::class);
    }
}
