<?php

namespace App\Http\Controllers;

use App\County;
use App\Plot;
use App\Site;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ReportController extends Controller
{
    protected static array $aggregate_wmus = [
        'Adirondacks', 'Catskills', 'Central Appalachian Plateau', 'Central Finger Lakes', 'Central NY',
        'Closed', 'Del-Otsego', 'Del-Sullivan', 'E Appalachian Plateau', 'E Lake Plains', 'Mid Lake Plains',
        'Mohawk Valley', 'NE Appalachian Hills', 'NE Hudson', 'NW Appalachian Hills', 'NW Hudson', 'SE Hudson',
        'St. Lawrence Valley', 'Suffolk - Westchester', 'SW Hudson', 'W Appalachian Hills', 'W Appalachian Plateau',
        'W Finger Lakes', 'W Lake Plains',
    ];

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByWmu(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'aggregate_wmu',
                    'total',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);

        $sites = \DB::query()->select(\DB::raw('count(*) as total, aggregate_wmu'))
            ->fromSub(
                \App\Plot::query()
                    ->select(['site_id', 'aggregate_wmu'])
                    ->groupBy('site_id')
                    ->groupBy('aggregate_wmu')
                , 'view')
            ->groupBy('aggregate_wmu')
            ->orderBy($request->order_by ?? 'aggregate_wmu', $request->order_dir === 'asc' ? 'asc' : 'desc')
            ->get();

        return $this->success([
            'data' => $sites
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByState(Request $request)
    {
        $this->validate($request, [
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'name',
                    'sites_count',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);

        $states = State::select([
            'states.id', 'states.name'
        ])
            ->has('sites')
            ->withCount(['sites'])
            ->orderBy($request->order_by ?? 'aggregate_wmu', $request->order_dir === 'asc' ? 'asc' : 'desc')
            ->get();

        return $this->success([
            'data' => $states
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByCounty(Request $request)
    {
        $this->validate($request, [
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'name',
                    'sites_count',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);

        $counties = County::select([
            'counties.id', 'counties.name'
        ])
            ->has('sites')
            ->withCount(['sites'])
            ->orderBy($request->order_by ?? 'aggregate_wmu', $request->order_dir === 'asc' ? 'asc' : 'desc')
            ->get();

        return $this->success([
            'data' => $counties,
        ]);
    }
}
