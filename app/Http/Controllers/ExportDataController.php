<?php

namespace App\Http\Controllers;

use App\Jobs\CreateDataExportJob;
use App\PendingFile;
use App\Site;
use App\Exports\DataExport;
use Illuminate\Http\JsonResponse;
use Maatwebsite\Excel\Facades\Excel;

class ExportDataController extends Controller
{
    /**
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', Site::class);

        $file = PendingFile::create([
            'user_id' => auth()->id(),
            'name' => 'data.xlsx',
            'progress' => 0
        ]);

        $this->dispatch_sync(new CreateDataExportJob($file));

        return $this->success($file);
    }
}
