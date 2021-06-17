<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Species;
use Illuminate\Http\Request;

class SpeciesController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function download(Request $request)
    {
        $species = Species::all(); //$species = Species::with(['type'])->get();

        return $this->success($species);
    }
}
