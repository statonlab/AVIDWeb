@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Wildflower and Seedling Identification Guides</h1>
                        </div>
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-4">
                                    <img class="img-fit img-fluid" src="/img/canada-mayflower.jpeg">
                                </div>
                                <div class="col-8">
                                    <p class="mb-2">Canada Mayflower</p>
                                    <p class="text-muted">Maianthemum canadense</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">
                                    <img class="img-fit img-fluid" src="/img/indian-cucumber-root.jpeg">
                                </div>
                                <div class="col-8">
                                    <p class="mb-2">Indian cucumber-root</p>
                                    <p class="text-muted">Medeola virginiana</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">
                                    <img class="img-fit img-fluid" src="/img/jack-in-the-pulpit.jpeg">
                                </div>
                                <div class="col-8">
                                    <p class="mb-2">Jack-in-the-Pulpit</p>
                                    <p class="text-muted">Arisaema triphyllum</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">
                                    <img class="img-fit img-fluid" src="/img/trillium.jpeg">
                                </div>
                                <div class="col-8">
                                    <p class="mb-2">Trillium</p>
                                    <p class="text-muted">Trillium spp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .img-fit {
            object-fit: cover;
            width: 100%;
            height: 200px;
        }
    </style>
@endsection
