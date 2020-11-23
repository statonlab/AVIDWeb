<?php

namespace App\Imports;

use App\User;
use App\Site;
use App\Plant;
use App\Measurement;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class SiteImport implements ToModel, WithHeadingRow, WithValidation
{
    /** @var Site $site */
    protected $site;

    /** @var User $user */
    protected $user;

    /** @var int */
    const MINIMUM_TIMESTAMP = 40000;

    /**
     * @param \App\User $user
     * @param \App\Site $site
     */
    public function __construct(User $user, Site $site)
    {
        $this->user = $user;
        $this->site = $site;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        /** @var Plant $plant */
        $plant = Plant::with(['plot'])
            ->get()
            ->where('plot.number', $row['plot'])
            ->where('tag', $row['tag'])
            ->first();

        if ($plant === null) {
            return null;
        }

        $date = null;

        if (! is_int($row['date_mm_dd_yyyy'])) {
            $date = new Carbon(str_replace('-', '/', $row['date_mm_dd_yyyy']));
        } else {
            /** @see http://www.cpearson.com/excel/datetime.htm#SerialDates */
            $date = (new Carbon('Dec 31 1899'))->addDays($row['date_mm_dd_yyyy'] - 1);
        }

        $exists = Measurement::where('plant_id', $plant->id)
            ->where('date', $date->format('Y-m-d'))
            ->exists();

        if ($exists) {
            return null;
        }

        $col_height = $row['height_inches'];

        $is_located = $col_height !== 'missing';
        $is_alive = $is_located == 1 ? $col_height !== 'dead' : null;
        $height = $is_alive == 1 ? $col_height : null;

        return new Measurement([
            'plant_id' => $plant->id,
            'plot_id' => $plant->plot->id,
            'site_id' => $this->site->id,
            'user_id' => $this->user->id,
            'is_located' => $is_located,
            'date' => $date,
            'height' => $height,
            'is_alive' => $is_alive,
        ]);
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        $quadrants = 'Southwest,Northwest,Southeast,Northeast';

        return [
            'site' => 'required|in:'.$this->site->name,
            'plot' => 'required|exists:plots,number',
            'quadrant' => "required|in:$quadrants",
            'tag' => 'required|exists:plants,tag',
            'species' => 'required|exists:species,name',
            'date_mm_dd_yyyy' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (is_int($value) && $value < self::MINIMUM_TIMESTAMP) {
                        $fail("Date is invalid. Expected a date in M-D-Y format. Received $value.");
                    }
                    else if (strtotime(str_replace('-', '/', $value)) === false) {
                        $fail("Date is invalid. Expected a date in M-D-Y format. Received $value.");
                    }
                }
            ],
            'height_inches' => [
                'required',
                function ($attribute, $value, $fail) {
                    if ($value !== 'dead' && $value !== 'missing' && ! is_numeric($value)) {
                        $fail('Height must be either a number, \'dead\', or \'missing\'.');
                    }
                },
            ],
        ];
    }
}
