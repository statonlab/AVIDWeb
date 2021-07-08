<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreatePlotRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
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

        $rules = [
            'number' => 'required|integer',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'custom_latitude' => 'nullable|numeric',
            'custom_longitude' => 'nullable|numeric',
            'accuracy' => 'nullable|numeric',
            'altitude' => 'nullable|numeric',
            'is_protected' => 'required|boolean',
            'canopy' => ['required', Rule::in($percentages)],
            'subcanopy' => ['required', Rule::in($percentages)],
            'ground_cover' => ['required', Rule::in($percentages)],
            'recorders' => 'nullable',
            'basal_area' => 'nullable|numeric',
            'protection_seasons' => [
                'exclude_unless:is_protected,true',
                'required',
                Rule::in($seasons),
            ],
        ];

        return $rules;
    }
}
