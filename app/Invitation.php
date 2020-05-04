<?php

namespace App;

use App\Events\InvitationAccepted;
use App\Events\InvitationCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Invitation extends Model
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
        'created' => InvitationCreated::class,
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'group_id',
        'name',
        'email',
        // pending, accepted, rejected
        'status',
        'token',
        'expires_at'
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
    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    /**
     * Generate an invitation with a unique token.
     *
     * @param \App\User $user
     * @param \App\Group $group
     * @param string $email
     * @return mixed
     */
    public static function generate(User $user, Group $group, string $name, string $email)
    {
        do {
            $token = Str::random(200);
        } while (static::where('token', $token)->exists());

        return static::create([
            'user_id' => $user->id,
            'group_id' => $group->id,
            'email' => $email,
            'name' => $name,
            'token' => $token,
            'status' => self::PENDING,
            'expires_at' => now()->addWeek(),
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

        /** @var \App\Group $group */
        $group = $this->group()->first();
        $group->users()->attach($user, [
            'is_leader' => 0,
            'can_view' => 1,
        ]);

        event(new InvitationAccepted($this, $user));
    }
}

