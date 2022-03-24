<?php

namespace App\Providers;

use App\Events\InvitationAccepted;
use App\Events\InvitationCreated;
use App\Events\SiteInvitationCreated;
use App\Events\SiteDeleted;
use App\Events\PlotCreated;
use App\Events\PlotUpdated;
use App\Events\PlotDeleted;
use App\Events\PlantDeleted;
use App\Events\MeasurementCreated;
use App\Events\SiteShared;
use App\Events\SiteStoppedSharing;
use App\Listeners\MeasurementCreatedListener;
use App\Listeners\AttachAddressToPlotListener;
use App\Listeners\DeleteAttachedPlotsListener;
use App\Listeners\DeleteAttachedPlantsListener;
use App\Listeners\DeleteAttachedMeasurementsListener;
use App\Listeners\InvitationAcceptedListener;
use App\Listeners\SendInvitationListener;
use App\Listeners\SendSiteInvitationListener;
use App\Listeners\AttachWMUToPlotListener;
use App\Listeners\SiteSharedListener;
use App\Listeners\DeleteSiteReminders;
use App\Listeners\DeleteSharedSiteReminders;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        SiteDeleted::class => [
            DeleteAttachedPlotsListener::class,
            DeleteSiteReminders::class,
        ],
        PlotCreated::class => [
            AttachAddressToPlotListener::class,
            AttachWMUToPlotListener::class,
        ],
        PlotUpdated::class => [
            AttachAddressToPlotListener::class,
            AttachWMUToPlotListener::class,
            AttachAggregateWMUToPlotListener::class,
        ],
        PlotDeleted::class => [
            DeleteAttachedPlantsListener::class,
        ],
        PlantDeleted::class => [
            DeleteAttachedMeasurementsListener::class,
        ],
        MeasurementCreated::class => [
            MeasurementCreatedListener::class,
        ],
        InvitationCreated::class => [
            SendInvitationListener::class
        ],
        InvitationAccepted::class => [
            InvitationAcceptedListener::class
        ],
        SiteInvitationCreated::class => [
            SendSiteInvitationListener::class,
        ],
        SiteShared::class => [
            SiteSharedListener::class,
        ],
        SiteStoppedSharing::class => [
            DeleteSharedSiteReminders::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
