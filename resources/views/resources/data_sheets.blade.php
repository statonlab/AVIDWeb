@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('resources.resources_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Getting Started</h1>
                                    <p>Three separate data sheets are provided here for you to print out if you would prefer to record your data on paper sheets and then enter the data here at the web site rather than using the <a href="/resources/smartphone-app">smartphone app</a>. The first is a site data sheet which should be completed once for each overall site, or stand, where your plots are located each time you sample the site. If the site information hasn't changed from one year to the next you don't need to complete a new site sheet for that year. The second data sheet is for the  Spring Wildflower method (Method #1). A third data sheet is provided for conducting the Woody Seedling method (Method #2). These sheets include descriptive information for each plot and can be used for 4 years in a row unless the overall conditions at the plots change (canopy closure, inside or outside of an exclosure, etc.).</p>
                                    <p><a href="/files/Site_Data_Sheet.pdf" download>Site Data Sheet</a></p>
                                    <p><a href="/files/AVID_Spring_Wildflower_Data_Sheets_2020.pdf" download>Spring Wildflower Data Sheet</a></p>
                                    <p><a href="/files/AVID_Woody_Seedling_Data_Sheets_2020.pdf" download>Woody Seedling Data Sheet</a></p>
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
