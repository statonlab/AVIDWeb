<?php

namespace App\Console\Commands;

use App\Mail\InstructionsMail;
use App\Mail\MigrationMail;
use App\User;
use Illuminate\Console\Command;

class SendMigrationEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migration:send-mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send migration emails';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = User::orderBy('id', 'asc')->whereHas('role', function ($query) {
            $query->where('roles.name', 'Admin');
        })->cursor();

        foreach ($users as $user) {
            \Mail::send(new MigrationMail($user));
            \Mail::send(new InstructionsMail($user));
        }

        return 0;
    }
}
