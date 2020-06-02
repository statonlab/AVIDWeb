<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserGuidesController extends Controller
{
    /**
     * Show the About page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function gettingStarted()
    {
        return view('user_guides.getting_started');
    }

    /**
     * Show the Benefits of Using AVID page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function springWildflowers()
    {
        return view('user_guides.spring_wildflowers');
    }

    /**
     * Show the Who We Are page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function woodySeedlings()
    {
        return view('user_guides.woody_seedlings');
    }

    /**
     * Show the Who We Are page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function exclosures()
    {
        return view('user_guides.exclosures');
    }
}