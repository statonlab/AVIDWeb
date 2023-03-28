<?php

namespace App\Http\Controllers;

use App\County;
use App\Exports\ReportCountyExport;
use App\Exports\ReportStateExport;
use App\Exports\ReportTownExport;
use App\Exports\ReportWMUExport;
use App\Http\Controllers\Traits\ReportQueries;
use App\Site;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    use ReportQueries;

    protected static array $aggregate_wmus = [
        'Adirondacks', 'Catskills', 'Central Appalachian Plateau', 'Central Finger Lakes', 'Central NY',
        'Closed', 'Del-Otsego', 'Del-Sullivan', 'E Appalachian Plateau', 'E Lake Plains', 'Mid Lake Plains',
        'Mohawk Valley', 'NE Appalachian Hills', 'NE Hudson', 'NW Appalachian Hills', 'NW Hudson', 'SE Hudson',
        'St. Lawrence Valley', 'Suffolk - Westchester', 'SW Hudson', 'W Appalachian Hills', 'W Appalachian Plateau',
        'W Finger Lakes', 'W Lake Plains',
    ];

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByWmu(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'aggregate_wmu',
                    'total',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);
        $sites = $this->querySiteByWmu($request->order_by ?? 'aggregate_wmu', $request->order_dir ?? 'desc')->get();

        return $this->success([
            'data' => $sites
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByState(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'name',
                    'sites_count',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);
        $states = $this->querySiteByState($request->order_by ?? 'name', $request->order_dir ?? 'desc')->get();

        return $this->success([
            'data' => $states
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function siteByCounty(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'search' => 'nullable|max:255',
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'name',
                    'sites_count',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);

        $counties = $this->querySiteByCounty($request->order_by ?? 'name', $request->order_dir ?? 'desc', $request->search ?? null)
            ->paginate($request->limit ?? 20);

        return $this->success($counties);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function siteByTown(Request $request): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'search' => 'nullable|max:255',
            'order_by' => [
                'nullable',
                'string',
                Rule::in([
                    'city',
                    'count',
                ]),
            ],
        ]);
        $this->authorize('viewAny', Site::class);

        $sites = $this->querySiteByTown($request->order_by ?? 'city', $request->order_dir ?? 'desc', $request->search ?? null)
            ->paginate($request->limit ?? 20);

        return $this->success($sites);
    }

    public function exportWmu(): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new ReportWMUExport(), 'reportWMU.xlsx');
    }

    public function exportState(): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new ReportStateExport(), 'reportState.xlsx');
    }

    public function exportCounty(): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new ReportCountyExport(), 'reportCounty.xlsx');
    }

    public function exportTown(): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        $this->authorize('viewAny', Site::class);

        return Excel::download(new ReportTownExport(), 'reportTown.xlsx');
    }
}
