<?php

namespace App\Http\Controllers\Api;

use App\Measurement;
use App\Plant;
use Illuminate\Support\Facades\DB;

class MeasurementsApi
{
    /**
     * Creates measurement on server from uploaded app data.
     * @param Plant $plant
     * @param $measurement
     */
    public function upload(Plant $plant, $measurement, $user)
    {
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
