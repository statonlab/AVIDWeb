<?php

namespace App\Exports;

use App\User;
use App\Site;
use App\Plot;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class SiteExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /** @var User $user */
    protected $user;

    /** @var Site $site */
    protected $site;

    /** @var int $prev_measurements_count */
    protected $prev_measurements_count;

    public function __construct(Site $site)
    {
        $this->prev_measurements_count = 3;

        $this->site = $site;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        $header = ['Site', 'Plot', 'Quadrant', 'Tag', 'Species'];

        $year = now()->year;

        for ($i = $this->prev_measurements_count; $i > 0; $i--) {
            $column_year = $year - $i;
            array_push($header, "Height ($column_year)");
        }

        $header = array_merge($header, ['Date', 'Height']);

        return $header;
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
                $row = [
                    $site->name,
                    $plot->number,
                    $plant->quadrant,
                    $plant->tag,
                    $plant->species->name,
                ];

                $measurements = $plant->measurements()->orderBy('date', 'asc')->get();

                for ($i = $this->prev_measurements_count; $i > 0; $i--) {
                    $previous_height = null;
                    $last_measurement = $measurements->where('date.year', now()->year - $i)->pop();
                    if ($last_measurement != null) {
                        if (!$last_measurement->is_located) {
                            $previous_height = 'missing';
                        } else if (!$last_measurement->is_alive) {
                            $previous_height = 'dead';
                        } else {
                            $previous_height = $last_measurement->height;
                        }
                    }

                    array_push($row, $previous_height);
                }

                $rows->push($row);
            }
        }

        return $rows;
    }
}
