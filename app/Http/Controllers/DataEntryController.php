<?php

namespace App\Http\Controllers;

use App\Site;
use Illuminate\Http\Request;

class DataEntryController extends Controller
{
    public function sites(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        return $this->success($user->sites);
    }

    public function plots(Site $site, Request $request)
    {
        $this->authorize('view', $site);

        $plots = $site->plots()->with([
            'plants' => function ($query) {
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

        return $this->success($plots);
    }
}
