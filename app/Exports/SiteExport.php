<?php

namespace App\Exports;

use App\User;
use App\Site;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;

class SiteExport implements FromCollection, WithHeadings, ShouldAutoSize, WithTitle, WithEvents
{
    use RegistersEventListeners;

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
        $header = ['Plot', 'Quadrant', 'Tag', 'Plant Type', 'Species'];

        $year = now()->year;

        for ($i = $this->prev_measurements_count; $i > 0; $i--) {
            $column_year = $year - $i;
            array_push($header, "Height ($column_year)");
        }

        $header = array_merge($header, ['Date (MM-DD-YYYY)', 'Height (inches)']);

        return $header;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $rows = collect([]);

        $site = Site::with([
            'plots.plants' => function ($query) {
                $query->with(['type']);
            }
        ])->where('id', $this->site->id)
            ->first();

        foreach ($site->plots()->orderBy('number', 'asc')->cursor() as $plot) {
            foreach ($plot->plants()->orderBy('tag', 'asc')->cursor() as $plant) {
                $row = [
                    $plot->number,
                    $plant->quadrant,
                    $plant->tag,
                    $plant->type->name,
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

    public function title(): string
    {
        return $this->site->name;
    }

    public static function beforeSheet(BeforeSheet $event)
    {
        $event->sheet->autoSize();
    }

    public static function afterSheet(AfterSheet $event)
    {
        $sheet = $event->sheet->getDelegate();

        $instructions = "To update existing plants, you must fill out the date and height columns (Columns I and J).\n" .
            "To add new plants or plots, you can additionally fill out the plot number and plant tag.\n" .
            "Any new plots or plants that have missing information will be added to data quarantine.\n" .
            "\nWhen you have finished, save the document, return to the site page, click the 'Import Spreadsheet'\n" .
            "button under the Actions block, and select this spreadsheet.\n" .
            "Once the import is completed, you should see new measurements for each of your plants.";

        $sheet->insertNewRowBefore(1);
        $sheet->setCellValue('A1', $instructions);

        $sheet->getColumnDimension('A')->setAutoSize(false);
        foreach(range('B','J') as $columnID) {
            $sheet->getColumnDimension($columnID)->setAutoSize(true);
        }

        // Manually auto-size the first column by the site name (ignore the instructions row).
        $site_name = $sheet->getCell('A2')->getValue();
        $sheet->getColumnDimension('A')->setWidth(strlen($site_name) * 2.0);

        // Adjust header row height.
        $sheet->getRowDimension(1)->setRowHeight(100);

        // Set the background color to green.
        $sheet->getStyle('A1:J1')->getFill()
          ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
          ->getStartColor()->setARGB('2eb07a');

        // Set the font color to white.
        $sheet->getStyle('A1:J1')->getFont()
          ->getColor()->setARGB('ffffff');
    }
}
