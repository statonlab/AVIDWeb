<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImpactsController extends Controller
{
    /**
     * Show the Deer Impacts page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function impacts()
    {
        return view('impacts.impacts');
    }

    /**
     * Show the Woodland Conditions page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function conditions()
    {
        return view('impacts.conditions');
    }

    /**
     * Show the Signs and Symptoms page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function symptoms()
    {
        return view('impacts.symptoms');
    }
}