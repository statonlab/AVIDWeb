<div class="py-5 bg-white">
    <div class="container">
        <h2 class="text-center mb-5" id="how-to-volunteer">Upcoming Events</h2>
        @if($events->isNotEmpty())
            <div class="col-12">
                <div class="row">
                    @each('components.event_card', $events, 'event')
                </div>
                <div class="mt-2 text-right">
                    <a class="text-right btn btn-link" href="/events">
                        <span class="mr-2">See all events</span>
                        <ion-icon class="icon" name="chevron-forward-outline"></ion-icon>
                    </a>
                </div>
            </div>
        @else
            <h1 class="text-center text-muted">There are no upcoming events.</h1>
        @endif
    </div>
</div>