<?php

namespace App\Exports;

use App\Http\Controllers\Traits\ReportQueries;
use Maatwebsite\Excel\Concerns\FromCollection;

class ReportStateExport implements FromCollection
{
    use ReportQueries;

    public string $order_by;
    public string $order_dir;

    public function __construct($orderBy = 'name', $orderDir = 'asc')
    {
        $this->order_by = $orderBy;
        $this->order_dir = $orderDir;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'State',
            'Site Count',
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $rows = collect([]);
        $states = $this->querySiteByState($this->order_by, $this->order_dir);

        foreach ($states->cursor() as $state) {
            if (isset($state)) {
                $row = [
                    $state->name,
                    $state->sites_count
                ];
                $rows->push($row);
            }
        }

        return $rows;
    }
}
