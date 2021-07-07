<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Measurement;
use App\Plant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MeasurementsController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request)
    {
        $plant = Plant::findOrFail($request->plant_id);
        $this->authorize('update', $plant);
        $this->validate($request, [
            'date' => 'required|date',
            'is_located' => 'required|boolean',
        ]);

        if ($request->is_located == 1) {
            $this->validate($request, [
                'height' => 'required|numeric',
                'is_alive' => 'required|boolean',
            ]);
        }

        /** @var \App\User $user */
        $user = $request->user();
        $measurement = Measurement::create([
            'plant_id' => $plant->id,
            'plot_id' => $plant->plot->id,
            'site_id' => $plant->plot->site_id,
            'user_id' => $user->id,
            'is_located' => $request->is_located,
            'date' => date("Y-m-d", strtotime($request->date)),
            'height' => $request->height,
            'is_alive' => $request->is_alive,
        ]);

        return $this->created($measurement);
    }

    /**
     * @param Measurement $measurement
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Measurement $measurement, Request $request)
    {
        $this->authorize('update', $measurement);

        $this->validate($request, [
            'date' => 'required|date',
            'is_located' => 'required|boolean',
        ]);
        if ($request->is_located == 1) {
            $this->validate($request, [
                'height' => 'required|numeric',
                'is_alive' => 'required|boolean',
            ]);
        }

        $measurement->fill([
            'is_located' => $request->is_located,
            'date' => date("Y-m-d", strtotime($request->date)),
        ]);
        if ($request->is_located == 1) {
            $measurement->fill([
                'height' => $request->height,
                'is_alive' => $request->is_alive,
            ]);
        } else {
            $measurement->fill([
                'height' => null,
                'is_alive' => null,
            ]);
        }

        $measurement->save();
        $measurement->plot->setLastMeasuredAt($measurement);
        return $this->created($measurement);
    }
}
