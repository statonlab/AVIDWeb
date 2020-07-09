<?php

namespace App;

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
