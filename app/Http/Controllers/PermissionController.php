<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', Permission::class);

        $roles = Role::with(['permissions'])->get();
        $permissions = Permission::get();
        $matrix = [];

        foreach ($roles as $role) {
            $matrix[$role->id] = [];
        }

        foreach ($permissions as $permission) {
            foreach ($roles as $role) {
                $matrix[$role->id][$permission->id] = false;
                if ($role->permissions->contains('id', $permission->id)) {
                    $matrix[$role->id][$permission->id] = true;
                }
            }
        }

        return $this->success([
            'roles' => $roles,
            'permissions' => $permissions,
            'matrix' => $matrix,
        ]);
    }

    /**
     * @param \App\Permission $permission
     * @param \App\Role $role
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function toggle(Permission $permission, Role $role)
    {
        $this->authorize('update', $role);

        $changes = $role->permissions()->toggle($permission->id);

        return $this->created(['attached' => count($changes['attached']) > 0]);
    }
}
