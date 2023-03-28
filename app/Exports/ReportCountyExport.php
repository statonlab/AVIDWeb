<?php

namespace App\Exports;

use App\Http\Controllers\Traits\ReportQueries;
use Maatwebsite\Excel\Concerns\FromCollection;

class ReportCountyExport implements FromCollection
{
    use ReportQueries;

    public string $order_by;
    public string $order_dir;
    public string|null $search;

    public function __construct($orderBy = 'name', $orderDir = 'asc', $search = null)
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
            'County',
            'Site Count',
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $rows = collect([]);
        $counties = $this->querySiteByCounty($this->order_by, $this->order_dir, $this->search);

        foreach ($counties->cursor() as $county) {
            if (isset($county)) {
                $row = [
                    $county->name,
                    $county->sites_count
                ];
                $rows->push($row);
            }
        }

        return $rows;
    }
}
