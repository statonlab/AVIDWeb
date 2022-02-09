<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use App\Site;
use App\Plot;
use App\Plant;
use App\Measurement;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Role;

class UserTokenController extends Controller
{
    /**
     * Logs the user in.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if ($user->tokens()) {
            $user->tokens()->delete();
        }
        $token = $user->createToken(\Str::random())->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'token_expires_at' => 90 // token expires 90 days
        ];

        return $this->success($response);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return $this->deleted('success');
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role_id' => Role::where('is_default', true)->first()->id,
        ]);

        event(new Registered($user));

        return $this->success([
            'user' => $user,
            'token' => $user->createToken(\Str::random())->plainTextToken,
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function refreshToken(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $token = $user->createToken(\Str::random())->plainTextToken;

        $deleted_sites = Site::onlyTrashed()->where('deleted_at', '>=', date($request->deleted_after))->select(['sites.id'])->get();
        $deleted_plots = Plot::onlyTrashed()->where('deleted_at', '>=', date($request->deleted_after))->select(['plots.id'])->get();
        $deleted_plants = Plant::onlyTrashed()->where('deleted_at', '>=', date($request->deleted_after))->select(['plants.id'])->get();
        $deleted_measurements = Measurement::onlyTrashed()->where('deleted_at', '>=', date($request->deleted_after))->select(['measurements.id'])->get();
        $response = [
            'user' => $user,
            'token' => $token,
            'token_expires_at' => 90, // token expires 90 days
            'deleted' => ['sites' => $deleted_sites,
                'plots' => $deleted_plots,
                'plants' => $deleted_plants,
                'measurements' => $deleted_measurements]
        ];

        return $this->success($response);
    }
}
