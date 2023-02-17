<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    /**
     * Show the Data Sheets page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function dataSheets()
    {
        return view('resources.data_sheets');
    }

    public function smartphoneApp()
    {
        return view('resources.smartphone_app');
    }

    /**
     * Show the Identification page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function identification()
    {
        return view('resources.identification');
    }

    /**
     * Show the References page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function references()
    {
        return view('resources.references');
    }

    /**
     * Show the Manual page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function manual()
    {
        return view('resources.manual');
    }
}
