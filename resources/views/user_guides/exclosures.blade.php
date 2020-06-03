@extends('layouts.guest')

@section('content')
    @include('components.navbar')
    <div class="container py-4">
        <div class="row">
            <div class="col-md-4">
                @include('user_guides.guide_sidebar')
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h1 class="mb-4">Mini Deer Exclosures – Establishing a Baseline for Your Woodland</h1>
                        <div class="row">
                            <div class="col-7">
                                <p>Creating small deer exclosures in your woods can give an indication of what could possibly grow in your forest in the absence of deer browsing. By fencing a couple additional plots per stand, you will be able to see the potential wildflower, tree and shrub species that could be present. You can also observe the height of the seedlings and flowers inside versus outside the exclosures, as well as the wildflower flowering rates. Ideally, you should establish deer exclosures to complement measurements of species performance outside the exclosures and to assess how a particular species will perform in the absence of deer browse. By excluding deer from some areas in the same stand, you can make a direct comparison between what you might expect to see versus what you are seeing.</p>
                                <p>Small exclosures can be constructed from various fencing and pole materials and are fairly easy to erect (Figure 6). Garden posts and welded wire fencing, or even plastic deer fencing, can provide protection. Fences should be 4 to 5 feet high.</p>
                            </div>
                            <div class="col-5">
                                <img class="img-fluid mb-2" src="/img/exclosures.jpeg"/>
                                <p class="text-muted">Figure 7. Deer exclosures can help establish a baseline for what vegetation you might expect to grow in your woodland if deer browsing was not a factor. This exclosure shows seedling growth inside the fence versus outside. Seedlings inside are taller after just a year or two.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
