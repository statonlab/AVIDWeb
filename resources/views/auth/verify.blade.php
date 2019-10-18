@extends('layouts.auth')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card shadow border-0">
                    <div class="row align-items-stretch flex-lg-row flex-column-reverse">
                        <div class="col-lg-4 bg-primary rounded-left align-items-center d-flex zIndex-5 auth-left">
                            <div class="card-body text-white py-5">
                                <p class="font-weight-bold text-center text">
                                    Welcome to AVID
                                </p>
                            </div>
                            <div class="auth-bg-eclipse">
                                <div class="auth-eclipse"></div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card-body py-5">
                                <p class=" font-weight-bold text-center">
                                    Verify your email address
                                </p>
                                @if (session('resent'))
                                    <div class="alert alert-success" role="alert">
                                        {{ __('A fresh verification link has been sent to your email address.') }}
                                    </div>
                                @endif

                                {{ __('Before proceeding, please check your email for a verification link.') }}
                                {{ __('If you did not receive the email') }},
                                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                                    @csrf
                                    <button type="submit"
                                            class="btn btn-link p-0 m-0 align-baseline">{{ __('click here to request another') }}</button>
                                    .
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card border-0 shadow">
                    <div class="card-header border-0">{{ __('Verify Your Email Address') }}</div>

                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
