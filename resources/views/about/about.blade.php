@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('about.about_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Assessing Vegetation Impacts from Deer</h1>
                                    <p class="text-muted mb-4">A Rapid Assessment Method for Evaluating Deer Impacts to Forest Vegetation</p>
                                    <div class="row">
                                        <div class="col-8">
                                            <p>AVID is a project for <b>A</b>ssessing <b>V</b>egetation <b>I</b>mpacts from <b>D</b>eer. Project participants evaluate the impact of deer browsing by tagging and measuring tree seedlings and/or wildflowers. Users of the AVID method can measure the impacts of deer browsing on New York forests, and document this aspect of forest health. Participants will learn forest and woodland ecology, how to identify important spring wildflowers and tree species, and develop an eye for recognizing signs of deer impacts.</p>
                                        </div>
                                        <div class="col-4">
                                            <img class="img-fluid mb-1" src="/img/about-deer.jpg" />
                                            <p class="text-muted">Credit: Haliburton Forest</p>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>These guides describe the procedures to measure vegetation and quantify the impacts deer are having on woodland vegetation. These field methods can be used by volunteers, landowners, land managers, land trusts, foresters, and other natural resource professionals. Individuals will eventually use <b>AVID</b> via smart phone apps for either Apple or Android phones at Apple Store or Google Play Store, or by printing field data sheets and entering the data online at <a href="http://aviddeer.com/">aviddeer.com</a>.</p>
                                        <p>Field data is being collected by individuals and organizations across New York State, and submitted to a central database to track tree, shrub, and wildflower responses to deer browsing over time. Other states have begun to implement the AVID protocol. Knowledge of how deer impacts change through time will help guide deer management decisions at local and regional levels. Participants will document changes in forest plants on their own land, or land in their communities, and will learn:</p>
                                        <ul>
                                            <li>To identify important spring wildflower and tree species</li>
                                            <li>To recognize evidence of deer impacts based on the presence or absence of key wildflower, shrub, and tree indicator species</li>
                                        </ul>
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
@endsection
