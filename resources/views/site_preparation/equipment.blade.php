@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Equipment Needed</h1>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Compass</li>
                                <li>2 yardsticks, or a stick or string cut to 2 yards in length</li>
                                <li>2 strings cut to 12 feet in length (optional: to help visualize quadrant boundaries)</li>
                                <li>Permanent marker</li>
                                <li>Smart phone with app, or data sheets with pen or pencil</li>
                                <li>PVC (2-ft x 1-inch), wood, or rebar stakes for marking plot center</li>
                                <li>Colored pin flags or additional stakes for marking the 4 cardinal directions along the edge of your plots</li>
                                <li>Hammer or mallet for pounding stakes into ground</li>
                                <li>Brightly colored paint, brightly colored duct tape, or surveyors flagging for marking stakes</li>
                                <li>GPS unit or phone with GPS capability</li>
                                <li>Numbered seedling tags (can be provided by Cornell University Department of Natural Resources, contact Kristi Sullivan at <a href="mailto:KLS20@cornell.edu">kls20@cornell.edu</a>)</li>
                                <li>A partner! Working with a partner is not necessary but can speed up the process and add to the enjoyment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
