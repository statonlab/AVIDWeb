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
    public function data(...$args)
    {
        $user = null;
        $last_date = null;
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

            /** @var \App\Measurement $measurement */
            $measurement = $userModel->measurements()->orderBy('id', 'desc')->limit(1)->first();
            if ($measurement) {
                $last_date = $measurement->date->format('Y-m-d');
            }
        }

        return view('dashboard', [
            'user' => $user,
            // This is used to determine the next date value for measurements form.
            'last_date' => $last_date,
        ]);
    }
}
