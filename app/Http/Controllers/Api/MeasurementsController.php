<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MeasurementController;
use App\Measurement;
use App\Plant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MeasurementsController extends Controller
{
    /**
     * @param Plant $plant
     * @param $measurement
     */
    public function upload(Plant $plant, $measurement, $user)
    {
        $created = DB::transaction(function () use ($plant, $measurement, $user) {
            /** @var \App\User $user */
            $measurement = Measurement::create([
                'plant_id' => $plant->id,
                'plot_id' => $plant->plot->id,
                'site_id' => $plant->plot->site_id,
                'user_id' => $user->id,
                'is_located' => $measurement['is_located'],
                'date' => date("Y-m-d", strtotime($measurement['date'])),
                'height' => $measurement['height'],
                'is_alive' => $measurement['is_alive'],
            ]);
            return $measurement;
        });
        return $this->created($created);
    }
}
//        $user = $request->user();
//        $plant = $request->plant;
//
//        if ($plant['id']) {
//            $serverPlant = Plant::find($plant['id']);
//            Log::info('this worked?');
//            $created = DB::transaction(function () use($serverPlant, $request) {
//                $measurementController = new MeasurementController();
//                return $measurementController->create($serverPlant, $request);
//            });
//        } else {
//            Log::info('no plant_id found');
//
//            // createplant()
//            // then createmeasurement()
//        }
//
//        Log::info('finishing request');
//        return $this->success($created);
