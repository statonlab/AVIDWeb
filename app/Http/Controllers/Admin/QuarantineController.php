<?php

namespace App\Http\Controllers\Admin;

use App\Site;
use App\Plot;
use App\Plant;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\ListsSites;
use Illuminate\Http\Request;

class QuarantineController extends Controller
{
    use ListsSites;

    public function index(Request $request)
    {
        $this->authorize('viewAny', Site::class);

        $this->validate($request, [
            'type' => 'required|in:plots,plants',
            'order_by' => 'required|in:number,site,owner',
            'order_dir' => 'required|in:asc,desc',
        ]);

        $data = $request->type === 'plots' ? Plot::withQuarantined() : Plant::withQuarantined();

        if ($request->order_by === 'owner') {

        } else {
            $data = $data->orderBy($request->order_by, $request->order_dir);
        }

        $data = $data->where('is_quarantined', true)->with(['user', 'site']);

        return $this->success($data->paginate(20));
    }
}
