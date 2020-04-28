@extends('layouts.app')

@section('content')

    <div class="py-5">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    {{ $message }}
                </div>
            </div>
        </div>
    </div>

@endsection
