@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Method 2. Woody Seedling Heights</h1>
                        </div>
                        <div class="card-body">
                            <p>Spend 20 to 30 minutes walking the stand you plan to sample. This method focuses on identifying one to several common woody species in your stand and tracking seedling growth until seedlings grow beyond the reach of deer (five feet tall). Look for areas with an abundance of woody seedlings, trees or shrubs, less than five feet tall, and ideally between six inches and three feet tall. When choosing the kind of tree or shrub to monitor, select species that allow you to measure at least 20 (but ideally 30-50) stems. If there are not enough seedlings in that height range, you may include individuals in the 3-4 foot height range as well. You should continue monitoring the individual seedlings you select until they reach 5 feet in height (the height at which deer will no longer affect their ability to grow into mature trees). Once the number of seedlings of a given species drops below 20 because of height growth beyond 5 feet, you should select new stems or establish new plots containing that species to continue monitoring.</p>
                            <p>By measuring one or more species of differing browse preference levels (Table 3) you can learn a great deal about deer impacts in your woodland. If seedlings of a variety of species and preference levels are growing in your forest and are able to grow past the reach of deer, then deer impacts are likely low. If you have only species which are not preferred by deer, this may indicate that your forest is heavily browsed by deer, or has been historically. If you observe deer browsing on seedlings of preferred species, such as sugar maple, but not on American beech, which is less preferred, then deer impacts may be moderate. However, if deer are browsing on both preferred and non-preferred species (essentially any or all available woody seedlings) then deer impacts likely are substantial.</p>
                            <p>To quantify these impacts, select seedlings of the target species that are as tall as or taller than the approximate average height of that species in that plot. Try to locate your six plots so that each includes 5 or more individuals of your target species in each plot. If possible, select at least two species to monitor - 1 species that is highly preferred by deer and 1 species that is less preferred by deer (Table 3).</p>
                            <p>Seedlings need to be vigorous and healthy. The height of 5 or more seedlings in the plot will be recorded and each seedling will be identified with an individually numbered tag. Record the height as “natural height” not extended height, measure straight up from the ground (at the base of the stem main stem) as if measured along a plumb-bob line from the ground to the highest location on a twig (not the tip of a leaf) (Figure 6). Attempt to distribute 2 or 3 seedlings in each quadrant, ideally with some seedlings located close to the center of the plot and others close to the edge of the plot. Record the quadrant and the height, to the nearest 0.5 inch, for each tagged seedling. Additional species can be tagged and measured within a plot if there are at least 5 stems. Additional species can be included, and some participants may choose to monitor several species. Typically one plot will have one or two species that are tagged and measured. You will establish 6 to 10 plots, each with a 6-ft radius. If you plan to implement both the Wildflower method and the Woody Seedling method, the same plots can be used for both provided that an adequate number of seedlings and wildflowers of your target species are present. Otherwise, additional plots should be established as needed.</p>
                            <p>Plots can be clustered or dispersed. Tags may be obtained from <a href="https://www.forestry-suppliers.com/index1.php">www.forestry-suppliers.com</a> (“utility slip on tags” item #79186) or other vendors. You may request tags from Cornell University Department of Natural Resources at <a href="mailto:kls20@cornell.edu">kls20@cornell.edu</a>.</p>
                            <p>In some stands, deer pressure will have been sufficiently severe that a 6-foot radius plot will not include a sufficient number of stems. In these circumstances, increase the number of plots until you have sufficient numbers of stems.</p>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
