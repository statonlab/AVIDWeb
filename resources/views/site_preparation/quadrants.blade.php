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
                                    <h1 class="mb-4">Set Up Sampling Quadrants</h1>
                                    <p>Dividing each plot into quarters, or quadrants, can be helpful for keeping track of, and relocating, individually marked flowers or seedlings. Four quadrants can be established by marking the plot edge at each of the four cardinal directions (north, south, east, and west) (Figures 3 and 4). A stake, brightly colored pin flag, PVC pipe, or painted and flagged kabob skewers, can be pressed into the ground to denote each of the cardinal directions. Use a ¾- or 1-inch PVC pipe cut to 24” lengths. Quadrant markers should be labelled N, S, E and W. This will create four quadrants for sampling – the northeast quadrant, northwest quadrant, southeast quadrant and southwest quadrant. Permanently marking the cardinal directions will make finding your plants and re-measuring easier in future visits. Two, 12-foot strings can (optional) be laid out from north to south and east to west to help you visualize the individual quadrants as you sample (Figure 4).</p>
                                    <div class="row justify-content-center mb-2 px-2">
                                        <img class="img-fluid" src="/img/quadrants.jpeg" />
                                    </div>
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
