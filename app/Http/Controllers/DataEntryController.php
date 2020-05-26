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
    public function sites(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        return $this->success($user->sites()
            ->orderBy('name', 'asc')
            ->with('plots')
            ->get());
    }

    /**
     * @param \App\Site $site
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function plots(Site $site, Request $request)
    {
        $this->authorize('view', $site);

        $this->validate($request, [
            'limit' => 'nullable|integer',
            'plot' => 'nullable|exists:plots,id',
            'search' => 'nullable|max:255',
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
                $query->orderBy('plants.tag', 'asc');
                $query->with([
                    'type' => function ($query) {

                    },
                    'measurements' => function ($query) {
                        $query->orderBy('date', 'asc');
                    },
                ]);
            },
        ])->orderBy('plots.number', 'asc')->get();

        if (! empty($request->limit)) {
            $plots->transform(function (Plot $plot) use ($request) {
                $plot->plants->transform(function (Plant $plant) use ($request) {
                    $plant->setRelation('measurements',
                        $plant->measurements->take($request->limit));

                    return $plant;
                });

                return $plot;
            });
        }

        return $this->success($plots);
    }
}
