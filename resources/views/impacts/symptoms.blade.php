@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="d-flex">
                <div class="row">
                    <div class="col-md-4">
                        @include('impacts.impacts_sidebar')
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-1">Signs and Symptoms of Deer Impacts</h1>
                                <p class="text-muted mb-4">When deer are having a substantial impact on the forest, recognizable signs can be detected by the trained eye.</p>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>Very high impact –</b> A park-like understory with little vegetation growing in the shrub or understory layers. Browsing of any or all palatable plants that begin to grow can eliminate vegetation from the forest floor.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-1.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>Very high impact –</b> An understory dominated by invasive shrubs such as barberry, multiflora rose, honeysuckle, or others. Invasive species can colonize and dominate when deer reduce or remove much of the native vegetation.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-2.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>High impact –</b> An understory dominated by deer-resistant ferns. Ferns can dominate when other plants are removed through browsing. Once established, thick stands of fern shade the forest floor and can prevent seedlings from receiving sunlight necessary for growth.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-3.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>High impact –</b> An understory dominated by native tree species less preferred by deer than other species in the forest. Examples include trees such as hop hornbeam, striped maple, and American beech. Deer browse other species, like sugar maple, ash and oaks, which allows the less preferred species to become established. American beech sprouts profusely when infected with beech bark disease and can block sunlight from reaching the forest floor. Once established, this condition can persist for decades.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-4.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>High impact –</b> A “browse line”, a visual line created by a lack of vegetation growing at a height of 5-6 feet, indicates deer have eaten everything growing within their reach.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-5.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>Moderate impact –</b> Obvious signs of deer browsing to seedlings or understory plants can indicate deer impacts. Browsing on species not typically preferred by deer may indicate moderate deer impacts, as species that are more palatable will be eaten first.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-6.jpeg" />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-lg-6">
                                        <p><b>Low impact –</b> Wildflower species highly preferred by deer are present in the forest, reach greater heights, and flower, or when preferred tree seedlings are able to grow beyond the reach of deer (5-6 feet).</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-lg-6 pr-0">
                                                <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-7.jpeg" />
                                            </div>
                                            <div class="col-lg-6 pl-0">
                                                <img class="img-fluid" style="object-fit: cover; width: 100%; height: 250px;" src="/img/symptoms-8.jpeg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
