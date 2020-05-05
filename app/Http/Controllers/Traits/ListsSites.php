<?php

namespace App\Http\Controllers\Traits;

trait ListsSites
{
    /**
     * Get a list of ordered.
     *
     * @param \Illuminate\Database\Query\Builder|\Illuminate\Database\Eloquent\Relations\Relation $sites
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getSites($sites)
    {
        $request = request();

        $this->validate($request, [
            'order_by' => 'nullable|in:name,plots_count,plants_count,last_measured_at',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
        ]);

        $sites = $sites->with([
            'state' => function ($query) {
            },
            'county' => function ($query) {
            },
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
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
            ->orderBy($request->order_by ?? 'created_at', $request->order_dir ?? 'desc');

        return $sites;
    }
}
