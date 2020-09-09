<?php

namespace App\Exports;

use App\Plot;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PlotsExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
     * @return string[]
     */
    public function headings(): array
    {
        return [
            'Site',
            'Plot',
            'Is Protected?',
            'Protection Seasons',
            'Plot ID - Do not change'
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Plot::orderBy('site_id', 'asc')
            ->orderBy('number', 'asc')
            ->with('site')
            ->get()
            ->map(function (Plot $plot) {
                return [
                    $plot->site->name,
                    $plot->number,
                    $plot->is_protected ? 'yes' : 'no',
                    $plot->protection_seasons,
                    $plot->id,
                ];
            });
    }
}
