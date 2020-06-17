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
                                    <h1 class="mb-4">Selecting a Property</h1>
                                    <p>The property where you take measurements will be a woodland or forest site. The property could be your own land, public forest land, properties owned by a local land trust, or other community-owned or private land. If you don’t own the land, be sure to ask permission of the owner, and explain the long-term nature of the monitoring project. Some public or private agencies, organizations, or individuals may welcome your involvement.</p>
                                    <p>At any property there will be a range of conditions among different areas. Think about the environmental differences you might expect in a steep-sided ravine with a dark hemlock canopy, versus a mature hardwood woodland with scattered wind-thrown trees, versus a recently harvested oak-pine forest. Light levels and soil conditions will be quite different. These areas of distinctly different conditions are called “stands.” A forest stand is analogous to a farmer’s field; and there are obvious differences between a cornfield, pumpkin field, or pasture.</p>
                                    <p>At the property you select, <b>avoid areas</b> (stands) that have any of these characteristics (see site selection illustration guide below):</p>
                                    <ul>
                                        <li>Permanent standing water such as wetlands, although woodland around the wetland may be suitable</li>
                                        <li>More than 65% cover of exposed rock</li>
                                        <li>High densities of interfering plant species (ferns, grasses, invasive herbs, invasive shrubs, etc.)</li>
                                        <li>Slope greater than 70%</li>
                                        <li>Canopy > 50% closed, but some flexibility permitted (Wildflower method should be included if possible, under these conditions)</li>
                                        <li>Subcanopy > 50% closed, but some flexibility permitted (Wildflower method should be included if possible, under these conditions)</li>
                                    </ul>
                                    <p>Sunlight is essential for plant growth. Although both methods may be implemented in forests with any amount of canopy closure (shading from overstory trees), a closed upper canopy or closed mid-story canopy prevents light from reaching the forest floor. Without adequate sunlight, flower development and seedling height growth are limited. Therefore, try to select a stand for your measurements where, on average, less than half the sky is shaded by overstory trees when looking up. Remember, your perspective on the amount of sunlight is your view skyward from ground level.</p>
                                    <p>Stands with recent timber harvests, even where much of the tree canopy has been removed, are acceptable. However, stands where broadcast herbicides have been used to control competing vegetation, or that have been grazed, should be avoided for a period of two years to allow seedlings and wildflowers to re-emerge.</p>
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
