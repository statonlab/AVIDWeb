<?php

namespace App\Console\Commands;

use App\PendingFile;
use Illuminate\Console\Command;

class DeleteOldPendingFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pending-files:flush';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes pending files from storage that have been downloaded already';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        PendingFile::where('created_at', '<', now()->subDays(3))
            ->lazyById()
            ->each(function ($file) {
                try {
                    \Storage::disk($file->disk)->delete($file->path);
                } catch (\Throwable) {
                }

                $file->delete();
            });

        return 0;
    }
}
