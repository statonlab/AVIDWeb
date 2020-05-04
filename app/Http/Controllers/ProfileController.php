<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Hash;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        $user->member_since = $user->created_at->diffForHumans();

        return $this->success($user);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        $this->validate($request, [
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'name' => ['required', 'string', 'max:255'],
        ]);

        $user->update($request->only(['name', 'email']));

        $user->member_since = $user->created_at->diffForHumans();

        return $this->created($user);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updatePassword(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        $this->validate($request, [
            'password' => ['required', 'min:6', 'max:255'],
            'new_password' => ['required', 'min:6', 'max:255', 'confirmed'],
        ]);

        $logged_in = auth()->attempt([
            'email' => $user->email,
            'password' => $request->password,
        ]);

        if (!$logged_in) {
            return $this->error('Invalid Password', [
                'password' => ['These credentials do not match our records.'],
            ]);
        }

        $user->update([
            'password' => Hash::make($request->new_password),
        ]);

        $user->member_since = $user->created_at->diffForHumans();

        return $this->created($user);
    }
}
