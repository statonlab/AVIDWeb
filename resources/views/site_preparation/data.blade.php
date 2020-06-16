@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('site_preparation.site_preparation_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Collecting Data</h1>
                                    <strong>Site Description</strong>
                                    <p>A site description data sheet is provided (see resources link above). The site data sheet should be completed the first year you collect data, and allows you to document general site information, location data, etc. The site description data form does not have to be filled out again unless conditions change. Use the plot-level data sheets to collect information on variables that describe the plot. These data will allow for analysis and interpretation among plots and locations that vary in the growing conditions for plants.</p>
                                    <strong>Plot Description</strong>
                                    <p>Use the plot-level data sheets (see resources link above) to collect information on variables that describe the plot. The same plot form can be used for 4 consecutive years unless the data recorders, the % canopy, subcanopy, or shrub cover, or exclusion from deer changes. In this case, a new form should be completed. These data will allow for analysis and interpretation among plots and locations that vary in the growing conditions for plants. The plot description variables document factors that influence the potential for plant growth. Because excessively rocky or wet soils are not sampled, only data on sunlight needs to be recorded. The extent of openness is reported at each of three levels or strata. The extent of canopy openness is reported for the following strata or levels:</p>
                                    <ul>
                                        <li>Canopy (the tallest layer, but usually > 30 ft tall)</li>
                                        <li>Subcanopy (midstory) (the layer below the overstory, but usually 8 ft to 29 ft tall)</li>
                                        <li>Ground/shrub layer (the layer closest to the ground, but usually < 8 ft tall)</li>
                                    </ul>
                                    <p>Some native and non-native species can be problematic. They may form subcanopy or ground layer cover that is inhospitable to wildflowers and woody seedlings. Some establish dense monocultures and in doing so prevent light from reaching the forest floor. Other species form dense mats of roots that prevent plants from becoming established. These monocultures may persist indefinitely without management and reduce the potential for other flowers, shrubs and trees to grow. Examples include some native ferns, grasses and sedges, rhododendron (Rhododendron spp.), mountain laurel (Kalmia latifolia), blueberry (Vaccinium spp.), American beech, hop hornbeam, briars, and others. Many exotic invasive plants may also become established and persist in this way, including Japanese stiltgrass (Microstegium vimineum), barberry (Berberis spp.), honeysuckle (Lonicera spp.), mutiflora rose (Rosa multiflora), buckthorn (Rhamnus cathartica), tree-of-heaven (Ailanthus altissima), swallowwort (Vincetoxicum spp.), oriental bittersweet (Celastrus orbiculatus) and others. Filling in the percent cover for each vegetation strata will help you to assess the degree to which interfering vegetation is preventing wildflower and seedling regeneration in your plots now and into the future. If you know the name(s) of the species present, please list them in the comments section. If you are uncertain of the species name, you can take a picture and upload it using the app for identification.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.footer')
    </div>
@endsection
