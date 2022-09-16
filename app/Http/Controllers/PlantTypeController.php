<?php

namespace App\Http\Controllers;

use App\PlantType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlantTypeController extends Controller
{
    public function index(): JsonResponse
    {
        return $this->success(PlantType::latest('id')->get());
    }
}
