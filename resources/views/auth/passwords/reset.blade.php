@extends('layouts.auth')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card shadow border-0">
                    <div class="row align-items-stretch flex-lg-row flex-column-reverse">
                        <div class="col-lg-4 bg-primary rounded-left align-items-center d-flex zIndex-5 auth-left">
                            <div class="card-body text-white py-5">
                                <p class="font-weight-bold text-center text mb-5">
                                    Welcome to AVID
                                </p>
                                <p class="font-weight-light text-center mb-5">
                                    Enter a new password or use the button below to login to your account.
                                </p>
                                <div class="d-flex">
                                    <a href="/login"
                                       class="btn btn-outline-light mx-auto btn-block">
                                        Login
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
                                    Reset Password
                                </p>
                                <form method="POST" action="{{ route('password.update') }}">
                                    @csrf

                                    <input type="hidden" name="token" value="{{ $token }}">

                                    <div class="form-group">
                                        <label for="email">{{ __('E-Mail Address') }}</label>

                                        <input id="email"
                                               type="email"
                                               class="form-control @error('email') is-invalid @enderror"
                                               name="email"
                                               value="{{ $email ?? old('email') }}"
                                               required
                                               autocomplete="email"
                                               autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="password">{{ __('Password') }}</label>

                                        <input id="password"
                                               type="password"
                                               class="form-control @error('password') is-invalid @enderror"
                                               name="password"
                                               required
                                               autocomplete="new-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="password-confirm">{{ __('Confirm Password') }}</label>

                                        <input id="password-confirm"
                                               type="password"
                                               class="form-control"
                                               name="password_confirmation"
                                               required
                                               autocomplete="new-password">
                                    </div>

                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Reset Password') }}
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
