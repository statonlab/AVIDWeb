<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PendingFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'path',
        'name',
        'disk',
        'url',
        'progress',
        'error',
        'filters',
    ];

    protected $hidden = [
        'disk',
        'path',
        'filters',
    ];

    public $casts = [
        'filters' => 'json',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
