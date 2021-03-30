@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="row">
                    <div class="col-md-4">
                        @include('resources.resources_sidebar')
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-4">AVID Instruction Manual</h1>
                                <a href="/files/AVID_Manual_2020.pdf" download>AVID Instruction Manual</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.footer')
    </div>
@endsection
