@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('resources.resources_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">Selected References</h1>
                                    <p>Anderson, R.C., 1994. Height of white-flowered trillium (Trillium grandiflorum) as an index of deer browsing intensity. <i>Ecological Applications</i>, pp.104-109.</p>
                                    <p>Blossey, B., Curtis, P., Boulanger, J., & Dávalos, A. (2019). Red oak seedlings as indicators of deer browse pressure: Gauging the outcome of different white‐tailed deer management approaches. <i>Ecology and Evolution</i>, 9:13085– 13103.</p>
                                    <p>Diefenbach, D.R. and Fritsky, R.S. (2007). Developing and testing a rapid assessment protocol for monitoring vegetation changes on state forest lands. Unpublished manuscript. <i>US Geological Survey, Cooperative Fish and Wildlife Research Unit, Pennsylvania State University.</i></p>
                                    <p>Horsley, S.B., Stout, S.L., & deCalesta, D.S. (2003). White-tailed deer impact on vegetation dynamics of northern hardwood forest. <i>Ecological Applications</i> 13:98-118.</p>
                                    <p>Kirschbaum, C.D. & Anacker, B.L. (2005). The utility of Trillium and Maianthemum as phyto-indicators of deer impact in northwestern Pennsylvania, USA. <i>Forest Ecology and Management</i>, 217(1), pp.54-66.</p>
                                    <p>Koh, S., Bazely, D.R., Tanentzap, A.J., Voigt, D.R., & Da Silva, E. (2010). Trillium grandiflorum height is an indicator of white-tailed deer density at local and regional scales. <i>Forest Ecology and Management</i>, 259(8), pp.1472-1479.</p>
                                    <p>Marquis, D.A., Ernst, R.L., & Stout, S.L. (1992). Prescribing silvicultural treatments in hardwood stands of the Alleghenies. (Revised). Gen. Tech. Rep. NE-96. Broomall, PA: USDA, Forest Service, Northeastern Forest Experimental Station, 101 p. (download PDF at <a href="https://www.nrs.fs.fed.us/pubs/6294">https://www.nrs.fs.fed.us/pubs/6294</a>)</p>
                                    <p>Rawinski, T.J. (2015). Ten tallest method for assessing deer impacts. Unpublished.</p>
                                    <p>Rawinski, T.J. (2016). White-tailed Deer in Northeastern Forests: Understanding and Assessing Impacts. <i>USDA Forest Service, Newton Square, PA.</i> Available at <a href="https://www.fs.usda.gov/naspf/sites/default/files/NA-IN-02-14_WhitetailedDeerNEForestsWEB.pdf">https://www.fs.usda.gov/naspf/sites/default/files/NA-IN-02-14_WhitetailedDeerNEForestsWEB.pdf</a></p>
                                    <p>Royo, A.A., Stout, S.L., & Pierson, T.G. (2010). Restoring forest herb communities through landscape-level deer herd reductions: Is recovery limited by legacy effects? <i>Biological Conservation</i>, 143(11), pp.2425-2434.</p>
                                    <p>Rooney, T.P. (2001). Deer impacts on forest ecosystems: a North American perspective. <i>Forestry</i>, 74(3), pp.201-208.</p>
                                    <p>Waller, D.M., Johnson, S.E., & Witt, J.C. (2017). A new rapid and efficient method to estimate browse impacts from twig age. Forest Ecology and Management, 404, 361–369. (download PDF at <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378112717311489?via%3Dihub">https://www.sciencedirect.com/science/article/abs/pii/S0378112717311489?via%3Dihub</a>)</p>
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
