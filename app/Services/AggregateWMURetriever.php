<?php

namespace App\Services;

use App\Plot;
use Illuminate\Support\Facades\Http;

class AggregateWMURetriever
{
    /**
     * @var \App\Plot
     */
    protected Plot $plot;

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
     * @throws \Exception
     */
    public function setAggregateWMU()
    {
        rescue(function () {
            $response = Http::get('http://localhost:5000/aggregate', [
                'lat' => $this->plot->latitude,
                'lng' => $this->plot->longitude,
            ]);

            $body = $response->json();

            if ($response->status() === 422) {
                throw new \Exception('Failed to add aggregate WMU to plot id ' . $this->plot->id . ': ' . $body['error']);
            }

            $aggregate_wmu = $body['results'];

            $this->plot->fill(['aggregate_wmu' => $aggregate_wmu])->save();
        });
    }
}
