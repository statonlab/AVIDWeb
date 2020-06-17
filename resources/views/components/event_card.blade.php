<div class="col-lg-4">
    <div class="mb-3 card position-relative">
        <img class="card-img-top"
             src="{{$event->image ? $event->image->url : '/img/placeholder.png'}}"/>
        <div class="card-body">
            <p class="font-weight-bold mb-1">{{$event->title}}</p>
            <p class="text-muted small mb-0">
                {{$event->event_start->isoFormat('MMM Do YYYY [at] H:mm') . " " . $event->timezone}}
            </p>
            <p class="text-muted small">{{$event->address}}</p>
            <span class="text-muted d-block text-overflow-ellipsis no-wrap" :title="{{$event->excerpt}}">
                {{$event->excerpt}}
            </span>
        </div>
        <div class="card-footer pt-0 d-flex px-2 pb-2 align-items-center">
            <a href="{{"/event/$event->id"}}" class="btn btn-link">
                Learn More
            </a>
        </div>
    </div>
</div>
