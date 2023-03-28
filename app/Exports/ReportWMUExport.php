<?php

namespace App\Exports;

use App\Http\Controllers\Traits\ReportQueries;
use App\Measurement;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReportWMUExport implements FromCollection, WithHeadings
{
    use ReportQueries;

    public string $order_by;
    public string $order_dir;

    public function __construct($orderBy = 'aggregate_wmu', $orderDir = 'asc')
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
            'Aggregate WMU',
            'Total',
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $rows = collect([]);
        $sites = $this->querySiteByWmu($this->order_by, $this->order_dir);

        foreach ($sites->cursor() as $site) {
            if (isset($site)) {
                $row = [
                    $site->aggregate_wmu ?: 'None',
                    $site->total
                ];
                $rows->push($row);
            }
        }

        return $rows;
    }
}
