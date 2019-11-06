<nav class="navbar navbar-expand-lg{{ Route::is('home') ? ' navbar-dark' : ' navbar-light navbar-home'}}">
    <div class="container">
        <a class="navbar-brand" href="/">AVID</a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link font-weight-bold" href="#">User Guides</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="#">Resources</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="#">About Us</a>
                </li>
                @auth()
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle font-weight-bold"
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false">
                            Account
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/app/data">My Data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" id="logout-btn">Logout</a>
                            <form action="/logout" method="post" id="logout-form">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endauth()
            </ul>
            @auth()
                <a href="/app" class="btn btn-outline-light ml-1">Dashboard</a>
            @endauth()
            @guest()
                <a href="/register" class="btn btn-outline-light ml-1">Register</a>
            @endguest
        </div>
    </div>
</nav>
