@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('site_preparation.site_preparation_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Equipment Needed</h1>
                                    <ul>
                                        <li>Compass</li>
                                        <li>2 yardsticks, or a stick or string cut to 6 feet in length</li>
                                        <li>Permanent marker</li>
                                        <li>Smart phone with Avid Deer app (available on <a href="https://apps.apple.com/us/app/avid-deer/id1578311148">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.aviddeer&hl=en_US&gl=US">Android</a>, or data sheets with pen or pencil and clipboard</li>
                                        <li>PVC (2-ft x 1-inch), fiberglass, heavy duty plastic (<a href="https://www.forestry-suppliers.com/">www.forestry-suppliers.com</a> or <a href="https://www.berntsen.com/Surveying/Survey-Stakes)">https://www.berntsen.com/Surveying/Survey-Stakes</a>), or wood stakes for marking plot center</li>
                                        <li>Hammer or mallet for pounding stakes into ground</li>
                                        <li>Brightly colored paint, brightly colored duct tape, or surveyors flagging for marking center and edge stakes</li>
                                        <li>Colored pin flags or additional stakes for marking the 4 cardinal directions along the edge of your plots</li>
                                        <li>GPS unit or phone with GPS capability</li>
                                        <li>Numbered seedling tags (can be provided by Cornell University Department of Natural Resources, email Kristi Sullivan at <a href="mailto:KLS20@cornell.edu">KLS20@cornell.edu</a>)</li>
                                        <li>The Field Guide Summary Sheet for Volunteers in Appendix B</li>
                                        <li>A partner! Working with a partner is not necessary but can speed up the process and add to the enjoyment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.footer')
    </div>
@endsection
