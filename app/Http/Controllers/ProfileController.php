<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        $user->member_since = $user->created_at->diffForHumans();

        return $this->success($user);
    }
}
