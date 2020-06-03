@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="row">
                <div class="card col-lg-8">
                    <div class="card-header">
                        <h1 class="page-title mb-2">Who We Are</h1>
                    </div>
                    <div class="card-body">
                        <strong>AVID Protocol Development</strong>
                        <p>Authors</p>
                        <p class="mb-0">Kristi L. Sullivan, Peter J. Smallidge and Paul D. Curtis</p>
                        <p>
                            <a href="https://dnr.cals.cornell.edu/">Department of Natural Resources, Cornell University</a>
                        </p>
                        <p>Collaborators</p>
                        <p class="mb-0">
                            <a href="http://www.dec.ny.gov/">New York State Department of Environmental Conservation</a>
                        </p>
                        <a href="https://www.esf.edu/">SUNY Environmental Science and Forestry</a>
                    </div>
                </div>
                <div class="card col-lg-4">
                    <div class="card-body">
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
@endsection
