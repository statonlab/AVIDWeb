<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePlotRequest;
use App\Plot;
use App\Site;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use App\Events\PlotCreated;
use App\Events\PlotUpdated;
use Shapefile\ShapefileAutoloader;
use Shapefile\ShapefileException;
use Shapefile\ShapefileReader;
use Storage;

class PlotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \App\Site $site
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Site $site, Request $request)
    {
        $this->authorize('view', $site);

        $this->validate($request, [
            'order_by' => 'nullable|in:number,plants_count,last_measured_at',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
            'limit' => 'nullable|integer|min:20|max:1000',
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

        $plots = $plots->orderBy($request->order_by ?? 'number',
            $request->order_dir ?? 'asc')->paginate($request->limit ?? 20);

        return $this->success($plots);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Site $site
     * @param \App\Http\Requests\CreatePlotRequest $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Site $site, CreatePlotRequest $request)
    {
        // Is the user allowed to add plots to this site?
        $this->authorize('update', $site);

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

        event(new PlotCreated($plot));

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
     * @param \App\Http\Requests\CreatePlotRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(CreatePlotRequest $request, $id)
    {
        $plot = Plot::withQuarantined()->findOrFail($id);

        $this->authorize('update', $plot);

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
            'plants.measurements' => function ($query) {
            },
            'plants.species' => function ($query) {
            },
        ]);

        $plot->loadCount(['plants']);

        event(new PlotUpdated($plot));

        return $this->created($plot);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy($id)
    {
        $plot = Plot::withQuarantined()->findOrFail($id);

        $this->authorize('delete', $plot);

        $plot->delete();

        return $this->created('Plot deleted');
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function map(Request $request): Response|JsonResponse
    {
        $user = $request->user();

        $plots = Plot::select([
            'plots.id',
            'plots.latitude',
            'plots.longitude',
            'plots.custom_latitude',
            'plots.custom_longitude',
        ])->when($user->cant('viewAny', Plot::class), function ($query) use ($user) {
            $query->whereHas('site',
                fn($q) => $q->where('sites.user_id', '=', $user->id));
        })->where(function ($query) {
            $query->where(fn($q) => $q->whereNotNull('latitude')
                ->whereNotNull('longitude'));
            $query->orWhere(fn($q) => $q->whereNotNull('custom_latitude')
                ->whereNotNull('custom_longitude'));
        })->get();

        return $this->success($plots);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function layers(Request $request): Response|JsonResponse
    {
        require_once(base_path('vendor/gasparesganga/php-shapefile/src/Shapefile/ShapefileAutoloader.php'));
        ShapefileAutoloader::register();
        $path = Storage::path("maps/NYS_WildlifeManagementUnits.shp");

        $shapefile = new ShapefileReader($path);
        $layers = [];
        try {
            // Read all the records
            while ($geometry = $shapefile->fetchRecord()) {
                // Skip the record if marked as "deleted"
                if ($geometry->isDeleted()) {
                    continue;
                }

                // Print Geometry as GeoJSON
                $geometry = json_decode($geometry->getGeoJSON(), true);
                $layers[] = [
                    'type' => 'Feature',
                    'geometry' => $geometry
                ];
            }
        } catch (ShapefileException $e) {
            // Print detailed error information
            report($e);

            return $this->error('Invalid shape file', [
                'details' => [$e->getDetails()],
            ]);
        }

        return $this->success([
            'type' => 'FeatureCollection',
            'features' => $layers
        ]);
    }
}
