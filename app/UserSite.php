<?php

namespace App;

use App\Events\SiteShared;
use App\Events\SiteStoppedSharing;
use Illuminate\Database\Eloquent\Model;

class UserSite extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'site_id',
        'editable',
        'sends_reminders',
        'is_shared',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'editable' => 'boolean',
        'sends_reminders' => 'boolean',
        'is_shared' => 'boolean',
    ];

    /**
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => SiteShared::class,
        'deleting' => SiteStoppedSharing::class,
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
}
