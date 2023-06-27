<?php

namespace App\Http\Controllers;

use App\Plant;
use App\Plot;
use App\Site;
use Illuminate\Http\Request;

class DataEntryController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function sites(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        return $this->success(Site::where(function ($query) use ($request) {
            $query->withShared($request->user());
            $query->orWhere('user_id', $request->user()->id);
        })
            ->orderBy('name', 'asc')
            ->with('plots', function ($query) {
                $query->orderBy('number', 'asc');
            })
            ->get());
    }

    /**
     * @param Site $site
     * @param Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function plots(Site $site, Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->authorize('view', $site);

        $this->validate($request, [
            'limit' => 'nullable|integer',
            'plot' => 'nullable|exists:plots,id',
            'search' => 'nullable|max:255',
            'sort_order' => 'nullable|in:tag_asc,tag_desc,quadrant_asc,quadrant_desc'
        ]);

        $plots = $site->plots()->when($request->plot, function ($query) use ($request) {
            $query->where('plots.id', $request->plot);
        })->when($request->search, function ($query) use ($request) {
            $query->whereHas('plants', function ($query) use ($request) {
                $query->where('plants.tag', $request->search);
            });
        })->with([
            'plants' => function ($query) use ($request) {
                if ($request->search) {
                    $query->where('plants.tag', $request->search);
                }
                switch ($request->sort_order) {
                    case 'tag_asc':
                        $query->orderBy('plants.tag', 'asc');
                        break;
                    case 'tag_desc':
                        $query->orderBy('plants.tag', 'desc');
                        break;
                    case 'quadrant_asc':
                        $query->orderBy('plants.quadrant', 'asc');
                        break;
                    case 'quadrant_desc':
                        $query->orderBy('plants.quadrant', 'desc');
                        break;
                }
                $query->with([
                    'type' => function ($query) {

                    },
                    'species' => function ($query) {

                    },
                    'measurements' => function ($query) {
                        $query->orderBy('date', 'asc');
                    },
                ]);
            },
        ])->orderBy('plots.number', 'asc')->get();

        if (!empty($request->limit)) {
            $plots->transform(function (Plot $plot) use ($request) {
                $plot->plants->transform(function (Plant $plant) use ($request) {
                    $plant->setRelation('measurements',
                        $plant->measurements->sortByDesc('date')
                            ->take($request->limit)
                            ->reverse()
                            ->values());

                    return $plant;
                });

                return $plot;
            });
        }

        return $this->success($plots);
    }
}
