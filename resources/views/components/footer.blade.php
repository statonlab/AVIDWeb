<div class="d-flex">
    <div class="footer-height w-100 bg-dark py-4">
        <div class="container px-4">
            <p class="font-weight-bold mb-2 text-white">Site Map</p>

            <div class="mb-1">
                <a class="text-white" href="/">
                    Home
                </a>
            </div>
            <div class="mb-1">
                <a class="text-white" href="/register">
                    Register
                </a>
            </div>
            <div class="mb-1 text-white">
                <a class="text-white" href="/login">
                    Login
                </a>
            </div>

            <div class="mb-4 text-white">
                <a class="text-white" href="/resources/data-sheets">
                    Resources
                </a>
            </div>

            <div class="row">
                <div class="col-lg-3">
                    <a href="https://www.cornell.edu/" >
                        <img class="img-fluid" src="/img/cornell_logo_white.svg" />
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="https://www.utk.edu/">
                        <img class="img-fluid" src="/img/ut3.png" />
                    </a>
                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="py-4 text-white">
                    <strong>Copyright &copy; {{ now()->year }}</strong>. All rights reserved.
                </div>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .card-img-top {
        object-fit: cover;
        width: 100%;
        height: 200px;
    }
</style>