<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\BeforeSheet;

class UsersExport implements FromCollection, WithHeadings, ShouldAutoSize, WithTitle, WithEvents
{
    use RegistersEventListeners;

    /** @var $users */
    protected $users;

    public function __construct($users)
    {
        $this->users = $users;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return ['Name', 'Email', 'Sites', 'Member Since', 'Role'];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $rows = collect([]);

        foreach ($this->users as $user) {
            $row = [
                $user->name,
                $user->email,
                $user->sites_count,
                $user->member_since,
                $user->role->name,
            ];
            $rows->push($row);
        }

        return $rows;
    }

    public function title(): string
    {
        return 'AVID_users';
    }

    public static function beforeSheet(BeforeSheet $event)
    {
        $event->sheet->autoSize();
    }
}

