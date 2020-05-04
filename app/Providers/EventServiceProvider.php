<?php

namespace App\Providers;

use App\Events\InvitationAccepted;
use App\Events\InvitationCreated;
use App\Events\PlotCreated;
use App\Events\PlotUpdated;
use App\Listeners\AttachAddressToPlotListener;
use App\Listeners\InvitationAcceptedListener;
use App\Listeners\SendInvitationListener;
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
        PlotCreated::class => [
            AttachAddressToPlotListener::class,
        ],
        PlotUpdated::class => [
            AttachAddressToPlotListener::class,
        ],
        InvitationCreated::class => [
            SendInvitationListener::class
        ],
        InvitationAccepted::class => [
            InvitationAcceptedListener::class
        ]
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
}
