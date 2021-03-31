<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePlantRequest extends FormRequest
{
    protected static $quadrants = [
        'Southwest',
        'Northwest',
        'Southeast',
        'Northeast',
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $quadrants = implode(',', static::$quadrants);
        return [
            'species_id' => 'required|exists:species,id',
            'plant_type_id' => 'required|exists:plant_types,id',
            'tag' => 'required|integer',
            'quadrant' => "required|in:$quadrants",
        ];
    }
}
