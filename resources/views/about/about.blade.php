@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="page-title mb-2">Assessing Vegetation Impacts from Deer</h1>
                            <p class="text-muted mb-0">A Rapid Assessment Method for Evaluating Deer Impacts to Forest Vegetation</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8">
                                    <p>AVID is a project to Assess Vegetation for Impacts from Deer. Plants are monitored each year to evaluate the impact of deer browsing. AVID is a method for volunteers, foresters, landowners and others to measure the effect of deer browse on New York forests. Volunteers are encouraged to use AVID to document this aspect of New York forest health. Participants will learn about forest and woodland ecology, how to identify spring wildflowers and trees, and develop an eye for recognizing signs of deer impacts.</p>
                                    <p>Individuals can use AVID by printing field data sheets and entering the data online here at this web site, or through a smart phone app available for either Apple or Android phones at Apple Store or Google Play Store. Field data collected by individuals and organizations across New York State, and submitted to this central database, will be used to track tree, shrub and wildflower response to deer browsing over time. Knowledge of how deer impacts change through time will help guide deer management decisions at local and state levels. Participants will document changes in forest plants on their own land, or land in their communities, and also will learn:</p>
                                    <ul>
                                        <li>To identify important spring wildflower and tree species</li>
                                        <li>To recognize evidence of deer impacts based on the presence or absence of key wildflower, shrub, and tree indicator species</li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid mb-1" src="/img/about-deer.jpg" />
                                    <p class="text-muted">Credit: Haliburton Forest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
