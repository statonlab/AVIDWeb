@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container">
            <div class="d-flex">
                <div class="row">
                    <div class="card col-12">
                        <div class="card-header">
                            <h1 class="page-title mb-0">Set Up Sampling Plots</h1>
                        </div>
                        <div class="card-body">
                            <p>The objective of these methods is to measure changes in vegetation in response to changes in deer browsing pressure. If your property’s woodland is small (<10 acres), you will establish a minimum of six plots for each method you plan to implement. Locate the plots within the same “stand” in your woods. Because the vegetation in one stand will react differently to changes in deer numbers and browsing intensity than the vegetation response in another stand, the data need to be collected by stand. If you have a larger property and are able to devote more time to the assessment, consider establishing sets of six or more plots in multiple stands. If more than one stand type is present on your property, you may choose to establish one complete set of plots in two or more different stand types to capture the variability in deer impacts. For instance, if you have had a recent timber harvest in one area but not in another, you could set up monitoring plots in each of those areas. If you have woods of different ages, or dominated by different tree species (oak trees versus sugar maple, etc.) these different stands would allow for multiple clusters of 6 plots each.</p>
                            <p>For either the Woody Seedling or Wildflower method it is necessary to have an adequate number of plants present to measure and monitor. Before choosing plot locations, spend 20 to 30 minutes walking the stand you plan to sample. Each plot is located subjectively to ensure there are adequate numbers of plants to measure. Because this type of sampling assesses deer impacts, the selection of plants does not need to be random. Rather selection of plants needs to ensure that plants will reflect increasing or decreasing changes in deer browsing intensity. The goal is to measure at least 30 plants total of one species from the six or more plots.  Each plot can have a different number of plants.  All plots should be located at least 50 feet from the forest edge where the trees meet an open field, shrubland, wetland, or other non-forest habitat type, and at least 50 feet from human disturbance (skid trail, old home site, hiking trail, road, etc.). If you are conducting the Wildflower method, look for areas where the target species (see Resources section) are growing. Likewise, if you plan to implement the Woody Seedling method, look for areas with woody seedlings (trees or shrubs) between 6 inches and 4 feet tall.</p>
                            <p>For either method, participants will establish plots with a six-foot radius. Working with a partner who can record data for you makes the sampling easier and faster. Establish as many plots as needed to include 30 or more plants of each species you select. Each plot center should be located at least 25 feet from the center of any another plot. Select a location and mark the plot center using a 2-foot long piece of pvc pipe that is 1 inch in diameter, or a short wood or metal rebar stake (Figure 1). PVC is inexpensive and lightweight to carry. You can paint the top of the stake with tree-marking (or other) paint to make it more visible, or wrap it in brightly colored duct tape or other materials. If possible, record the GPS location of each plot center with latitude and longitude (decimal degrees format) and write the plot numbers on your stakes using a metal tag, permanent marker, or another long-lasting method. It is also a good idea to draw a map of your plots on your data sheet and write the numbers on the map in case the numbering in the field fades or is lost. Marking an access trail with surveyors flagging or other material is helpful (and sometimes essential) for relocating plots.</p>
                            <div class="row mb-2">
                                <div class="col-lg-4">
                                    <img class="img-fluid fig1-fit" src="/img/plots-1.jpeg" />
                                </div>
                                <div class="col-lg-4">
                                    <img class="img-fluid fig1-fit" src="/img/plots-2.jpeg" />
                                </div>
                                <div class="col-lg-4">
                                    <img class="img-fluid fig1-fit" src="/img/plots-3.jpeg" />
                                </div>
                            </div>
                            <p class="text-muted">Figure 1. Mark your plot centers with pvc pipe, a wooden stake or rebar. Mark the stake using brightly colored paint, surveyors flagging or brightly colored duct tape to make it easy to relocate.</p>
                            <p>Plots will have a 6-foot (2 yard) radius (Figure 2). You can use two yard sticks, or cut any stick to a 6-foot length. The plot edge can be marked with small sticks or other objects around the edge to help you visualize the outer limits of the plot. <b>It is important to avoid trampling the vegetation within the plots you establish.</b> These plots will be re-sampled over time and plants can be damaged by trampling, affecting the validity of your results.</p>
                            <div class="row">
                                <div class="col-lg-8">
                                    <img class="img-fluid fig2-fit" src="/img/plots-4.jpeg" />
                                </div>
                                <div class="col-lg-4">
                                    <img class="img-fluid fig2-fit" src="/img/plots-5.jpeg" />
                                </div>
                            </div>
                            <p class="text-muted">Figure 2. Schematic and picture of one plot showing 6-foot radius and four quadrants. Each quadrant is established by measuring six feet to the edge of the plot and marking the plot edge at each of the four cardinal directions.</p>
                            <strong>Pacing to Measure Distance</strong>
                            <p>Pacing is a reasonably easy and quick method of measuring distance in the field. One pace is defined as two footsteps walking at a natural pace. Twelve paces should cover 50 feet even for individuals with a very short stride. Therefore, if you don't have a long measuring tape or do not wish to carry one afield, you can walk 12 paces from any forest edge or disturbance. Six paces would represent an adequate distance between plot centers.</p>
                            <strong>Using Google Maps to Find Latitude and Longitude – An Alternative to a GPS</strong>
                            <div class="row">
                                <div class="col-lg-8">
                                    <p>If you do not own a GPS unit there is another easy way to find the coordinates for your site location. If you search the internet for Google Maps, you can zoom into the location where your site is located. Clicking the spot on the map will show the coordinates (latitude and longitude) in the box that appears underneath the search bar. You can then copy the latitude and longitude onto your data form.There are several ways to report latitude and longitude. Please record it as "decimal degrees". To set your Google Maps to decimal degrees go to Tools>Options>3D view and select "decimal degrees".</p>
                                </div>
                                <div class="col-lg-4">
                                    <img class="img-fluid" src="/img/plots-6.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .fig1-fit {
            object-fit: cover;
            width: 100%;
            height: 400px;
        }

        .fig2-fit {
            object-fit: cover;
            width: 100%;
        }
    </style>
@endsection