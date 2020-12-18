<?php

namespace App\Http\Controllers;

use App\Site;
use App\Plot;
use App\Plant;
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
        $plots = Plot::withQuarantined()
            ->where('site_id', $site->id)
            ->where('is_quarantined', true)->get();

        $plots->transform(function (Plot $plot) {
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

            $plot_validator = Validator::make($plot->toArray(), [
                'number' => 'required|integer',
                'latitude' => 'required|numeric',
                'longitude' => 'required|numeric',
                'is_protected' => 'required|boolean',
                'canopy' => ['required', Rule::in($percentages)],
                'subcanopy' => ['required', Rule::in($percentages)],
                'ground_cover' => ['required', Rule::in($percentages)],
                'protection_seasons' => [
                    'exclude_unless:is_protected,true',
                    'required',
                    Rule::in($seasons),
                ],
            ]);

            $plot->is_incomplete = $plot_validator->fails();

            $plants = Plant::withQuarantined()
                ->where('plot_id', $plot->id)
                ->where('is_quarantined', true)
                ->get();

            $plants->transform(function (Plant $plant) {
                $quadrants = 'Southwest, Northwest, Southeast, Northeast';
                $plant_validator = Validator::make($plant->toArray(), [
                    'plant_type_id' => 'required|exists:plant_types,id',
                    'tag' => 'required|integer',
                    'quadrant' => [
                        'required',
                        Rule::in($quadrants),
                    ],
                    'species_id' => 'required|exists:species,id',
                ]);

                $plant->is_incomplete = $plant_validator->fails();

                return $plant;
            });

            $plot->plants = $plants;

            return $plot;
        });

        return $this->success($plots);
    }

    /**
     * Removes a plot from quarantine.
     *
     * @param \App\Plot $plot
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function importPlot(Plot $plot) {
        $plot->fill(['is_quarantined' => true])->save();

        return $this->success($plot);
    }

    /**
     * Removes a plant from quarantine.
     *
     * @param \App\Plant $plant
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function importPlant(Plant $plant) {
        $plant->fill(['is_quarantined' => true])->save();

        return $this->success($plant);
    }
}
