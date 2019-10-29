<?php

namespace App\Console\Commands;

use App\County;
use App\State;
use Illuminate\Console\Command;

class LoadCountiesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'load:counties {file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Load counties from csv';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $filename = $this->argument('file');

        $fp = fopen($filename, 'r');
        if (! $fp) {
            $this->error('Unable to open file '.$filename);

            return;
        }

        $count = 0;
        $n = 0;
        while ($line = fgetcsv($fp)) {
            $n++;
            if (! $this->validateLine($line, $n)) {
                continue;
            }

            if ($this->insert($line)) {
                $count++;
            }
        }

        $this->info('Created '.number_format($count).' Counties');
    }

    /**
     * @param mixed $line
     * @param int $n
     * @return bool
     */
    public function validateLine($line, int $n)
    {
        if ($line === false) {
            $this->error('Unable to load line #'.number_format($n));

            return false;
        }

        if (empty($line)) {
            $this->error('Line #'.number_format($n).' is empty');

            return false;
        }

        if (! is_array($line) || count($line) < 2) {
            $this->error('Line #'.number_format($n).' is not formatted correctly');

            return false;
        }

        return true;
    }

    /**
     * @param array $line
     * @return bool
     */
    public function insert(array $line)
    {
        $state = State::where('name', $line[1])->first();

        if (! $state) {
            $this->error("State \"{$line[1]}\" not found");

            return false;
        }

        County::updateOrCreate([
            'state_id' => $state->id,
            'name' => $line[0],
        ]);

        return true;
    }
}
