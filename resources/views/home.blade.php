@extends('layouts.guest')

@section('content')
    <div class="home-wrapper">
        <div class="home-inner">
            @include('components.navbar')

            <div class="home-content d-flex align-items-center">
                <div class="container">
                    <div class="row align-content-stretch py-4">
                        <div class="col-lg-8 d-flex flex-column justify-content-center">
                            <div class="pr-lg-5 mb-4 mb-lg-0">
                                <h3 class="text-uppercase text-white">Welcome to AVID</h3>
                                <p class="mb-0 lead text-white text-justify">
                                    AVID is a project to Assess Vegetation for Impacts from Deer. Plants are monitored each year to evaluate the impact of deer browsing. AVID is a method for volunteers, foresters, landowners and others to measure the effect of deer browse on New York forests. Volunteers are encouraged to use AVID to document this aspect of New York forest health. Participants will learn about forest and woodland ecology, how to identify spring wildflowers and trees, and develop an eye for recognizing signs of deer impacts.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card border-0 shadow">
                                @auth()
                                    <div class="card-body">
                                        <p class="text-center font-weight-bold">Hello {{auth()->user()->name}}</p>
                                        <p>Use the button to below to access your dashboard</p>
                                        <a href="/app" class="btn btn-block btn-primary">Go to Dashboard</a>
                                    </div>
                                @endauth()
                                @guest()
                                    <div class="card-body">
                                        <p class="text-center font-weight-bold">Create an Account</p>

                                        <form action="{{ route('register') }}" method="post">
                                            @csrf

                                            <div class="form-group">
                                                <input type="text"
                                                       class="form-control @error('name') is-invalid @enderror"
                                                       placeholder="Name"
                                                       name="name"
                                                       autocomplete="name"
                                                       required
                                                       value="{{old('name')}}">
                                                @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                <input type="email"
                                                       class="form-control @error('email') is-invalid @enderror"
                                                       placeholder="Email Address"
                                                       required
                                                       autocomplete="email"
                                                       value="{{old('email')}}"
                                                       name="email">
                                                @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                <input type="password"
                                                       class="form-control @error('password') is-invalid @enderror"
                                                       placeholder="Password"
                                                       required
                                                       name="password">
                                                @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                <input type="password"
                                                       class="form-control"
                                                       required
                                                       placeholder="Repeat Password"
                                                       name="password_confirmation">
                                            </div>

                                            <div class="form-group">
                                                <button type="submit"
                                                        class="btn btn-primary btn-block">
                                                    Register
                                                </button>
                                            </div>

                                            <p class="mb-0 text-center">
                                                Already registered? <a href="/login">Login</a>
                                            </p>
                                        </form>
                                    </div>
                                @endguest
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <div class="d-flex justify-content-center align-items-center mt-5">
                                <a href="#how-to-volunteer">
                                    <ion-icon class="icon text-white" name="arrow-down" style="font-size: 2rem"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="text-center mb-4" id="how-to-volunteer">How to Volunteer</h4>
                            <div class="mb-2">
                                <strong>What You Will Do</strong>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <ul class="mb-4">
                                        <li>Collect data in your woods or land in your community and enter it here to track tree, shrub and wildflower response to deer browsing over time.</li>
                                        <li>Learn to identify important spring wildflower and tree species</li>
                                        <li>Learn to recognize evidence of deer impacts based on the presence or absence of key wildflower, shrub, and tree indicator species</li>
                                        <li>Contribute to a statewide database to document how deer impacts are changing through time. These data can help guide deer management decisions at local and state levels.</li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid mb-0" src="/img/about-deer.jpg" />
                                    <p class="text-muted text-right">Credit: Haliburton Forest</p>
                                </div>
                            </div>
                            <div class="mb-2">
                                <strong>How To Get Started</strong>
                            </div>
                            <p class="mb-2">
                                <b>Step 1:</b> <a href="/register">Register</a> and create an account. (This registration will allow you to enter and access your data online)
                            </p>
                            <p class="mb-1">
                                <b>Step 2:</b> Learn about the methods you will use in one of the following ways:
                            </p>
                            <ul class="mb-2">
                                <li>Visit the <a href="/resources/manual">Resources</a> tab at the top of the page and download the AVID manual. The manual can be printed and you can read it at your leisure or take it into the field with you. Data sheets are included at the end of the manual.</li>
                                <li>Read through the <a href="/site-preparation">Site Preparation</a> and <a href="/user-guides/getting-started">User Guides</a> tabs here at the web site. All of the information in the manual is also present here. You can then print the data sheets you will need by clicking on the <a href="/resources/data-sheets">Resources</a> tab and downloading the data sheets.</li>
                                <li>View <a href="https://www.youtube.com/watch?v=nsNXNos27IM">this recorded presentation</a> about using the AVID method, then download the data sheets through the <a href="/resources/data-sheets">Resources</a> tab.</li>
                                <li>Attend an AVID training</li>
                            </ul>
                            <p class="mb-2">
                                <b>Step 3:</b> Collect your data and enter it via the dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')

@endsection
