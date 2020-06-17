@extends('layouts.guest')

@section('content')
    @include('components.navbar')
    <div class="primary-content">
        <div class="container py-4">
            <div class="d-flex">
                <div class="row">
                    <div class="col-md-4">
                        @include('user_guides.guide_sidebar')
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-4">Method 1. Woody Seedling Method</h1>
                                <p>Spend 20 to 30 minutes walking the stand you plan to sample. This method focuses on identifying one to several common woody species in your stand and tracking seedling growth until seedlings grow beyond the reach of deer (5 feet tall). Look for areas with an abundance of woody seedlings, trees, or shrubs less than five feet tall, and ideally between 6 inches and 3 feet tall. In areas of very heavy deer impact there may not be seedlings 6 inches tall. In these heavily impacted areas, you can use shorter seedlings but plan to include some small exclosures (see next section) because annual re-measurement of unchanging stubby seedlings is useful but not as gratifying as documenting the effects of protection. Also, know that tags on short seedlings are easily buried by leaf litter and thus difficult to relocate.</p>
                                <p>When choosing the kind of tree or shrub to monitor, select species that allow you to measure at least 20 (but ideally 25-30) stems. If there are not enough seedlings in that height range, you may include individuals in the 3-4 foot height range as well. You should continue monitoring the individual seedlings you select until they reach 5 feet in height (the height at which deer will no longer affect their ability to grow into mature trees). If the number of seedlings of any one species drops below 20 before the 4-year monitoring period ends, you can add additional seedlings to tag and monitor. There are several reasons that seedlings may be added for sampling. For example, some may grow taller than the 5-foot limit, some may die, or tags may be lost.</p>
                                <p><b>Table 3.</b> Some generally lower-preference and higher-preference tree and shrub species in New York State</p>
                                <table class="table">
                                    <thead>
                                    <th>High Preference Species</th>
                                    <th>Low Preference Species</th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Red maple (<i>Acer rubrum</i>)</td>
                                        <td>American beech (<i>Fagus grandifolia</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Sugar maple (<i>Acer saccharum</i>)</td>
                                        <td>Hop hornbeam (<i>Ostraya virginiana</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>White ash (<i>Fraxinus americana</i>)</td>
                                        <td>Striped maple (<i>Acer pensylvanicum</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Aspen (<i>Populus spp.</i>)</td>
                                        <td>White pine (<i>Pinus strobus</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Oak (<i>Quercus spp.</i>)</td>
                                        <td>Red pine (<i>Pinus resinosa</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Basswood (<i>Tilia americana</i>)</td>
                                        <td>Spruce (<i>Picea spp.</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Eastern hemlock (<i>Tsuga canadensis</i>)</td>
                                        <td>American hornbeam (<i>Carpinus carolinensis</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Birch (<i>Betula spp.</i>)</td>
                                        <td>Black cherry (<i>Prunus serotina</i>)</td>
                                    </tr>
                                    <tr>
                                        <td>Maple-leaf viburnum (<i>Viburnum acerifolium</i>)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Witch-hobble (<i>Viburnum lantanoides</i>)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Red elderberry (<i>Sambucus racemosa</i>)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Blackberry and raspberry (<i>Rubus spp.</i>)</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <p>By tagging and monitoring one or more species with different browsing-preference levels (Table 3), you can learn a great deal about deer impacts in your woodland. If a variety of seedling species grow in your forest, and seedlings of species that deer prefer are able to grow past the reach of deer, then deer impacts are likely low. If only those species that deer do not prefer can grow, this may indicate that your forest is heavily affected by deer or has been historically heavily impacted. If you observe deer browsing on seedlings of preferred species, such as sugar maple, but not on American beech, which is less preferred, then deer impacts may be moderate. However, if deer are browsing on both preferred and non-preferred species (essentially any or all available woody seedlings), deer impacts likely are substantial.</p>
                                <p>Select seedlings of your target species (i.e., the species you choose to monitor) that are as tall as or taller than the approximate average height of that species in the plot. Try to locate your six plots so that each includes five or more individuals of your target species. You may need to create more than six plots to include 25-30 tagged seedlings. If possible, select at least two species to monitor - one species that is highly preferred by deer and one species that is less preferred by deer (Table 3).</p>
                                <p>Seedlings need to be vigorous and healthy. Select five or more seedlings in the plot, attach an individually numbered tag to each (Figure 5), and record their heights. Record height as “natural height”, <b>not extended height.</b> Measure straight up from the ground (at the base of the main stem) as if measured along a plumb-bob line from the ground to the highest point of woody growth and not the tip of the leaf. Seedlings should not be straightened for measurement. (Figure 6). For each tagged seedling, record the plot quadrant (ne, nw, se, sw), and the height to the nearest 0.5 inch.</p>
                                <div class="row">
                                    <div class="col-6">
                                        <img class="img-fluid mb-2" src="/img/woody-seedlings-2.jpeg"/>
                                        <p class="text-muted"><b>Figure 5.</b> Each seedling should be identified with an individually numbered tag.</p>
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid mb-2" src="/img/woody-seedlings-1.jpeg"/>
                                        <p class="text-muted"><b>Figure 6.</b> Proper measurement of a seedling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('components.footer')
@endsection
