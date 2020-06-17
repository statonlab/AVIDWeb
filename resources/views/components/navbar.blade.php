<nav class="navbar navbar-expand-lg{{ Route::is('home') ? ' navbar-dark' : ' navbar-light bg-white shadow-sm'}}">
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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('contact') ? ' active' : ''}}"
                       href="#"
                       id="contactDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        Contact Us
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="contactDropdown">
                        <a class="dropdown-item" href="/contact-form">Contact Form</a>
                        <a class="dropdown-item" href="/events">Events and Training</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('getting-started') ? ' active' : ''}}"
                       href="#"
                       id="guidesDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        User Guides
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="guidesDropdown">
                        <a class="dropdown-item" href="/user-guides/getting-started">Getting Started</a>
                        <a class="dropdown-item" href="/user-guides/spring-wildflowers">Spring Wildflowers</a>
                        <a class="dropdown-item" href="/user-guides/woody-seedlings">Woody Seedlings</a>
                        <a class="dropdown-item" href="/user-guides/exclosures">Exclosures</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('data-sheets') ? ' active' : ''}}"
                       href="#"
                       id="resourcesDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        Resources
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="resourcesDropdown">
                        <a class="dropdown-item" href="/resources/data-sheets">Data Sheets</a>
                        <a class="dropdown-item" href="/resources/identification">Identification</a>
                        <a class="dropdown-item" href="/resources/references">References</a>
                        <a class="dropdown-item" href="/resources/manual">Manual</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('selection') ? ' active' : ''}}"
                       href="#"
                       id="sitesDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        Site Selection
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="sitesDropdown">
                        <a class="dropdown-item" href="/site-preparation">Site Selection</a>
                        <a class="dropdown-item" href="/site-preparation/key">Key</a>
                        <a class="dropdown-item" href="/site-preparation/equipment">Equipment</a>
                        <a class="dropdown-item" href="/site-preparation/plots">Plots</a>
                        <a class="dropdown-item" href="/site-preparation/quadrants">Quadrants</a>
                        <a class="dropdown-item" href="/site-preparation/data">Data</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('impacts') ? ' active' : ''}}"
                       href="#"
                       id="impactsDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        Deer Impacts
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="impactsDropdown">
                        <a class="dropdown-item" href="/impacts">Deer Impacts</a>
                        <a class="dropdown-item" href="/impacts/conditions">Woodland Conditions</a>
                        <a class="dropdown-item" href="/impacts/symptoms">Signs and Symptoms</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font-weight-bold{{ Route::is('about') ? ' active' : ''}}"
                       href="#"
                       id="aboutDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        About Us
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="aboutDropdown">
                        <a class="dropdown-item" href="/about">About</a>
                        <a class="dropdown-item" href="/about/benefits">Benefits of Using AVID</a>
                        <a class="dropdown-item" href="/about/who">Who We Are</a>
                    </div>
                </li>
            </ul>
            @auth()
                <a href="/app" class="btn ml-1{{ Route::is('home') ? ' btn-outline-light' : ' btn-outline-primary'}}">Dashboard</a>
            @endauth()
            @guest()
                <a href="/login" class="btn ml-1{{ Route::is('home') ? ' btn-outline-light' : ' btn-outline-primary'}}">Login</a>
            @endguest
        </div>
    </div>
</nav>
