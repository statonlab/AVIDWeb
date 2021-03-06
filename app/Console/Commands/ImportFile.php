<?php

namespace App\Console\Commands;

use App\County;
use App\Measurement;
use App\Plant;
use App\PlantType;
use App\Plot;
use App\Role;
use App\Site;
use App\Species;
use App\State;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Artisan;

class ImportFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:file {data_file} {--users_file=} {--plant_type=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Loads data from the old site into the new site.';

    /**
     * @var array
     */
    protected $errors = [];

    /**
     * @var PlantType
     */
    protected $plantType;

    protected $userIndex = [];

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
        $this->plantType = $this->getPlantType();

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
        $role = Role::where('is_default', true)->first();
        while ($line = fgetcsv($users_fp)) {
            array_walk($line, 'trim');
            [$username, $name, $email] = $line;
            $username = strtolower($username);

            // Check if the user exists
            $user = User::where('email', $email)->first();
            if (! $user) {
                $user = User::create([
                    'email' => $email,
                    'name' => $name,
                    'password' => bcrypt(Str::random(60)),
                    'role_id' => $role->id,
                ]);
                $new_users->push($user);
            }

            $this->userIndex[$username] = $user;
        }

        // Done with users, close the file
        fclose($users_fp);

        // Load sites, plots, plants and measurements from the data file
        // Ignore the header line
        fgetcsv($data_fp);

        $i = 0;
        while ($line = fgetcsv($data_fp)) {
            $i++;
            $this->processLine($i, $line);
        }

        $this->info("Processed $i lines");

        $this->info("Updating last measured fields");
        Artisan::call('plots:update-measurements-date');

        $this->info("Attach WMUs to plots");
        Artisan::call('attach:wmus');

        return 0;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object
     * @throws \Exception
     */
    protected function getPlantType()
    {
        $plant_type = $this->option('plant_type');

        $type = PlantType::where('name', $plant_type)->first();
        if ($type) {
            return $type;
        }

        $type = PlantType::where('name', 'like', "%$plant_type%")->first();
        if ($type) {
            if ($this->confirm("Is {$type->name} the correct plant type?")) {
                return $type;
            }
        }

        throw new \Exception("Unable to find plant type");
    }

