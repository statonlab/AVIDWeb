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
                                <h1 class="mb-4">The Effect of Deer on Forest Health and Forests of the Future</h1>
                                <p>White-tailed deer (<i>Odocoileus virginianus</i>) can significantly influence forests. Deer impact their habitat, the habitat resources available to other species, and the forest ecosystem overall. Low-intensity browsing can potentially have positive effects by thinning a dense understory and fostering species diversity. However, in many areas, deer browsing has become intensive. Deer browse selectively, and they impact some species more than others. Through selective and intensive browsing, deer affect the kinds and numbers of plants present in an area, impair the growth of new trees, and shape the overall look or structure of the forest, both present and future. The changes brought about by deer can affect the quality of the forest and reduce available food and habitat for other wildlife species. The abundance and number of different types of songbirds, for example, is lower in forests heavily browsed by deer.</p>
                                <p>As selective browsers, deer prefer to eat certain plant species more than other less desirable species. Many of the tree species deer prefer to consume are both valued for timber, and as food-producing trees for wildlife (e.g., oak (<i>Quercus spp.</i>), maple (<i>Acer spp.</i>)). Deer also eat many wildflower and understory plants such as trillium (<i>Trillium spp.</i>), Canada mayflower (<i>Maianthemum canadense</i>), and lady slippers (<i>Cypripedium spp.</i>), but tend to avoid eating less palatable species such as hay-scented fern (<i>Dennstaedtia punctilobula</i>) and essentially all invasive plant species (e.g., garlic mustard (<i>Alliaria petiolata</i>), barberry (<i>Berberis spp.</i>). By preferentially eating some species and leaving others behind, deer will reduce the native biodiversity of a forest. Selective browsing is a negative force on the species deer prefer, and a positive force on the less palatable species. When the variety of species in the forest changes, so may the way that a forest ecosystem functions, its resilience to natural disturbance, and the quality of products and services provided to society.</p>
                                <p>In addition to changing the types of plants, deer can also change the structure (i.e., the number and sizes of trees, and the presence or absence of some vegetation layers) of the forest. For example, over-browsing of tree seedlings and shrubs can eliminate lower layers and create open, park-like stands with little or no ground vegetation or forest understory. Loss of forest understory affects wildlife such as small mammals, insects, and songbirds that rely on the forest understory to provide cover, nesting sites, and food. Some animal species may become less abundant in heavily browsed areas, while others may disappear completely.</p>
                                <p>The effects of deer browsing on the composition and structure of New York forests can have long-lasting effects (also called “legacy” effects) that persist for decades even after reducing deer impacts. In areas with a history of deer overabundance, regeneration failure – the failure of new, young trees and other desirable understory species to grow – is having a detrimental effect on forests and the potential to keep areas as forests in the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
