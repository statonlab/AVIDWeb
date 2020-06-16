@extends('layouts.guest')

@section('content')
    @include('components.navbar')
    <div class="container py-4">
        <div class="d-flex">
            <div class="row">
                <div class="col-md-4">
                    @include('user_guides.guide_sidebar')
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="mb-4">Method 2. Spring Wildflower Method</h1>
                            <p>The spring wildflower protocol prioritizes measurements of Trillium, Indian cucumber (<i>Medeola virginiana</i>), or Jack in the pulpit (<i>Arisaema triphyllum</i>). These species are fairly common, and are useful because they decline in abundance, show reduced height, or show reduced flowering when browsed by deer. In the absence of these species, Solomon’s seal (<i>Polygonatum spp.</i>) and False Solomon’s seal (<i>Maianthemum racemosum</i>), as well as other indicator species may be monitored instead. The goal is to select areas that allow you to monitor at least 20 stems (ideally 25-30) of a species. Secondary species can be included if at least 20 stems are present.</p>
                            <p>Wildflowers exhibit patchy distribution in any forest and not all of these species will occur at every site. However, any or all of these species may be monitored when present. Picture guides to help you identify these flowers are provided (Appendix C). These guides are included in on the web site or can be printed and taken afield as references.</p>
                            <p>When selecting a wildflower species to monitor, search your stand for species with at least 20 (but ideally 30 or more) individual plants of that species that are four inches or taller. Place plots where the tallest plants of your chosen indicator species are growing. Deer tend to forage selectively on taller plants as they are more accessible. Therefore, the taller plants are more likely to be impacted by deer and will show the greatest response to changes in deer browsing intensity. Trillium and jack-in-the- pulpit begin as 1-leaved plants but do not flower until they have been a 3-leaved plant for several years. When monitoring these species, select 3-leaved individuals. Likewise, Indian cucumber does not flower until it has 2 whorls of leaves. When possible, select Indian cucumber plants with 2 whorls. However, if 2-whorled individuals are not present, 1-whorled plants can be selected.</p>
                            <p>Try to locate each plot to include from three to seven or more individual flowers of the species you plan to monitor (for a total of 25-30). If you wish to monitor more than one species it may be possible to capture enough individuals of more than one species within the same six plots, or you may need to establish additional plots.</p>
                            <p>Once you have chosen your target species and created your plots, mark each plant you will monitor using a sod stake and numbered tag. Place the stake next to the plant stem taking care not to disrupt the plant and its roots any more than necessary. Sod stakes (4 inches) can be purchased at stores carrying landscape supplies (e.g. Lowes, Home Depot) and can be used in combination with numbered plastic tags available from <a href="https://www.forestry-suppliers.com/">www.forestry-suppliers.com</a> (“utility slip on tags” item #79186) or other vendors, or through Cornell by emailing <a href="mailto:KLS20@cornell.edu">kls20@cornell.edu</a> (Figure 7). Place the marker in the soil on the side of the plant opposite the center stake. Be careful not to insert the stake so close to the stem that the roots are severed. These markers will be helpful for relocating and tracking each plant.</p>
                            <div class="row justify-content-center">
                                <img class="img-fluid" src="/img/spring-wildflowers-3.jpg"/>
                            </div>
                            <p class="text-muted"><b>Figure 7.</b> Wildflowers can be marked using a 4-inch sod stake with a numbered tag wrapped around it. The brightly colored tag will help you relocate the plant. </p>
                            <p>Measure and record the height of each plant from the litter surface to the base of the leaf whorl (Figure 8). Record the height as “natural height” (do not manually extend the plant to make it more upright), measuring straight up from the ground as if measured along a plumb- bob line from the ground to the point where the stem intersects the leaf whorl. For plants with multiple stems, choose the tallest stem to measure. Indian cucumber will often grow two sets of leaf whorls (Figure 8). If two sets of leaf whorls are present, measure to the base of the highest whorl. For each plant you are monitoring, record whether it is flowering or shows evidence that it has flowered or will flower this season (bud, flower stems still attached, opened seed pod, etc.).</p>
                            <div class="row justify-content-center">
                                <img class="img-fluid mb-2" src="/img/spring-wildflowers-2.png"/>
                            </div>
                            <p class="text-muted"><b>Figure 8.</b> Indian cucumber (pictured left) should be measured from the ground to the base of the second leaf whorl, if available, or the first whorl if only one is present. Trillium (pictured right) and jack-in-the-pulpit will only have one leaf whorl and should be measured from the ground to the base of the whorl.</p>
                            <p>When re-measuring wildflowers in subsequent years, you may occasionally be unable to locate a given tagged individual. If you cannot find the tag, record “NF” for that individual on the data sheet. Because these wildflowers are perennial, finding the tag but not the flower also should be recorded as a “NF” for height. Most of the time it will be difficult to determine if the plant has died or if the plant has not come up that year for other reasons. If, however, after several years of monitoring the plant has not reappeared then you may record it as “D”, indicating the plant is thought to be dead.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
