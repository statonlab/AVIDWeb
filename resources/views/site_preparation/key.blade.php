@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('site_preparation.site_preparation_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Key to Aid in Site Selection</h1>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <strong>Slope</strong>
                                            <p class="mb-0 ml-4">Is slope > 70%? This is not a suitable site</p>
                                            <p class="ml-4">Is slope < 70%? This is a suitable site</p>
                                            <strong>Rock cover</strong>
                                            <p class="mb-0 ml-4">Is the site >65% covered by exposed rock? This is not a suitable site</p>
                                            <p class="ml-4">Is the site <65% covered by exposed rock? This is a suitable site</p>
                                            <strong>Canopy closure</strong>
                                            <p class="ml-4">Do the overstory trees at this site block your view of more than 50% of the sky when looking up in most locations? If yes, then all methods could be implemented at this site, however shading from the tree canopy will limit seedling growth and dampen seedling height growth response to changes in deer browsing. Focus on spring wildflower methods in this site if possible.</p>
                                        </div>
                                        <div class="col-lg-4">
                                            <img class="img-fluid" src="/img/key-1.png" />
                                            <p class="text-muted">This drawing depicts a slope of 70%. Any slope steeper than this would not be an appropriate site.</p>
                                        </div>
                                        <div class="col-12">
                                            <p class="ml-4">Are there openings between the overstory trees that allow you to see more than half of the sky when looking up in most locations? If so, you can implement any or all methods at this site.</p>
                                            <p class="ml-4">The pictures below can help you decide how closed the canopy is at potential locations and can help you check the correct canopy percentage on your form(s).</p>
                                            <div class="row">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-2.jpeg" />
                                                    <p class="text-muted">0-10% canopy closure</p>
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-3.jpeg" />
                                                    <p class="text-muted">10-20% canopy closure</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-4.jpeg" />
                                                    <p class="text-muted">20-30% canopy closure</p>
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-5.jpeg" />
                                                    <p class="text-muted">30-40% canopy closure</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-6.jpeg" />
                                                    <p class="text-muted">40-50% canopy closure</p>
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-7.jpeg" />
                                                    <p class="text-muted">50-60% canopy closure</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-8.jpeg" />
                                                    <p class="text-muted">60-70% canopy closure</p>
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-9.jpeg" />
                                                    <p class="text-muted">70-80% canopy closure</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-10.jpeg" />
                                                    <p class="text-muted">80-90% canopy closure</p>
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-11.jpeg" />
                                                    <p class="text-muted">90-100% canopy closure</p>
                                                </div>
                                            </div>
                                            <strong>Understory canopy closure</strong>
                                            <p class="ml-4">Is there dense subcanopy of trees or shrubs below the main canopy that blocks sunlight from over half of the sky? If yes, shading will limit seedling growth. Focus on spring wildflower methods at this site if possible.</p>
                                            <div class="row mb-2">
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-12.jpeg" />
                                                </div>
                                                <div class="col-6 px-4">
                                                    <img class="img-fluid img-expand" src="/img/key-13.jpeg" />
                                                </div>
                                            </div>
                                            <p class="text-muted ml-4">Pictures showing dense cover of American beech (left) and barberry (right) in the subcanopy and shrub layers of the forest. In these stands, the wildflower method is most likely to detect a vegetation response to changes in browsing impacts.</p>
                                            <p class="ml-4">Are there openings between the understory trees and shrubs that allow sunlight to reach more than half of the forest floor in most locations? If yes, you can implement any or all methods at this site.</p>
                                            <strong>Fern, grass, sedge and invasive herb cover</strong>
                                            <p class="ml-4">Do ferns, grasses, sedges, or invasive herbs cover significant amounts of ground within the stand? Wildflowers that occur within fern patches can be measured. Only select woody seedlings if they are taller than the fern patch.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.footer')
    </div>

    <style>
        .img-expand {
            object-fit: cover;
            width: 100%;
        }
    </style>
@endsection
