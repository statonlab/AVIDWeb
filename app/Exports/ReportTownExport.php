<?php

namespace App\Exports;

use App\Http\Controllers\Traits\ReportQueries;
use Maatwebsite\Excel\Concerns\FromCollection;

class ReportTownExport implements FromCollection
{
    use ReportQueries;

    public string $order_by;
    public string $order_dir;
    public string|null $search;

    public function __construct($orderBy = 'city', $orderDir = 'asc', $search = null)
    {
        $this->order_by = $orderBy;
        $this->order_dir = $orderDir;
        $this->search = $search ?? null;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Town',
            'Site Count',
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $rows = collect([]);
        $towns = $this->querySiteByTown($this->order_by, $this->order_dir, $this->search);

        foreach ($towns->cursor() as $town) {
            if (isset($town)) {
                $row = [
                    $town->city,
                    $town->count
                ];
                $rows->push($row);
            }
        }

        return $rows;
    }
}