    /**
     * @param $i
     * @param $line
     */
    protected function processLine($i, $line)
    {
        [
            $date,
            $is_located,
            $height,
            $is_alive,
            $tag,
            $species_name,
            $quadrant,
            $site_name,
            $state_name,
            $county_name,
            $town,
            // wmu can be ignored
            $wmu,
            $owner_info,
            $common_trees,
            $common_shrubs,
            $site_basal_area,
            $site_diameter,
            $plot_number,
            $recorders,
            $latitude,
            $longitude,
            $plot_basal_area,
            $plot_is_enclosed,
            $growing_seasons,
            $plot_ground_cover,
            $plot_subcanopy,
            $plot_canopy,
            $username,
            $url,
            $plant_old_tag,
        ] = $line;
        array_walk($line, 'trim');
        $username = strtolower($username);

        // Find the user
        /** @var \App\User|null $user */
        $user = $this->userIndex[$username] ?? null;
        if (! $user) {
            $this->putError($i, "User $username does not exist.");

            return;
        }

        // Find the state and county
        [$state, $county] = $this->getStateAndCounty($state_name, $county_name);

        // Find the site. If does not exist, create one
        $site = Site::firstOrCreate([
            'user_id' => $user->id,
            'name' => $site_name,
        ], [
            'state_id' => $state->id,
            'county_id' => $county->id,
            'city' => $town,
            'owner_name' => '',
            'owner_contact' => implode("\n", explode(',', $owner_info)),
            'basal_area' => empty($site_basal_area) ? null : floatval($site_basal_area),
            'diameter' => empty($site_diameter) ? null : floatval($site_diameter),
        ]);

        // Attach Common Species
        $species = $this->getSpeciesList($common_trees);
        $site->species()->syncWithoutDetaching($species->pluck('id'));

        // Attach Common Shrubs
        $shrubs = $this->getSpeciesList($common_shrubs);
        $site->shrubs()->syncWithoutDetaching($shrubs->pluck('id'));

        // Find the plot. If does not exist, create one
        $plot = Plot::updateOrCreate([
            'user_id' => $user->id,
            'site_id' => $site->id,
            'number' => floatval($plot_number),
        ], [
            'latitude' => empty($latitude) ? null : floatval($latitude),
            'longitude' => empty($longitude) ? null : floatval($longitude),
            'basal_area' => empty($plot_basal_area) ? null : floatval($plot_basal_area),
            'is_protected' => $plot_is_enclosed === 'TRUE',
            'protection_seasons' => $this->extractProtectionSeasons($growing_seasons),
            'canopy' => empty($plot_canopy) ? null : "{$plot_canopy}%",
            'subcanopy' => empty($plot_subcanopy) ? null : "{$plot_subcanopy}%",
            'ground_cover' => empty($plot_ground_cover) ? 'null' : "{$plot_ground_cover}%",
            'recorders' => $recorders,
        ]);

        $species = $this->getSpecies($species_name);

        // Find the plant. If does not exist, create one
        $plant = Plant::updateOrCreate([
            'user_id' => $user->id,
            'plot_id' => $plot->id,
            'plant_type_id' => $this->plantType->id,
            'species_id' => $species->id,
            'tag' => floatval($tag),
            'old_tag' => !empty(trim($plant_old_tag)) ? trim($plant_old_tag) : null,
        ], [
            'quadrant' => ucwords($quadrant),
            'collected_at' => now(),
        ]);

        // Create the measurement.
        $located = $is_located === 'Yes';

        return Measurement::firstOrCreate([
            'user_id' => $user->id,
            'plant_id' => $plant->id,
            'date' => Carbon::createFromFormat('M d, Y', $date)->toDateString(),
            'is_located' => $located,
            'is_alive' => $located ? $is_alive === 'Yes' : null,
            'height' => $located ? empty($height) ? null : floatval($height) : null,
            'site_id' => $site->id,
            'plot_id' => $plot->id
        ]);
    }

    /**
     * @param $name
     * @return \App\Species|\Illuminate\Database\Eloquent\Model
     */
    protected function getSpecies($name)
    {
        return Species::firstOrCreate([
            'name' => trim($name),
            'plant_type_id' => $this->plantType->id,
        ]);
    }

    /**
     * @param string $list
     * @return \Illuminate\Support\Collection
     */
    protected function getSpeciesList(string $list)
    {
        $items = explode(';', $list);
        array_walk($items, 'trim');
        $all = [];

        foreach ($items as $item) {
            $all[] = $this->getSpecies($item);
        }

        return collect($all);
    }

    /**
     * @param $seasons
     * @return string|null
     */
    protected function extractProtectionSeasons($seasons): ?string
    {
        $options = ['0' => '0', '1-2' => '1 to 2', '>=3' => 'Greater than or equal to 3'];

        if (empty($seasons)) {
            return null;
        }

        if (isset($options[$seasons])) {
            return $options[$seasons];
        }

        return $seasons;
    }

    /**
     * @param string $state_name
     * @param string $county_name
     * @return array
     */
    protected function getStateAndCounty(string $state_name, string $county_name)
    {
        $code = implode('', array_map(function ($name) {
            return substr($name, 0, 1);
        }, explode(' ', $state_name)));

        $state = State::firstOrCreate([
            'name' => $state_name,
        ], [
            'code' => $code,
        ]);

        $county = County::firstOrCreate([
            'state_id' => $state->id,
            'name' => $county_name,
        ]);

        return [
            $state,
            $county,
        ];
    }

    /**
     * @return array
     * @throws \Exception
     */
    public function getFileDescriptors()
    {
        $data_file_path = $this->argument('data_file');
        $users_file_path = $this->option('users_file');

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

    /**
     * @param $line_num
     * @param $message
     */
    protected function putError($line_num, $message)
    {
        $this->error("Line #{$line_num}: {$message}");
    }
}
