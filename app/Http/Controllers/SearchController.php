<?php

namespace App\Http\Controllers;

use App\Plant;
use App\Site;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $this->validate($request, [
            'mine' => 'nullable|boolean',
        ]);

        /** @var \App\User $user */
        $user = $request->user();

        $plants = Plant::where('tag', $request->search)->with([
            'plot' => function ($query) {
                $query->with(['site']);
            },
        ]);

        if ($user->can('viewAny', Site::class)) {
            $plants->when($request->mine == '1', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            });
        } else {
            $plants->where('user_id', $user->id);
        }

        $plants = $plants->paginate(10);

        return $this->success($plants);
    }
}
