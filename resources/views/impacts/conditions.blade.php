@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
<<<<<<< HEAD
        <div class="container py-4">
            <div class="d-flex">
                <div class="row">
                    <div class="col-md-4">
                        @include('impacts.impacts_sidebar')
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-4">How Do I Know If My Woods Are Affected By Deer?</h1>
                                <p>The observations made in your woods may indicate the level of deer impacts to that forest. A number of plant and tree species are useful indicators for recognizing deer impacts. The level of impacts and your goals will help identify potential management strategies. You can use the simple diagnostic key below (Table 1) to establish a baseline condition for your woods. These pictures help illustrate signs of high and low deer impacts.</p>
                                <p>The following index can be used to assess woodland conditions at a single point in time. This key does not allow for comparison to other sites, the influence of general site conditions, or changes through time. AVID provides a more thorough assessment by measuring the condition of woody seedlings or indicator wildflower species. The systematic and repeated measurements through AVID allow you to monitor the growth and flowering frequency of key wildflowers, and changes in height of tree seedlings. Over time, AVID data will provide a more thorough understanding of deer impacts. If the condition of the woods is poor, management to improve the condition will need to provide some combination of reducing deer impacts and assuring desirable plant species have adequate sunlight. Specific management actions will depend on the extent of the problem, the objectives of the landowner, and the specific characteristics of the property and broader landscape.</p>
                                <p class="mb-2"><b>Deer Impact Index for Assessing Initial Conditions of your Woodland (adapted from Marquis et al. 1992)</b></p>
                                <ol>
                                    <li><b>No impact</b> – usually found only inside well-maintained deer exclosure fences.</li>
                                    <li><b>Low impact</b> – woody seedling regeneration of species preferred by deer is abundant and of varying heights, and seedlings are regularly able to grow beyond the reach of deer (5 feet or higher). Stump sprouts present. Herbaceous plants common. Spring wildflower indicator species of varying heights are present, and flowering is common. Your forest is generally healthy, and you will be able to regrow a new forest in the future.</li>
                                    <li><b>Medium impact</b> – woody seedling regeneration of species preferred by deer are present but with little height (e.g. most may be under 1 foot in height) variability. Stump sprouts browsed. Herbaceous plants rare. Wildflowers present but stunted and flowering is not common. Non- preferred browse and browse-resilient plant species are noticeably common and widespread. You have the potential to grow new trees and support plant diversity now, but only if deer browsing on seedlings and wildflowers is reduced, and the abundance of interfering vegetation is assessed and managed.</li>
                                    <li><b>High impact</b> – woody seedling regeneration of species preferred by deer is rare to absent. Non-preferred and browse-resilient vegetation limited in height by deer browsing. Seedlings are heavily browsed resulting in multiple-stem plants or deformed stems. Wildflower indicator species absent or severely stunted and flowering is absent. Ferns and invasive plants may be common. Forests in this condition may require a great deal of rehabilitation to reduce the abundance of undesirable plants, combined with a reduction of deer browsing, before new seedlings or wildflowers will be able to grow.</li>
                                    <li><b>Very high impact</b> – desirable woody seedling regeneration absent. Abundance of seedling species deer do not prefer is reduced by browsing, browse-resilient plants show signs of heavy, repeated browsing, and a browse line is readily evident. Wildflower indicator species absent. Ferns or invasive plants may dominate the forest floor, or the forest floor may be nearly bare. Forests in this condition may require a great deal of rehabilitation to reduce the abundance of undesirable plants, combined with a reduction of deer browsing, before new seedlings or wildflowers will be able to grow.</li>
                                </ol>
=======
        <div class="primary-content">
            <div class="container py-4">
                <div class="d-flex">
                    <div class="row">
                        <div class="col-md-4">
                            @include('impacts.impacts_sidebar')
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="mb-4">How Do I Know If My Woods Are Affected By Deer?</h1>
                                    <p>The observations you make in the woods may indicate the level of impact deer generally are having on that forest. A variety of plants can be used as indicators to help recognize deer impacts. The level of impact and your goals will help identify your actions and management strategies.</p>
                                    <p>The following index of deer impacts (adapted from D. Marquis, SILVAH) can be used to assess woodland conditions at a single point in time. This key does not allow for comparison to other sites, the influence of general site conditions, or changes through time. A more thorough assessment is possible by participating in AVID. With AVID you will measure the condition of indicator wildflower species and woody seedlings. The systematic and repeated measurements through AVID allow you to monitor the presence and abundance of wildflowers, and changes in height of tree seedlings. Over time, the AVID data provides a more thorough understanding of deer impacts. If the condition of the woods is poor, management to improve the condition will need to provide some combination of reducing the impacts of deer and limiting the abundance of interfering vegetation. Specific management actions will depend on the extent of the problem, the objectives of the owner, and the specific characteristics of the property and broader landscape.</p>
                                    <p class="mb-2"><b>Deer Impact Index for Assessing the Initial Condition of your Woodland</b></p>
                                    <ol>
                                        <li><b>No impact</b> – found only inside well-maintained deer exclosure fences.</li>
                                        <li><b>Low impact</b> – woody seedling regeneration of species preferred by deer is abundant and of varying heights, and seedlings are regularly able to grow beyond the reach of deer (5 feet or higher). Stump sprouts present. Herbaceous plants common. Spring wildflower indicator species of varying heights are present and flowering is common. Your forest is generally healthy and you will be able to regrow a new forest in the future.</li>
                                        <li><b>Medium impact</b> – woody seedling regeneration of species preferred by deer present but with little height (e.g. most may be under 1 foot in height) variability. Stump sprouts browsed. Herbaceous plants rare. Wildflowers present but stunted and flowering is not common. Non-preferred browse and browse-resilient plant species are noticeably common and widespread. You have the potential to grow new trees and support plant diversity now but only if deer browsing on seedlings and wildflowers is reduced and the abundance of interfering vegetation is assessed and managed.</li>
                                        <li><b>High impact</b> – woody seedling regeneration of species preferred by deer is rare to absent. Non-preferred and browse-resilient vegetation limited in height by deer browsing. Seedlings are heavily browsed resulting in multiple-stem plants or deformed stems. Wildflower indicator species absent or severely stunted and flowering is absent. Ferns and invasive plants may be common. Forests in this condition may require a great deal of rehabilitation to reduce the abundance of undesirable plants combined with a reduction of deer browsing, before new seedlings or wildflowers will be able to grow.</li>
                                        <li><b>Very high impact</b> – desirable woody seedling regeneration absent. Abundance of seedling species deer do not prefer is reduced by browsing, browse-resilient plants show signs of heavy, repeated browsing and a browse line is readily evident. Wildflower indicator species absent. Ferns or invasive plants may dominate the forest floor, or the forest floor may be nearly bare. Forests in this condition may require a great deal of rehabilitation to reduce the abundance of undesirable plants combined with a reduction of deer browsing, before new seedlings or wildflowers will be able to grow.</li>
                                    </ol>
                                </div>
>>>>>>> master
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.footer')
    </div>
@endsection
