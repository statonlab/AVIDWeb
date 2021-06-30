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

        $instructions = "To update existing plants, you must fill out the date and height columns (Columns I and J) for all existing plant tags. To add new plants or plots,\n"."you can additionally fill out the plot number, plant tag, species name, and plant type. If a plant is dead, put ‘dead’ in the height column.\n"."If a plant was not found, put ‘missing’ in the height column. New study site locations must be created via the website.\n\n"."The \"previous height\" columns (Columns F, G, H) are shown for your convenience to facilitate finding the plant in the field, but these cannot be edited. If you\n"."want to import information for previous years, you may do so by filling out the date column (Column I) with the desired date (e.g. 2-18-2019) and adding the\n"."measurement in Column J.\n\n"."New plots and plants that are incomplete will appear on the Incomplete Data page, where you will have to fill out additional information to complete the\n"."import process.\n\n"."When you have finished, save the document, return to the AVID web site page, click the 'Import Spreadsheet' button under the Actions block, and\n"."select this spreadsheet.\n\n"."Once the incomplete data is completed and the spreadsheet is imported, you should see new measurements for each of your plants. Please check the data through\n"."the AVID website to make sure your data were imported correctly.\n\n"."If you encounter problems, please contact us.";

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
        $sheet->getRowDimension(1)->setRowHeight(250);

        // Set the background color to green.
        $sheet->getStyle('A1:J1')->getFill()
          ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
          ->getStartColor()->setARGB('2eb07a');

        // Set the font color to white.
        $sheet->getStyle('A1:J1')->getFont()
          ->getColor()->setARGB('ffffff');
    }
}

