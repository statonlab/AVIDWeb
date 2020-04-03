@extends('layouts.auth')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="mb-4 ml-n3">
                    <a href="/" class="btn btn-link">
                        <ion-icon class="icon" name="arrow-back"></ion-icon>
                        <span>
                            Home
                        </span>
                    </a>
                </div>
                <div class="card shadow border-0">
                    <div class="row align-items-stretch flex-lg-row flex-column-reverse">
                        <div class="col-lg-4 bg-primary rounded-left align-items-center d-flex zIndex-5 auth-left">
                            <div class="card-body text-white py-5">
                                <p class="font-weight-bold text-center text mb-5">
                                    Welcome to AVID
                                </p>
                                <p class="font-weight-light text-center mb-5">
                                    Login using the form to the right or register a new account
                                    by clicking the button below.
                                </p>
                                <div class="d-flex">
                                    <a
                                            href="/register"
                                            class="btn btn-outline-light btn-block">
                                        Create Account
                                    </a>
                                </div>
                            </div>
                            <div class="auth-bg-eclipse">
                                <div class="auth-eclipse"></div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card-body py-5">
                                <p class=" font-weight-bold text-center">
                                    Login
                                </p>
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf

                                    <div class="form-group">
                                        <label for="email">{{ __('E-Mail Address') }}</label>

                                        <input id="email"
                                               type="email"
                                               class="form-control @error('email') is-invalid @enderror"
                                               name="email"
                                               value="{{ old('email') }}"
                                               required
                                               placeholder="E-Mail Address"
                                               autocomplete="email"
                                               autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="password" class="mb-0">{{ __('Password') }}</label>

                                            @if (Route::has('password.request'))
                                                <a class="btn btn-link text-case-normal mb-1" tabindex="-1" href="{{ route('password.request') }}">
                                                    {{ __('Forgot Your Password?') }}
                                                </a>
                                            @endif
                                        </div>

                                        <input id="password"
                                               type="password"
                                               class="form-control @error('password') is-invalid @enderror"
                                               name="password"
                                               placeholder="Password"
                                               required
                                               autocomplete="current-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input"
                                                   type="checkbox"
                                                   name="remember"
                                                   id="remember" {{ old('remember') ? 'checked' : '' }}>

                                            <label class="form-check-label" for="remember">
                                                {{ __('Remember Me') }}
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Login') }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
