<?php

namespace App\Http\Controllers;

use App\PlantType;
use Illuminate\Http\Request;

class PlantTypeController extends Controller
{
    public function index()
    {
        return $this->success(PlantType::get());
    }
}
