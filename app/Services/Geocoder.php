<?php

namespace App\Services;

class Geocoder
{
    /**
     * Get the address to the given coordinates.
     *
     * @param float $latitude
     * @param float $longitude
     */
    public static function address($latitude, $longitude)
    {
        $key = config('services.maps.key');
        $params = http_build_query([
            'latlng' => "{$latitude},{$longitude}",
            'key' => $key,
        ]);
        $url = "https://maps.googleapis.com/maps/api/geocode/json?{$params}";
        $response = file_get_contents($url);
        if ($response) {
            $results = json_decode($response);

            return $results->status === 'OK' ? $results : null;
        }

        return null;
    }
}
