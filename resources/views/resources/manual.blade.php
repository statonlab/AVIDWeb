@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="row">
                <div class="col-md-4">
                    @include('resources.resources_sidebar')
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="mb-4">AVID Instruction Manual</h1>
                            <a href="/files/AVID.draft.regeneration.protocol_7_19_2017.pdf" download>AVID Instruction Manual</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection