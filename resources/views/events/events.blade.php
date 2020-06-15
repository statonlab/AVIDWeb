@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="col-12">
                <h1 class="mb-4">Events</h1>
                <div class="row">
                    @each('components.event_card', $events, 'event')
                </div>
            </div>
        </div>
    </div>

    <style scoped>
        .text-overflow-ellipsis {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .card-img-top {
            object-fit: cover;
            width: 100%;
            height: 200px;
        }
    </style>
@endsection
