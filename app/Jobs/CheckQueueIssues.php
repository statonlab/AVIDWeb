<?php

namespace App\Jobs;

use App\Mail\QueueErrorMail;
use App\SuperUser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class CheckQueueIssues implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     */
    public function handle()
    {
        if (DB::table('jobs')->count() > 9) {
            $users = SuperUser::query()->cursor();

            foreach ($users as $user) {
                \Mail::send(new QueueErrorMail($user));
            }
        }

        return 0;
    }
}
