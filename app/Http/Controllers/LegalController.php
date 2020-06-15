<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LegalController extends Controller
{
    /**
     * Show the privacy policy.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function privacyPolicy()
    {
        return view('legal.privacy');
    }
}
