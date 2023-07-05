<?php

namespace App\Http\Controllers\Traits;

use App\County;
use App\Site;
use App\State;

trait ReportQueries
{
    public function querySiteByWMU($order_by = 'aggregate_wmu', $order_dir = 'asc'): \Illuminate\Database\Query\Builder
    {
        return \DB::query()->select(\DB::raw('count(*) as total, aggregate_wmu'))
            ->fromSub(\App\Plot::query()
                ->select(['site_id', 'aggregate_wmu'])
                ->groupBy('site_id')
                ->groupBy('aggregate_wmu'), 'view')
            ->groupBy('aggregate_wmu')
            ->orderBy($order_by, $order_dir);
    }

    public function querySiteByState($order_by = 'name', $order_dir = 'asc')
    {
        return State::select(['states.id', 'states.name'])
            ->has('sites')
            ->withCount(['sites'])
            ->orderBy($order_by, $order_dir);
    }

    public function querySiteByCounty($order_by = 'name', $order_dir = 'asc', $search = null, $parameters = [])
    {
        $counties = County::with('state')->select(['counties.id', 'counties.name', 'counties.state_id']);
        // beginning of a state filter...
//            ->when(!empty($parameters['state']), function ($query) use ($parameters, $order_by, $order_dir) {
//                $query->where('state_id', $parameters['state_id']);
//                if ($order_by === 'state') {
//                    $query->orderBy('counties.state.name', $order_dir);
//                }
//            });
        if ($search) {
            $counties->where('name', 'like', "%$search%");
        }
        $counties->has('sites')
            ->withCount(['sites'])
//            ->when($order_by !== 'state', function ($query) use ($order_by, $order_dir) {
//                $query->orderBy($order_by, $order_dir);
//            });
            ->orderBy($order_by, $order_dir);
        return $counties;
    }

    public function querySiteByTown($order_by = 'city', $order_dir = 'asc', $search = null): \Illuminate\Database\Eloquent\Builder
    {
        $towns = Site::query()->selectRaw('state_id, city, COUNT(*) as count')->with('state');
        if ($search) {
            $towns->where('city', 'like', "%$search%");
        }
        $towns->groupBy(['city', 'state_id'])
            ->orderBy($order_by, $order_dir);

        return $towns;
    }
}
