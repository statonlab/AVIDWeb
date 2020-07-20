<?php

namespace App;

use App\Events\SiteInvitationAccepted;
use App\Events\SiteInvitationCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class SiteInvitation extends Model
{
    use SoftDeletes;

    /** @var string status variant */
    const ACCEPTED = 'accepted';

    /** @var string status variant */
    const PENDING = 'pending';

    /** @var string status variant */
    const REJECTED = 'rejected';

    /**
     * @var string[]
     */
    protected $dispatchesEvents = [
        'created' => SiteInvitationCreated::class,
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'site_id',
        'recipient_id',
        // pending, accepted, rejected
        'status',
        'expires_at',
        'is_editable',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'expires_at' => 'datetime'
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function recipient()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Generate an invitation.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @param string $email
     * @return mixed
     */
    public static function generate(User $user, Site $site, User $recipient, $is_editable)
    {
        return static::create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'recipient_id' => $recipient->id,
            'status' => self::PENDING,
            'expires_at' => now()->addWeek(),
            'is_editable' => $is_editable,
        ]);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeAccepted($query)
    {
        return $query->where('status', self::ACCEPTED);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopePending($query)
    {
        return $query->where('status', self::PENDING);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeRejected($query)
    {
        return $query->where('status', self::REJECTED);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeExpired($query)
    {
        return $query->where('expires_at', '<', now());
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('expires_at', '>=', now());
    }

    /**
     * @param \App\User $user
     */
    public function accept(User $user)
    {
        $this->fill([
            'status' => self::ACCEPTED,
        ])->save();

        UserSite::create([
            'user_id' => $user->id,
            'site_id' => $this->site_id,
            'editable' => $this->is_editable,
        ]);
    }

    /**
     * @param \App\User $user
     */
    public function reject(User $user)
    {
        $this->fill([
            'status' => self::REJECTED,
        ])->save();
    }
}
