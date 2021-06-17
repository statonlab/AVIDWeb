<?php

namespace App\Http\Controllers\Api;

use App\Events\PlotCreated;
use App\Http\Controllers\Controller;
use App\Plot;
use App\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PlotsController extends Controller
{
    public function upload(Site $site, $plot, $user)
    {
        $exists = Plot::where([
            'site_id' => $site->id,
            'number' => $plot['number'],
        ])->exists();

        if ($exists) {
            return $this->error('Already exists', [
                'number' => ['This plot number already exists'],
            ]);
        }

        $created = DB::transaction(function () use ($site, $plot, $user) {
            return Plot::create([
                'user_id' => $user->id,
                'site_id' => $site->id,
                'number' => $plot['number'],
                'latitude' => $plot['latitude'],
                'longitude' => $plot['longitude'],
                'basal_area' => $plot['basal_area'],
                'is_protected' => $plot['is_protected'] == '1' ? 1 : 0,
                'protection_seasons' => $plot['protection_seasons'],
                'canopy' => $plot['canopy'],
                'subcanopy' => $plot['subcanopy'],
                'ground_cover' => $plot['ground_cover'],
                'recorders' => $plot['recorders'],
            ]);
        });

        $created->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        event(new PlotCreated($created));

        return $created;
    }
}
