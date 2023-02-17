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
                                    <p>A smart phone application (“app”) is freely available through the <a href="https://apps.apple.com/us/app/avid-deer/id1578311148">Apple App Store</a> or the <a href="https://play.google.com/store/apps/details?id=com.aviddeer&hl=en_US&gl=US">Google Play Store</a> to collect and submit your data. The app needs to be downloaded before going into the field and activated where a cell signal exists. The app will store the data and automatically upload the data to a central computer server when a signal is available. Real-time comparison to other data is possible via the app. If you do not have a smart phone, or would prefer not to use the app, paper data sheets (Appendix A) are also available. If you use paper data sheets, please submit the data you collect to our online database at <a href="https://www.aviddeer.com/">aviddeer.com</a>. The web site will also allow you to visualize your data and compare your results to others in your area.</p>
                                    <strong>Site Description</strong>
                                    <p>A site data sheet should be completed the first year you sample, and includes general information about site location, ownership, conditions, common species, and a basic map. Much of the information on the site data sheet is required to be able to enter your data into the web site. Unless conditions (ownership, most common species, average basal area, or average tree diameter) change, a new site data sheet does not need to be completed in future years of monitoring.</p>
                                    <strong>Plot Description</strong>
                                    <p>Use the data sheets (Appendix A), or phone app to collect information describing each plot. Each plot form can be used for four consecutive years unless the recorder(s), percent canopy/subcanopy/shrub cover, or exclusion from deer via fencing changes. In such cases, you should complete a new plot form to reflect these important differences or mark the changes on the original form with the appropriate date. The plot-specific information will allow for comparisons among plots and locations that vary in the growing conditions for plants. The plot description documents factors that influence the potential for plant growth. Because excessively rocky or wet soils are not sampled, only data on canopy cover, which impacts sunlight, needs to be recorded. The extent of cover is reported at each of three levels or layers, including:</p>
                                    <ul>
                                        <li>Canopy (the tallest layer, but usually > 30 ft tall)</li>
                                        <li>Subcanopy (midstory) (the layer below the overstory, but usually 8 ft to 29 ft tall)</li>
                                        <li>Ground/shrub layer (the layer closest to the ground, but usually < 8 ft tall)</li>
                                    </ul>
                                    <p>Details and pictures of canopy closure for each layer were provided previously. Some stands will have plants that occupy all three layers or levels, and in other cases one or more of the layers may be absent from the forest.</p>
                                    <p>Some native and non-native species can be problematic. They may form subcanopy or ground layer cover that is inhospitable to wildflower and woody seedling establishment and growth. Some of these species establish dense monocultures, and in doing so, prevent light from reaching the forest floor. Other species form dense mats of roots that prevent plants from becoming established. These monocultures may persist indefinitely without action to remove them, and reduce the potential for other flowers, shrubs, and trees to grow. Examples include some native ferns, grasses and sedges, rhododendron (<i>Rhododendron spp.</i>), mountain laurel (<i>Kalmia latifolia</i>), blueberry (<i>Vaccinium spp.</i>), American beech, hop hornbeam, and others. Many exotic invasive plants may also become established and persist in this way, including Japanese stiltgrass (<i>Microstegium vimineum</i>), barberry (<i>Berberis spp.</i>), honeysuckle (<i>Lonicera spp.</i>), mutiflora rose (<i>Rosa multiflora</i>), buckthorn (<i>Rhamnus cathartica</i>), tree-of-heaven (<i>Ailanthus altissima</i>), swallowwort (<i>Vincetoxicum spp.</i>), oriental bittersweet (<i>Celastrus orbiculatus</i>) and others. To assess the degree to which interfering vegetation is preventing regeneration now and into the future, please complete the approximate percent cover provided on the datasheet (Appendix A) for each layer where competing vegetation exists. If you know the name(s) of the species present, please list them in the comments section. If you are uncertain of the species name, you can take a picture and upload it to our web site for identification.</p>
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
