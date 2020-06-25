<?php

namespace App\Services;

use App\Plot;
use Illuminate\Support\Facades\Http;

class WMURetriever
{
    /**
     * @var \App\Plot
     */
    protected $plot;

    /**
     * Create the retriever.
     *
     * @return void
     */
    public function __construct(Plot $plot)
    {
        $this->plot = $plot;
    }

    /**
     * Get the WMU for the plot.
     *
     * @return void
     */
    public function setWMU()
    {
       rescue(function () {
            $response = Http::get('http://localhost:5000', [
                'lat' => $this->plot->latitude,
                'lng' => $this->plot->longitude,
            ]);

            $body = $response->json();

            if ($response->status() === 422) {
                throw new \Exception('Failed to add WMU to plot id ' . $this->plot->id . ': ' . $body['error']);
            }

            $wmu = $body['results'];

            $this->plot->fill(['wmu' => $wmu])->save();
        });
    }
}
