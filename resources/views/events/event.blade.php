@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="mb-4">
                <a href="/events" class="d-flex align-items-center">
                    <ion-icon class="icon" name="arrow-back-outline"></ion-icon>
                    <span class="ml-2">Events</span>
                </a>
            </div>
            <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-8">
                    <div class="card">
                        @if ($event->image)
                            <img class="img-fluid img-fit" src="{{$event->image->url}}"/>
                        @endif
                        <div class="card-body">
                            <h1 class="mb-2">{{$event->title}}</h1>
                            <p>{!! $event->description !!}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="pb-2">
                                <strong>Event Information</strong>
                            </div>
                            <dl class="mb-0">
                                <dt>Start Time</dt>
                                <dd class="text-muted">
                                    {{$event->event_start->isoFormat('MMM Do, YYYY [at] H:mm') . " " . $event->timezone}}
                                </dd>

                                <dt>End Time</dt>
                                <dd class="text-muted">
                                    {{$event->event_end ? $event->event_end->isoFormat('MMM Do, YYYY [at] H:mm') . " " . $event->timezone : 'Not provided'}}
                                </dd>

                                <dt>Event Type</dt>
                                <dd class="text-muted">{{$event->event_type}}</dd>

                                <dt>Address</dt>
                                <dd class="text-muted">
                                    {{$event->address ?? 'Not provided'}}
                                </dd>

                                <dt>Contact Info</dt>
                                <dd class="text-muted">
                                    {{$event->contact_info ?? 'Not provided'}}
                                </dd>
                            </dl>
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
            height: 400px;
        }
    </style>
@endsection
