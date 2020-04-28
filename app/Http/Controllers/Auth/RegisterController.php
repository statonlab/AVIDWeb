<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Invitation;
use App\Role;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/app';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param $user
     * @return \Illuminate\Http\RedirectResponse|null
     */
    protected function registered(Request $request, $user)
    {
        if (session()->has('invitation')) {
            $invitation = Invitation::find(session('invitation'));
            session()->remove('invitation');

            if (! $invitation) {
                return null;
            }

            if ($invitation->status !== Invitation::PENDING) {
                return null;
            }

            $invitation->accept($user);

            return redirect()->to('/app/groups/'.$invitation->group_id.'?accepted=1');
        }

        return null;
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role_id' => Role::where('is_default', true)->first()->id,
        ]);
    }
}
