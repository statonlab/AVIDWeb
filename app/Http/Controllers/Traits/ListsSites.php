<?php

namespace App\Http\Controllers\Traits;

use App\Site;

trait ListsSites
{
    /**
     * Get a list of ordered.
     *
     * @param \Illuminate\Database\Query\Builder|\Illuminate\Database\Eloquent\Relations\Relation $sites
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getSites($sites = null)
    {
        $request = request();

        $this->validate($request, [
            'order_by' => 'nullable|in:name,plots_count,plants_count,last_measured_at',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
            'site_type' => 'nullable|in:shared,owned'
        ]);

        if ($sites === null) {
            $sites = Site::orderBy($request->order_by ?? 'created_at', $request->order_dir ?? 'desc');
        } else {
            $sites = $sites->orderBy($request->order_by ?? 'created_at', $request->order_dir ?? 'desc');
        }

        $sites = $sites->with([
            'state' => function ($query) {
            },
            'county' => function ($query) {
            },
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
            'species' => function ($query) {
            },
            'shrubs' => function ($query) {
            },
        ])
            ->withCount(['plants', 'plots'])
            ->when($request->search, function ($query) use ($request) {
                $term = $request->search;
                $query->where(function ($query) use ($term) {
                    /** @var \Illuminate\Database\Eloquent\Builder $query */
                    $query->where('name', 'like', "%$term%");
                    $query->orWhereHas('state', function ($query) use ($term) {
                        $query->where('states.name', 'like', "%$term%");
                        $query->orWhere('states.code', $term);
                    });
                    $query->orWhereHas('county', function ($query) use ($term) {
                        $query->where('counties.name', 'like', "%$term%");
                    });
                    $query->orWhereHas('user', function ($query) use ($term) {
                        $query->where('users.name', 'like', "%$term%");
                    });
                });
            })
            ->where(function ($query) use ($request) {
                if ($request->site_type !== null) {
                    switch ($request->site_type)
                    {
                        case 'shared':
                            $query->withShared($request->user());
                            break;
                        case 'owned':
                            $query->where('user_id', $request->user()->id);
                            break;
                        default:
                            $query->withShared($request->user())->orWhere('user_id', $request->user()->id);
                    }
                }
            });

        return $sites;
    }
}
