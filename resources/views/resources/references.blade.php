@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Selected References</h1>
                        </div>
                        <div class="card-body">
                            <p>Anderson, R.C., 1994. Height of white-flowered trillium (Trillium grandiflorum) as an index of deer browsing intensity. <i>Ecological Applications</i>, pp.104-109.</p>
                            <p>Diefenbach, D.R. and Fritsky, R.S., 2007. Developing and testing a rapid assessment protocol for monitoring vegetation changes on state forest lands. <i>Unpublished manuscript. US Geological Survey, Cooperative Fish and Wildlife Research Unit, Pennsylvania State University.</i></p>
                            <p>Horsley, S.B., S.L. Stoudt, and D.S. deCalesta. 2003. White-tailed deer impact on vegetation dynamics of northern hardwood forest. <i>Ecological Applications</i> 13:98-118.</p>
                            <p>Kirschbaum, C.D. and Anacker, B.L., 2005. The utility of Trillium and Maianthemum as phyto-indicators of deer impact in northwestern Pennsylvania, USA. <i>Forest Ecology and Management</i>, 217(1), pp.54-66.</p>
                            <p>Rawinski, T.J. 2016. White-tailed Deer in Northeastern Forests: Understanding and Assessing Impacts. <i>USDA Forest Service, Newton Square, PA. Available at <a href="http://www.na.fs.fed.us/pubs/2014/NA-IN-02-14_WhitetailedDeerNEForestsWEB.pdf">http://www.na.fs.fed.us/pubs/2014/NA-IN-02-14_WhitetailedDeerNEForestsWEB.pdf</a></i></p>
                            <p>Royo, A.A., Stout, S.L. and Pierson, T.G., 2010. Restoring forest herb communities through landscape-level deer herd reductions: Is recovery limited by legacy effects? <i>Biological Conservation</i>, 143(11), pp.2425-2434.</p>
                            <p>Rooney, T.P., 2001. Deer impacts on forest ecosystems: a North American perspective. <i>Forestry</i>, 74(3), pp.201-208.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
