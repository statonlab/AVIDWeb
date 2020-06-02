<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'days',
        'sent_at',
        'site_id',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'sent_at' => 'datetime',
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
    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function events()
    {
        return $this->hasMany(ReminderEvent::class);
    }
}
