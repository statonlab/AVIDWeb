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
     * Creates measurement on server from uploaded app data.
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

    public function update(Measurement $serverMeasurement, $appMeasurement)
    {
        $serverMeasurement->fill([
            'is_located' => $appMeasurement['is_located'],
            'date' => date("Y-m-d", strtotime($appMeasurement['date'])),
        ]);

        if ($appMeasurement['is_located'] == 1) {
            $serverMeasurement->fill([
                'height' => $appMeasurement['height'],
                'is_alive' => $appMeasurement['is_alive'],
            ]);
        } else {
            $serverMeasurement->fill([
                'height' => null,
                'is_alive' => null,
            ]);
        }

        $serverMeasurement->save();

        $serverMeasurement->plot->setLastMeasuredAt($serverMeasurement);

        $this->with($serverMeasurement);

        return $serverMeasurement;
    }

    protected function with($measurement)
    {
        $load = [
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ];

        if ($measurement instanceof Measurement) {
            return $measurement->load($load);
        }

        return $measurement->with($load);
    }
}
