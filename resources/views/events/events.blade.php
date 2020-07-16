@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            @if(! empty($events))
                <div class="col-12">
                    <h1 class="mb-4">Events</h1>
                    <div class="row">
                        @each('components.event_card', $events, 'event')
                    </div>
                </div>
            @else
                <div class="row">
                    <div class="col-6 my-auto d-block">
                        <p class="mb-0 text-muted text-center">There are no events at this time.</p>
                        <p class="text-muted text-center">Please check again later.</p>
                    </div>
                    <div class="col-6">
                        <img class="img-fluid mx-auto d-block" src="/img/no_events.svg" />
                    </div>
                </div>
            @endif
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
