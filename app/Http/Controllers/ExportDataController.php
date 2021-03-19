<?php

namespace App\Http\Controllers;

use App\Site;
use App\Exports\DataExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportDataController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new DataExport(), 'data.xlsx');
    }
}
