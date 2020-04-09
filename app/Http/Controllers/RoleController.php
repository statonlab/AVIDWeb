<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('lists', Role::class);

        $roles = Role::get();

        return $this->success($roles);
    }
}
