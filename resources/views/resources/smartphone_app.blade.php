@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('resources.resources_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">AVID Deer Phone App</h1>
                                    <p>As an alternative to paper data sheets, you can download the AVID Deer smartphone app from either the <a href="https://apps.apple.com/us/app/avid-deer/id1578311148">Apple App Store</a> for iPhone users, or the <a href="https://play.google.com/store/apps/details?id=com.aviddeer&hl=en_US&gl=US">Google Play Store</a> for Android users. Use the links prior, or search for 'AVID Deer'.</p>
                                    <p>Once you have downloaded the app, you can use it to record your data in the field. The app will automatically save your data to your phone, and you can upload it to the AVID Deer database when you have an internet connection.</p>
                                    <p>The app uses your account on the website to store data, so be sure to log into the app before going into the field where you may not have internet.</p>
                                    <div class="row justify-content-center p-2 mt-2">
                                        <img class="img-fluid" src="/img/phone-preview.png"/>
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
