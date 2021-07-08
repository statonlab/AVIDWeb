<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ImpersonateController extends Controller
{
    public function impersonate(User $user, Request  $request) {
        if(!$request->user()->isSuperUser()) {
            return $this->unauthorized();
        }

        \Auth::login($user);

        return redirect('/app');
    }
}
