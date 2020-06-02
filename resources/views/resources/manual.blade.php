@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="row">
                <div class="card col-12">
                    <div class="card-header">
                        <h1 class="page-title mb-0">AVID Instruction Manual</h1>
                    </div>
                    <div class="card-body">
                        <a href="/files/AVID.draft.regeneration.protocol_7_19_2017.pdf" download>AVID Instruction Manual</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
