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

    public function querySiteByCounty($order_by = 'name', $order_dir = 'asc', $search = null)
    {
        $counties = County::with('state')->select(['counties.id', 'counties.name', 'counties.state_id']);
        if ($search) {
            $counties->where('name', 'like', "%$search%");
        }
        $counties->has('sites')
            ->withCount(['sites'])
            ->orderBy($order_by, $order_dir);
        return $counties;
    }

    public function querySiteByTown($order_by = 'city', $order_dir = 'asc', $search = null): \Illuminate\Database\Eloquent\Builder
    {
        $towns = Site::query()->selectRaw('city, COUNT(*) as count');
        if ($search) {
            $towns->where('city', 'like', "%$search%");
        }
        $towns->groupBy('city')
            ->orderBy($order_by, $order_dir);
        return $towns;
    }
}
