@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <form action="/contact" method="POST">
                                @csrf
                                <h1 class="mb-4">Contact Us</h1>
                                @if (isset($success) && $success === true)
                                    <div class="p-4 mb-4 alert-success">
                                        {{'Email sent successfully. We\'ll get back to you as soon as possible.'}}
                                    </div>
                                @elseif ($errors->has('recaptcha'))
                                    <div class="p-4 mb-4 alert-danger">
                                        {{ $errors->first('recaptcha') }}
                                    </div>
                                @endif
                                <div class="form-group">
                                    <label for="name">
                                        Name
                                        <required/>
                                    </label>
                                    <input type="text"
                                           class="form-control{{$errors->has('name') ? ' is-invalid' : ''}}"
                                           id="name"
                                           name="name"
                                           placeholder="Name"
                                           value="{{ old('name') }}">
                                    @if($errors->has('name'))
                                        <span class="form-text text-danger">
                                            {{ $errors->first('name') }}
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="email">
                                        Email
                                        <required/>
                                    </label>
                                    <input type="text"
                                           class="form-control{{$errors->has('email') ? ' is-invalid' : ''}}"
                                           id="email"
                                           name="email"
                                           placeholder="Email"
                                           value="{{ old('email') }}">
                                    @if($errors->has('email'))
                                        <span class="form-text text-danger">
                                            {{ $errors->first('email') }}
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="subject">
                                        Subject
                                        <required/>
                                    </label>
                                    <input type="text"
                                           class="form-control{{$errors->has('subject') ? ' is-invalid' : ''}}"
                                           id="subject"
                                           name="subject"
                                           placeholder="Subject"
                                           value="{{ old('subject') }}">
                                    @if($errors->has('subject'))
                                        <span class="form-text text-danger">
                                            {{ $errors->first('subject') }}
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea type="text"
                                              class="form-control{{$errors->has('message') ? ' is-invalid' : ''}}"
                                              name="message"
                                              id="message"
                                              placeholder="Message">{{ old('message') }}</textarea>
                                    @if($errors->has('message'))
                                        <span class="form-text text-danger">
                                            {{ $errors->first('message') }}
                                        </span>
                                    @endif
                                </div>

                                <button class="btn btn-primary" type="submit">
                                    Send
                                </button>

                                <input type="hidden" name="recaptcha" id="recaptcha">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
