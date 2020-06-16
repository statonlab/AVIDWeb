@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="d-flex">
                <div class="row">
                    <div class="col-md-4">
                        @include('about.about_sidebar')
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-4">Benefits of Using AVID</h1>
                                <p>Landowners, land managers, hunters, and others are increasingly interested in knowing how deer populations are changing through time and the impacts deer are having on woodland plants. However, reliably measuring the number of deer in a given area is difficult and time-consuming. The number of deer seen or harvested during the hunting season depends on many different factors, including weather and local food sources, and may not provide an accurate assessment of changes in deer abundance. In addition, no “one size fits all” optimum deer density exists for all areas. The “right” number of deer a given forest can support without substantial damage varies depending upon many factors including soil quality, soil moisture, the amount of other foods available for deer, and others. These factors may change between stands within a forest. Monitoring deer impacts by measuring the success or failure of indicator plants is a good way to know if the number of deer is in balance with the available habitat in a given woods, and if that balance is changing over time.</p>
                                <p>Data collected on lands in New York State can be used by New York State Department of Environmental Conservation staff to track the health and status of forest lands over time, and aid in deer management decision-making. For individual property owners or managers, the project will allow convenient storage and viewing of data collected on a given property over time. Landowners and managers from other states also are welcome to use the web site and phone apps. The long-term goal is to maintain healthy and diverse forests for future generations. Each woodland owner can make his or her contributions to the sustainability of Northeastern forests and important wildlife habitat.</p>
                                <p>In addition to AVID, a number of other methods currently are being used for deer impact assessment (e.g. Blossey et al. 2019, Waller et al. 2017, Rawinski 2016). AVID is particularly useful to support citizen science efforts intended to document the extent of browsing across broad geographic areas. AVID documents a rapid vegetative response when other growth factors (e.g., sunlight) are sufficiently abundant. AVID is simple to accurately apply. The method requires minimal training, minimal supplies that are readily available, provides unambiguous data, and is designed to be statistically robust. AVID allows for assessment of population changes, such as drought-induced mortality, not possible by other methods. Because AVID uses existing and naturally occurring plants, it assesses deer impacts that are happening on-the-ground with existing vegetation and not biased by the introduction of a potentially novel species. However, because AVID uses existing naturally occurring plants, its use is limited in areas of very high deer impact, or for assessing the interaction of plant palatability, species diversity and deer browse impact (Blossey et al. 2019). Further, AVID does not implicitly document vegetation response as a function of browsing, though that option exists (Waller et al. 2017).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
