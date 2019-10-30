<?php

namespace App\Http\Controllers;

use App\County;
use Illuminate\Http\Request;

class CountyController extends Controller
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
            'state_id' => 'required|exists:states,id'
        ]);

        $counties = County::where('state_id', $request->state_id)->orderBy('name', 'asc');

        if (! empty($request->search)) {
            $term = $request->search;
            $counties->where(function ($query) use ($term) {
                $query->where('name', 'like', "%$term%");
            });
        }

        return $this->success($counties->paginate(100));
    }
}
