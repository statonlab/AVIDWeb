<?php

namespace App\Exports;

use App\User;
use App\Site;
use App\Plot;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SiteExport implements FromCollection, WithHeadings
{
    protected $user;

    protected $site;

    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    public function headings(): array
    {
        return [
            'Site',
            'Plot',
            'Quadrant',
            'Tag',
            'Species',
            'Previous Height',
            'Date',
            'Height',
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $rows = collect([]);

        $site = Site::with(['plots.plants'])
            ->where('id', $this->site->id)
            ->first();

        foreach ($site->plots as $plot) {
            foreach ($plot->plants as $plant) {
                $previous_height = null;
                $last_measurement = $plant->measurements()->orderBy('date', 'desc')->first();
                if ($last_measurement != null) {
                    if (!$last_measurement->is_located) {
                        $previous_height = 'missing';
                    } else if (!$last_measurement->is_alive) {
                        $previous_height = 'dead';
                    } else {
                        $previous_height = $last_measurement->height;
                    }
                }

                $rows->push([
                    $site->name,
                    $plot->number,
                    $plant->quadrant,
                    $plant->tag,
                    $plant->species->name,
                    $previous_height,
                ]);
            }
        }

        return $rows;
    }
}
