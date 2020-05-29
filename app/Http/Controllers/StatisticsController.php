<?php

namespace App\Http\Controllers;

use App\Site;
use Illuminate\Http\Request;

class StatisticsController extends Controller
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

    public function chart(Request $request)
    {
        $this->validate($request, [
            'site' => 'required|exists:sites,id'
        ]);

        $years = [];
        $protected = [];
        $unprotected = [];

        $site = Site::with('plots.plants')->findOrFail($request->site);

        $measurements = Measurement::orderBy('date', 'asc')->get();

        $measurements->transform(function (Measurement $measurement) {
           $measurement->is_protected = $measurement->plot->is_protected;
           $measurement->site_id = $measurement->site->id;

           return $measurement;
        });

        $years = range($measurements->first()->date->year, now()->year)
    }
}
