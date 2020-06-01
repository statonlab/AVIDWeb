<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    /**
     * Show the about page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function about()
    {
        return view('about.about');
    }

    /**
     * Show the Benefits of Using AVID page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function benefits()
    {
        return view('about.benefits');
    }

    /**
     * Show the Who We Are page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function who()
    {
        return view('about.who');
    }
}