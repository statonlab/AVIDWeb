<?php

namespace App\Jobs;

use App\Exports\DataExport;
use App\PendingFile;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Excel;

class CreateDataExportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected PendingFile $file)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(): void
    {
        $path = 'exports/'.\Str::uuid().'.xlsx';
        try {
            \Excel::store(new DataExport(), $path, 'local', Excel::XLSX);
        } catch (\Throwable $e) {
            $this->file->fill([
                'error' => $e->getMessage(),
            ])->save();
        }

        $this->file->fill([
            'progress' => 100,
            'path' => $path,
            'disk' => 'local',
        ])->save();
    }
}
