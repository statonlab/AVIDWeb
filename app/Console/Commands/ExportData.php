<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Exports\DataExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'export:data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export all data into a spreadsheet.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Excel::store(new DataExport(), 'data.xlsx');

        $this->info("Data exported successfully.");
    }
}
