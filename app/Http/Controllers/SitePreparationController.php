<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SitePreparationController extends Controller
{
    /**
     * Show the Site Selection page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function selection()
    {
        return view('site_preparation.selection');
    }

    /**
     * Show the Key page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function key()
    {
        return view('site_preparation.key');
    }

    /**
     * Show the Equipment page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function equipment()
    {
        return view('site_preparation.equipment');
    }

    /**
     * Show the Plots page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function plots()
    {
        return view('site_preparation.plots');
    }

    /**
     * Show the Quadrants page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function quadrants()
    {
        return view('site_preparation.quadrants');
    }

    /**
     * Show the Data page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function data()
    {
        return view('site_preparation.data');
    }
}