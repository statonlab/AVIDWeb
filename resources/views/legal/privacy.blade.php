@extends('layouts.guest')

@section('content')
    <div>
        @include('components.navbar')
        <div class="container py-4">
            <div class="d-flex">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="mb-4">Privacy Policy</h1>
                                <strong>What information do we collect?</strong>
                                <p>When you create a user account for this app, we will collect your name, email address, zip code, and your age. We will also collect some information related to your device (operating system, model). This information will be stored in the AVID user database and will not be shown, disseminated, or sold to any third parties. This information may be used, without personal identifying information, to report demographic data in grant reports and/or scientific publication.</p>
                                <strong>How do we use this information?</strong>
                                <p class="mb-0">We will use the information we collect from you for several purposes.</p>
                                <p>First, the plot information you provide (your observations) will be added to a database for scientists to access. Information (such as plot locations, size, and condition) will be available for vetted researchers but not made available to the general public. In addition, your contact information may be provided in the event that these researchers need to contact you regarding submissions of scientific interest. Second, we will work to better service you in responding to your customer service requests. We will personalize your user experience and to allow us to deliver the type of content and product offerings in which you are most interested. As a part of this we may send periodic emails regarding our products and services.</p>
                                <strong>E-mail address</strong>
                                <p>To create an account, you must provide a valid email address, which will be used to validate your account and send important information about the AVID project. Your email address will not be shown, disseminated, or sold to any third parties not affiliated with plot research programs. Your email will only be used to manage your AVID account and for the scientists using the AVID dataset to contact you with questions regarding your submitted observations. You are able to delete your AVID account or opt out of receiving emails at any time.</p>
                                <strong>How do we use the submitted observations?</strong>
                                <p>All observations submitted to our database will be stored permanently on the AVID website. This includes all data and metadata, including GPS coordinates, and images. Observation data will be displayed on the AVID website, and be made available to outside parties through an API. Observations can be made anonymous in the profile settings of the app or website: anonymous observations will only be visible to you and the scientists behind AVID.</p>
                                <strong>How can I manage my privacy settings?</strong>
                                <p>Your privacy settings can be changed in the settings section of the mobile app. Changing your submissions to anonymous will prevent them from being displayed on the AVID web portal to other users or the general public.</p>
                                <strong>Will this policy change?</strong>
                                <p class="mb-1">As AVID evolves, we may make changes to our data usage and privacy policy. We will never show, sell, or disseminate your personal information to any outside parties not affiliated with plot research programs.</p>
                                <p>Users will receive an email notification upon any change to the privacy policy if they have not opted out of email notifications.</p>
                                <strong>Is my data secured?</strong>
                                <p class="mb-1">Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
                                <p>We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information. We do not use vulnerability scanning and/or scanning to PCI standards. We use regular Malware Scanning.</p>
                                <strong>California Online Privacy Protection Act (CalOPPA)</strong>
                                <p class="mb-1">CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivably the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy. <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">Click here to learn more about CalOPPA.</a></p>
                                <p class="mb-1">According to CalOPPA we agree to meet the requirements laid forth in <b>COPPA</b> (the Children Online Privacy Protection Act).</p>
                                <p class="mb-1">When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
                                <p>AVID does not knowingly collect personal information from children without parental consent. When registering, the user’s age is recorded, and users under 13 will be notified that they require parental consent to register. We do not specifically market to children under 13.</p>
                                <strong>Do we use 'cookies'?</strong>
                                <p class="mb-2">Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and store certain information. We use them to store your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
                                <p class="mb-1">We use cookies to:</p>
                                <p>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third party services that track this information on our behalf. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your web browser settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookie settings. If you disable cookies, some features will be disabled It won't affect the users experience that make your site experience more efficient and some of our services will not function properly.</p>
                                <strong>Can users delete their accounts?</strong>
                                <p>Yes. Please contact us to using the <a href="/contact-form">contact form</a> to make a removal request.</p>
                                <strong>How to contact us with questions</strong>
                                <p>If you have questions, please visit our <a href="/contact-form">contact form.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
