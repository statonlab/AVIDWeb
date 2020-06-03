@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Site and Plot Selection and Setup</h1>
                        </div>
                        <div class="card-body">
                            <p>The property where you take measurements will be a woodland or forest site. The property could be your own land, public forest land, properties owned by a local land trust or other community-owned or private land. If you don't own the land, be sure to ask permission of the owner and explain the long-term nature of the monitoring project. Some public or private agencies, organizations, or individuals may welcome your involvement.</p>
                            <p>These assessment methods are intended to measure vegetative response to a change in deer browsing pressure, and an associated increase or a decrease in deer impacts. If the availability of sunlight or soil conditions limit plant growth, then the methods will not accurately detect changes in deer impact. Therefore, select a location that would allow a vegetation response when deer abundance changes.</p>
                            <h1 class="page-title mb-2">Selecting a Property</h1>
                            <p>At any property there will be a range of conditions among different areas. Think about the environmental differences you might expect in a steep-sided ravine with a dark hemlock canopy versus a mature hardwood woodland with scattered wind-thrown trees versus a recently harvested oak-pine forest. Light levels and soil conditions will be quite different. These areas of distinctly different conditions are called "stands." A forest stand is analogous to a farmer's field; and there are obvious difference between a corn field, pumpkin field, or pasture.</p>
                            <p>At the property you select, avoid areas (within a stand) that have any of these characteristics (see site selection illustration guide below):</p>
                            <ul>
                                <li>Permanent standing water such as wetlands although woodland around the wetland may be suitable</li>
                                <li>More than 65% cover of exposed rock</li>
                                <li>High densities of interfering plant species (ferns, grasses, invasive herbs, invasive shrubs, etc.)</li>
                                <li>Slope > 70%</li>
                                <li>Canopy > 50% closed, but some flexibility permitted (Wildflower method preferred under these conditions)</li>
                                <li>Subcanopy > 50% closed, but some flexibility permitted (Wildflower method preferred under these conditions)</li>
                            </ul>
                            <p>Sunlight is essential for plant growth. Although the methods may be implemented in forests with any amount of canopy closure (shading from overstory trees), a closed upper canopy or closed mid-story canopy prevents light from reaching the forest floor. Without adequate sunlight woody and herbaceous seedling growth is limited. Therefore, try to select stands for your measurements where on average less than half the sky is shaded by overstory trees when looking up. Remember, your perspective on the amount of sunlight is your view skyward from ground level.</p>
                            <p>Stands with recent timber harvests, even where much of the tree canopy has been removed, are acceptable. However, stands where broadcast herbicides have been used to control competing vegetation or that have been grazed should be avoided for a period of two years. If you are aware of a stand on your property where wildflowers are present or abundant and you plan to implement the spring wildflower element of the protocol, then choose that stand for sampling.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
