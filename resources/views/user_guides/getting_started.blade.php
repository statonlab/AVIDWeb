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
                            <h1 class="mb-4">Getting Started</h1>
                            <p>Deer browsing affects many different components of our forests. Plants provide the basis to assess and document changes in deer population levels and associated impacts. AVID was designed as an index of deer impact that should respond quickly to changes in the deer population, be based on scientific evidence, and be easily and accurately applied by volunteers under different conditions. The methods supported by this protocol emphasize naturally occurring tree and shrub seedlings or specific spring wildflowers.</p>
                            <p>For the method (or methods) you select, plan to collect and record <b>all</b> of the relevant information described below. The data collected will be used to track vegetation changes over time and local environmental conditions that may influence the growth of the seedlings and wildflowers. Therefore, try to visit the plots and collect data on your established plots <i>annually</i>. If you miss a year, it is still useful to continue collecting and submitting data in future years. Re-measurement in subsequent years should happen within two weeks of the original date of measurement when possible.</p>
                            <p>Spring wildflowers, also called spring ephemerals because they occur for a short time, have been found to respond quickly to changes in deer pressure, and are effective indicators under a variety of forest conditions. As ephemerals, wildflowers will not be apparent for much of the year, and thus are seasonally restricted to spring. Woody seedlings are available year-round, but they tend not to respond as quickly as wildflowers, and seedling identification can be challenging during at times of the year when leaves are not present.</p>
                            <p>This protocol includes two methods:</p>
                            <ul>
                                <li>Method #1 - tagging and measuring the height of 25-30 individual tree or shrub seedlings of each species of interest</li>
                                <li>Method #2 - tagging and measuring the height of 25-30 wildflowers each of one or more species</li>
                            </ul>
                            <p>Having enough information to make deer management decisions at a local or regional level will require a sufficient amount of data from the same method. A concern with offering multiple assessment methods is that each is diluted, and insufficient data may be accumulated when volunteer efforts are spread across multiple methods. For this reason, volunteers are <i>strongly encouraged</i> to implement the Seedling Method (#1). If seasonal availability, identification skills, or your personal interest preclude the Seedling Method, use the Wildflower Method (#2). If time, energy and ecological conditions permit, collect data on multiple properties, or use both methods on one property.</p>
                            <p>Both methods require measurements on 25 to 30 stems of each of the focal species. The number of stems is based on what is needed for use in statistical analysis, and to allow for potential seedling mortality or lost tags that often happens over the monitoring period. If you decide to install some simple small-plot exclosure fences within the original area or compare two distinct areas (e.g., harvested forest versus unharvested forest), each needs 25 to 30 stems of each focal species.</p>
                            <p>There is similarity among the methods and their implementation is fairly simple. Both methods involve selecting a wooded area as your site (details are below). In these sites, circular plots with a 6-foot radius are established, and plants are tagged and measured (Table 2).</p>
                            <p><b>Table 2.</b> Summary of attributes of assessment methods. See text for full details.</p>
                            <table class="table">
                                <thead>
                                <th>Attribute</th>
                                <th>Method 1 - Woody Seedlings</th>
                                <th>Method 2 - Spring Wildflower</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>What’s measured (simplified)</td>
                                    <td>Tag 25-30 seedlings each of the species and record the heights</td>
                                    <td>Tag 25-30 wildflowers of one species or more and record height and whether plant is or has flowered</td>
                                </tr>
                                <tr>
                                    <td>Sensitive to canopy or sub-canopy shading</td>
                                    <td>May be unreliable in shaded conditions</td>
                                    <td>Can work in shaded conditions</td>
                                </tr>
                                <tr>
                                    <td>Seasonality</td>
                                    <td>June-early October (before leaf-off), or fall and winter with adequate skill in seedling identification</td>
                                    <td>Mid-May to late June</td>
                                </tr>
                                <tr>
                                    <td>Standard equipment (details below)</td>
                                    <td>
                                        <ul>
                                            <li>6-ft-long rope or staff</li>
                                            <li>Smart phone with app or tally sheet</li>
                                            <li>Compass</li>
                                            <li>Hammer (first year only)</li>
                                            <li>Center and quadrant stakes or flags (first year)</li>
                                            <li>Yard stick or tape measure to assess plant height</li>
                                        </ul>
                                    </td>
                                    <td>Same</td>
                                </tr>
                                <tr>
                                    <td>Unique equipment</td>
                                    <td>Tags to mark individual seedlings for height measurements, Tree seedling identification guide</td>
                                    <td>Tags to mark individual stems Wildflower identification guide (see Appendix)</td>
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
