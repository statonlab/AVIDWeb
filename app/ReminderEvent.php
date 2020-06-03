<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReminderEvent extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'reminder_id',
        'site_id',
        'date',
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function reminder()
    {
        return $this->belongsTo(Reminder::class);
    }
}
