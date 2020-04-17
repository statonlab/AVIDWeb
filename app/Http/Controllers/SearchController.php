<?php

namespace App\Http\Controllers;

use App\Plant;
use App\Site;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request) {
        $plants = Plant::where('tag', $request->search)->with([
            'plot' => function($query) {
                $query->with(['site']);
            }
        ])->paginate(10);

        return $this->success($plants);
    }
}
