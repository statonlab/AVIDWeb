@extends('layouts.guest')

@section('content')
    <div class="home-wrapper">
        <div class="home-inner">
            @include('components.navbar')

            <div class="home-content d-flex align-items-center">
                <div class="container">
                    <div class="row align-content-stretch">
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
                                        <a href="#" class="btn btn-block btn-primary">Go to Dashboard</a>
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
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex justify-content-center align-items-center mt-4">
                                <a href="#how-to-volunteer">
                                    <i class="icon ion-ios-arrow-down text-white" style="font-size: 2rem"></i>
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
                    <h4 class="text-center" id="how-to-volunteer">How to Volunteer</h4>

                    <p>
                        Step 1
                    </p>
                    <p>Step 2</p>
                    <p>
                        Step 3
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')

@endsection
