@extends('layouts.guest')

@section('content')
    @include('components.navbar')
    <div class="primary-content">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-4">
                    @include('user_guides.guide_sidebar')
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="mb-4">Mini Deer Exclosures – Establishing a Baseline for Your Woodland</h1>
                            <p>Creating small deer exclosures in your woods can give an indication of what could possibly grow in your forest in the absence of deer browsing. By fencing a couple additional plots per stand, you will be able to see the potential wildflower, tree, and shrub species that could be present. You can also observe the height of the seedlings and flowers inside versus outside the exclosures, as well as the wildflower flowering rates.</p>
                            <p>Ideally, you should establish deer exclosures to complement measurements of species performance outside the exclosures, and to assess how a particular species will perform in the absence of deer browsing. By excluding deer from some areas in the same stand, you can make a direct comparison between what you might expect to see versus what you are seeing.</p>
                            <p>Small exclosures can be constructed from various fencing and pole materials and are easy to erect (Figure 9). Garden posts and welded-wire fencing, or even deer netting and bamboo poles with the wire affixed by zip ties, can provide protection. Small fenced areas should be 4 to 5 feet high.</p>
                            <div class="row mb-2">
                                <div class="col-lg-6">
                                    <img class="img-fluid img-fit" src="/img/exclosures-1.jpg"/>
                                </div>
                                <div class="col-lg-6">
                                    <img class="img-fluid img-fit" src="/img/exclosures-2.jpg" />
                                </div>
                            </div>
                            <p class="text-muted"><b>Figure 9.</b> Deer exclosures can help establish a baseline for what vegetation you might expect to grow in your woodland if deer browsing was not a factor. The picture on the left shows a simple exclosure in a clover field. The picture on the right illustrates another simple design around a single AVID plot within the forest.</p>
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
    @include('components.footer')
@endsection
