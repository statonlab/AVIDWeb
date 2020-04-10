<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class ImportFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:file {data_file} {user_file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Loads data from the old site into the new site.';

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
        try {
            [$users_fp, $data_fp] = $this->getFileDescriptors();
        } catch (\Exception $exception) {
            $this->error($exception->getMessage());

            return 1;
        }

        // Load users into the database first
        // Ignore the header line
        fgetcsv($users_fp);

        // Collect new users to email them later
        $new_users = collect([]);
        while ($line = fgetcsv($users_fp)) {
            [$username, $name, $email] = $line;

            // Check if the user exists
            $user = User::where('email', $email)->first();
            if (! $user) {
                $new_users->push(User::create([
                    'email' => $email,
                    'name' => $name,
                    'username' => $username,
                ]));
            }
        }

        // Done with users, close the file
        fclose($users_fp);

        // Load sites, plots, plants and measurements from the data file
        // Ignore the header line
        fgetcsv($data_fp);

        while ($line = fgetcsv($data_fp)) {
            [
                $date,
                $is_located,
                $height,
                $is_alive,
                $tag,
                $species,
                $quadrant,
                $site_name,
                $state,
                $county,
                $town,
                $wmu,
                $owner_info,
                $common_trees,
                $common_shrubs,
                $site,
                $basal_area,
                $site_diameter,
                $plot_number,
                $recoreders,
                $latitude,
                $longitude,
                $plot_basal_area,
                $plot_is_enclosed,
                $growing_seasons,
                $plot_ground_cover,
                $plot_subcanopy,
                $plot_canopy,
                $creator,
                $url,
            ] = $line;

            // TODO: Find the site. If does not exist, create one
            // TODO: Find the plot. If does not exist, create one
            // TODO: Find the plant. If does not exist, create one
            // TODO: Create the measurement.
        }

        return 0;
    }

    public function getFileDescriptors()
    {
        $data_file_path = $this->argument('data_file');
        $users_file_path = $this->argument('users_file');

        $this->fileExists($data_file_path);
        $this->fileExists($users_file_path);

        return [
            fopen($users_file_path, 'r'),
            fopen($data_file_path, 'r'),
        ];
    }

    /**
     * @param $path
     * @throws \Exception
     */
    public function fileExists($path)
    {
        if (! file_exists($path)) {
            throw new \Exception("File $path not found.");
        }

        if (! is_readable($path)) {
            throw new \Exception("File $path is not readable. Permission denied.");
        }
    }
}
