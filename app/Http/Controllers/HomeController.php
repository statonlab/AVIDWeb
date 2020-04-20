<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function data()
    {
        $user = null;
        if (auth()->check()) {
            /** @var \App\User $user */
            $userModel = auth()->user();

            $user = [
                'id' => $userModel->id,
                'name' => $userModel->name,
                'permissions' => $userModel->permissions->pluck('name'),
                'role' => $userModel->role->only([
                    'id',
                    'name',
                ]),
            ];
        }

        return view('dashboard', [
            'user' => $user,
        ]);
    }
}
