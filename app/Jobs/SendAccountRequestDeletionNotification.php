<?php

namespace App\Jobs;

use App\DeleteAccountRequest;
use App\Notifications\AccountDeleteRequestNotification;
use App\SuperUser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendAccountRequestDeletionNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected DeleteAccountRequest $request)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $admins = SuperUser::with(['user'])->get();
        foreach ($admins as $admin) {
            $admin->user->notify(new AccountDeleteRequestNotification($this->request));
        }
    }
}
