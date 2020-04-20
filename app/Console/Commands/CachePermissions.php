<?php

namespace App\Console\Commands;

use App\Permission;
use App\Role;
use Illuminate\Console\Command;

class CachePermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:cache';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cache permissions';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $permissions = config('permissions');

        $roles = Role::get();
        /** @var Role[] $indexed_roles */
        $indexed_roles = [];
        $indexed_defaults = [];
        foreach ($roles as $role) {
            $indexed_roles[$role->name] = $role;
            if ($role->name !== 'Admin') {
                $indexed_defaults[$role->name] = [];
            }
        }

        $admin_perms = [];
        foreach ($permissions as $data) {
            $permission = Permission::updateOrCreate([
                'name' => $data['name'],
            ], [
                'title' => $data['title'],
                'description' => $data['description'],
            ]);

            $admin_perms[] = $permission->id;
            foreach ($data['default'] as $name) {
                if (! isset($indexed_defaults[$name])) {
                    $this->error('Role name '.$name.' not found!');
                    continue;
                }

                $indexed_defaults[$name][] = $permission->id;
            }
        }

        $indexed_roles['Admin']->permissions()->syncWithoutDetaching($admin_perms);
        foreach ($indexed_defaults as $name => $perms) {
            if (empty($perms)) {
                continue;
            }

            $indexed_roles[$name]->permissions()->syncWithoutDetaching($perms);
        }
    }
}
