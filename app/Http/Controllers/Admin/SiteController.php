<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\ListsSites;
use App\Site;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    use ListsSites;

    public function index()
    {
        $this->authorize('viewAny', Site::class);

        $sites = Site::whereNotNull('user_id');
        return $this->success($this->getSites($sites)->paginate(20));
    }
}
