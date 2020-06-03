@extends('layouts.guest')

@section('content')
    @include('components.navbar')
    <div class="container py-4">
        <div class="d-flex">
            <div class="row">
                <div class="col-md-4">
                    @include('user_guides.guide_sidebar')
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="mb-4">Getting Started</h1>
                            <p>Deer browsing affects many different components of our forests. Plants are a primary component and the basis for an index to assess and document changes in deer population levels and associated impacts. An index of deer impact should respond quickly to changes in the population, be based on scientific evidence, and be easily and accurately applied by volunteers in different conditions. The methods supported by this protocol emphasize either spring wildflowers, or tree and shrub seedlings in some circumstances.</p>
                            <p>For the method (or methods) you select, plan to collect and record all of the relevant information. The data collected will be used to track vegetation changes over time. Therefore, try to visit the plots and collect data on your established plots each year, or every other year at a minimum. In subsequent years following the initial plot establishment, re-measurement should happen within one week of the original date of measurement.</p>
                            <p>Spring wildflowers, also called spring ephemerals because they occur for a short period of time, have been found to respond quickly to changes in deer pressure, and are effective indicators under a variety of forest conditions. As ephemerals, wildflowers will not be apparent for much of the year and thus seasonally restricted in use. Woody seedlings are available year round, but they tend not to respond as quickly as wildflowers, and seedling identification can be more challenging, especially when leaves are not present.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
