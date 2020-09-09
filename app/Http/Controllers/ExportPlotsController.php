<?php

namespace App\Http\Controllers;

use App\Exports\PlotsExport;
use App\Site;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportPlotsController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new PlotsExport(), 'Plots.xlsx');
    }
}
