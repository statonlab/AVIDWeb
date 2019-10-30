<?php

namespace App\Http\Controllers;

use App\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request)
    {
        $this->validate($request, [
            'search' => 'nullable|max:255',
        ]);

        $states = State::orderBy('name', 'asc');

        if (! empty($request->search)) {
            $term = $request->search;
            $states->where(function ($query) use ($term) {
                $query->where('name', 'like', "$term%");
                $query->orWhere('code', 'like', "$term%");
            });
        }

        return $this->success($states->paginate(100));
    }
}
