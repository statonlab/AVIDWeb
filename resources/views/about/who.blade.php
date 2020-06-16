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
                                    <h1 class="mb-4">Who We Are</h1>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="mb-2">
                                                <strong>AVID Protocol Development</strong>
                                            </div>
                                            <p class="mb-0">Authors</p>
                                            <p class="mb-0">Kristi L. Sullivan, Peter J. Smallidge and Paul D. Curtis</p>
                                            <p>
                                                <a href="https://dnr.cals.cornell.edu/">Department of Natural Resources, Cornell University</a>
                                            </p>
                                            <p class="mb-0">Collaborators</p>
                                            <p class="mb-0">
                                                <a href="http://www.dec.ny.gov/">New York State Department of Environmental Conservation</a>
                                            </p>
                                            <a href="https://www.esf.edu/">SUNY Environmental Science and Forestry</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a href="https://www.cornell.edu/">
                                                <img class="img-fluid mb-2" src="/img/cornell.svg" />
                                            </a>
                                            <a href="http://www.dec.ny.gov/">
                                                <img class="img-fluid" src="/img/dec-ny.png" />
                                            </a>
                                        </div>
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
