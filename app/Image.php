<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'path',
        'size',
    ];

    /**
     * @return \Illuminate\Contracts\Routing\UrlGenerator|string
     */
    public function makeUrl()
    {
        $url = "/web/images/storage/{$this->id}";

        return app()->environment('production') ? url($url) : $url;
    }
}
