<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePlotRequest;
use App\Http\Requests\CreatePlantRequest;
use App\Site;
use App\Plot;
use App\Plant;
use App\Measurement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class QuarantineController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function sites(Request $request)
    {
        $sites = Site::whereHas('plots', function ($query) {
            $query->withQuarantined()->where('plots.is_quarantined', true);
        })->orWhereHas('plants', function ($query) {
            $query->withQuarantined()->where('plants.is_quarantined', true);
        });

        return $this->success($sites->get());
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Site $site
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function plots(Request $request, Site $site)
    {
        $plots = Plot::withQuarantined()->where('site_id', $site->id)
            ->where(function ($query) {
                $query->where('plots.is_quarantined', true)
                    ->orWhereHas('plants', function ($query) {
                        $query->withQuarantined()->where('plants.is_quarantined', true);
                    });
            })->with(['plants' => function($query) {
               $query->withQuarantined();
            }])->get();

        return $this->success($plots);
    }

    /**
     * Removes a plot from quarantine.
     *
     * @param \App\Http\Requests\CreatePlotRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function importPlot(CreatePlotRequest $request, $id)
    {
        $plot = Plot::withQuarantined()->findOrFail($id);

        $this->authorize('update', $plot);

        $plot->fill([
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'basal_area' => $request->basal_area,
            'is_protected' => $request->is_protected == '1' ? 1 : 0,
            'protection_seasons' => $request->protection_seasons,
            'canopy' => $request->canopy,
            'subcanopy' => $request->subcanopy,
            'ground_cover' => $request->ground_cover,
            'recorders' => $request->recorders,
            'is_quarantined' => false,
        ])->save();

        return $this->success($plot);
    }

    /**
     * Removes a plant from quarantine.
     *
     * @param \App\Http\Requests\CreatePlantRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function importPlant(CreatePlantRequest $request, $id)
    {
        $plant = Plant::withQuarantined()->findOrFail($id);

        $this->authorize('update', $plant);

        $plant->fill([
            'plant_type_id' => $request->plant_type_id,
            'species_id' => $request->species_id,
            'tag' => $request->tag,
            'quadrant' => $request->quadrant,
            'is_quarantined' => false,
        ])->save();

        $measurement = Measurement::withQuarantined()
            ->where('is_quarantined', true)
            ->where('plant_id', $plant->id)
            ->first();

        if ($measurement !== null) {
            $measurement->fill(['is_quarantined' => false])->save();
        }

        return $this->success($plant);
    }
}
