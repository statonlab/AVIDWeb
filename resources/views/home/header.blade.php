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
                                AVID is a project to Assess Vegetation for Impacts from Deer. Plants are monitored each
                                year to evaluate the impact of deer browsing. AVID is a method for volunteers,
                                foresters, landowners and others to measure the effect of deer browse on New York
                                forests. Volunteers are encouraged to use AVID to document this aspect of New York
                                forest health. Participants will learn about forest and woodland ecology, how to
                                identify spring wildflowers and trees, and develop an eye for recognizing signs of deer
                                impacts.
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

                                        @error('recaptcha')
                                        <div class="alert alert-danger" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                        @enderror

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

                                        <input type="hidden" name="recaptcha" id="recaptcha">

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
                        <div class="card border-0 shadow mt-3">
                            <div class="card-body">
                                <p class="text-center font-weight-bold">Phone app now available!</p>
                                <p>Search for "Avid Deer" in your phone's app store, or use the links below</p>
                                <a href="https://apps.apple.com/us/app/avid-deer/id1578311148" class="btn btn-block btn-primary">iOS App Store</a>
                                <a href="https://play.google.com/store/apps/details?id=com.aviddeer&hl=en_US&gl=US" class="btn btn-block btn-primary">Google Play Store</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
