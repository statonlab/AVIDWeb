<?php

namespace App\Http\Controllers;

use App\Plot;
use App\Site;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PlotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Site $site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(Site $site, Request $request)
    {
        $this->authorize('view', $site);

        $this->validate($request, [
            'order_by' => 'nullable|in:number,plants_count',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
            'limit' => 'nullable|integer|min:20|max:1000'
        ]);

        $plots = $site->plots()->with([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        $plots = $plots->withCount(['plants']);

        if (! empty($request->search)) {
            $term = $request->search;
            $plots->where(function ($query) use ($term) {
                $query->where('number', 'like', "%$term%");
            });
        }

        $plots = $plots->orderBy($request->order_by ?? 'number', $request->order_dir ?? 'asc')
            ->paginate($request->limit ?? 20);

        return $this->success($plots);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Site $site, Request $request)
    {
        // Is the user allowed to add plots to this site?
        $this->authorize('update', $site);

        $this->validate($request, $this->validationRules());

        /** @var \App\User $user */
        $user = $request->user();

        $exists = Plot::where([
            'site_id' => $site->id,
            'number' => $request->number,
        ])->exists();

        if ($exists) {
            return $this->error('Already exists', [
                'number' => ['This plot number already exists'],
            ]);
        }

        $plot = Plot::create([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'number' => $request->number,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'basal_area' => $request->basal_area,
            'is_protected' => $request->is_protected == '1' ? 1 : 0,
            'protection_seasons' => $request->protection_seasons,
            'canopy' => $request->canopy,
            'subcanopy' => $request->subcanopy,
            'ground_cover' => $request->ground_cover,
            'recorders' => $request->recorders,
        ]);

        $plot->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        $plot->loadCount(['plants']);

        return $this->created($plot);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Plot $plot
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Plot $plot)
    {
        $this->authorize('view', $plot);

        $plot->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
            'site' => function ($query) {
            },
        ]);
        $plot->loadCount(['plants']);

        return $this->success($plot);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Plot $plot
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Plot $plot)
    {
        $this->authorize('update', $plot);

        $this->validate($request, $this->validationRules(true));

        if ($plot->number != $request->number) {
            $exists = Plot::where([
                'site_id' => $plot->site_id,
                'number' => $request->number,
            ])->exists();

            if ($exists) {
                return $this->error('Already exists', [
                    'number' => ['This plot number already exists'],
                ]);
            }
        }

        $plot->fill([
            'number' => $request->number,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'basal_area' => $request->basal_area,
            'is_protected' => $request->is_protected == '1' ? 1 : 0,
            'protection_seasons' => $request->protection_seasons,
            'canopy' => $request->canopy,
            'subcanopy' => $request->subcanopy,
            'ground_cover' => $request->ground_cover,
            'recorders' => $request->recorders,
        ])->save();

        $plot->load([
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
            'site' => function ($query) {
            },
        ]);
        $plot->loadCount(['plants']);

        return $this->created($plot);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Plot $plot
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Plot $plot)
    {
        $this->authorize('delete', $plot);

        $plot->delete();

        return $this->created('Plot deleted');
    }

    /**
     * Validation rules for `create` and `update` methods.
     *
     * @param bool $is_update Set to true if validating an update request.
     * @return array
     */
    public function validationRules(bool $is_update = false)
    {
        $seasons = ['0', '1 to 2', 'Greater than or equal to 3'];

        $percentages = [
            '0-9%',
            '10-19%',
            '20-29%',
            '30-39%',
            '40-49%',
            '50-59%',
            '60-69%',
            '70-79%',
            '80-89%',
            '90-100%',
        ];

        return [
            'number' => 'required|integer',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'basal_area' => 'nullable|numeric',
            'is_protected' => 'nullable|boolean',
            'protection_seasons' => ['nullable', Rule::in($seasons)],
            'canopy' => ['nullable', Rule::in($percentages)],
            'subcanopy' => ['nullable', Rule::in($percentages)],
            'ground_cover' => ['nullable', Rule::in($percentages)],
            'recorders' => 'nullable',
        ];
    }
}
