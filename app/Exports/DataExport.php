<?php

namespace App\Exports;

use App\Measurement;
use Illuminate\Database\Eloquent\Builder;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class DataExport implements FromQuery, WithHeadings, WithMapping
{
    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Site Name',
            'User Name',
            'Owner Name',
            'Contact Info',
            'State',
            'County',
            'Town / City',
            'Approximate Basal Area',
            'Average Overstory Tree Diameter',
            'Overstory Species',
            'Seedling or Shrub Species',
            'Plot Number',
            'Latitude',
            'Longitude',
            'Ground and Shrub Cover',
            'Enclosed or protected?',
            '# of Protection Seasons',
            'Recorders',
            'Basal Area',
            'Plant Type',
            'Tag Number',
            'Quadrant',
            'Plant Species',
            'Measurement Date',
            'Measurement Alive?',
            'Measurement Located?',
            'Height',
            'Comments',
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(): Builder
    {
        $rows = collect([]);

        return Measurement::whereHas('site')->whereHas('plot')->whereHas('plant')->with([
            'site',
            'site.state',
            'site.county',
            'site.species',
            'site.shrubs',
            'plot',
            'plant',
            'plant.type',
            'plant.species',
            'user',
        ]);
    }

    public function map($row): array
    {
        $measurement = $row;
        $species = $measurement->site->species->map(function ($s) {
            return $s->name;
        });

        $shrubs = $measurement->site->species->map(function ($s) {
            return $s->name;
        });

        $number = '';
        $latitude = '';
        $longitude = '';
        $ground_cover = '';
        $is_protected = '';
        $protection_seasons = '';
        $recorders = '';
        $basal_area = '';

        if (isset($measurement->plot)) {
            $plot = $measurement->plot;

            $number = $plot->number;
            $latitude = $plot->latitude;
            $longitude = $plot->longitude;
            $ground_cover = $plot->ground_cover;
            $is_protected = $plot->is_protected;
            $protection_seasons = $plot->protection_seasons;
            $recorders = $plot->recorders;
            $basal_area = $plot->basal_area;
        }

        $type = '';
        $tag = '';
        $quadrant = '';
        $p_species = '';

        if (isset($measurement->plant)) {
            if (isset($measurement->plant->type)) {
                $type = $measurement->plant->type->name;
            }

            if (isset($measurement->plant->species)) {
                $p_species = $measurement->plant->species->name;
            }

            $tag = $measurement->plant->tag;
            $quadrant = $measurement->plant->quadrant;
        }

        return [
            $measurement->site->name,
            $measurement->user->name,
            $measurement->site->owner_name,
            $measurement->site->owner_contact,
            $measurement->site->state?->name,
            $measurement->site->county?->name,
            $measurement->site->city,
            $measurement->site->basal_area,
            $measurement->site->diameter,
            implode(", ", $species),
            implode(", ", $shrubs),
            $number,
            $latitude,
            $longitude,
            $ground_cover,
            $is_protected,
            $protection_seasons,
            $recorders,
            $basal_area,
            $type,
            $tag,
            $quadrant,
            $p_species,
            $measurement->date,
            $measurement->is_alive ? 'Yes' : 'No',
            $measurement->is_located ? 'Yes' : 'No',
            $measurement->height,
            $measurement->site->comments,
        ];
    }
}
