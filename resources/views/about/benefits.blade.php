@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('about.about_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Benefits of Using AVID</h1>
                                    <p>Landowners and hunters are increasingly interested in knowing how deer populations are changing through time and the impacts those deer may be having on woodland plants. However, accurately measuring the number of deer in a given area is difficult and time-consuming. The number of deer seen or harvested during the hunting season depends on many different factors including weather and local food sources and may be an inaccurate assessment of changes in deer population. In addition, no “one size fits all” optimum deer density exists for all areas. The “right” number of deer a given forest can support without substantial damage varies depending upon many factors. These factors include soil quality, soil moisture, amount of other food available for deer and others. These variables change from region to region. Monitoring deer impacts by measuring the success or failure of indicator plants in the woods is a good way to know if the number of deer is in balance with the available habitat in a given region and if that balance is changing over time.</p>
                                    <p>Data collected on lands in New York State will be used by New York State Department of Environmental Conservation staff to track the health and status of forest lands over time, and aid in deer management decision-making. For individual property owners or managers, the project will allow convenient storage and viewing of data collected on a given property over time. Landowners and managers from other states are welcome to use the web site and phone app as well. The long-term goal is to maintain healthy and diverse forests for future generations. Each woodland owner can make his or her contributions to the sustainability of Northeastern forests and important wildlife habitat.</p>
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
