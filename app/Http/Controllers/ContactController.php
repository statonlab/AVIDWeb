<?php

namespace App\Http\Controllers;

use App\User;
use App\Role;
use App\Mail\ContactRequest;
use Mail;
use Illuminate\Http\Request;
use ReCaptcha\ReCaptcha;

class ContactController extends Controller
{
    use Responds;

    /**
     * Show the contact form.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function contactForm()
    {
        return view('contact.contact_form')->with([
            'success' => session('success', false),
        ]);
    }

    /**
     * Contact administrators.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
            'recaptcha' => 'required',
        ]);

        $recaptcha = new ReCaptcha(config('services.google.recaptcha_secret'));
        $response = $recaptcha->verify($request->recaptcha, $request->ip());

        if (! $response->isSuccess() || $response->getScore() < 0.6) {
            return redirect()
                ->back()
                ->with(['success' => false])
                ->withErrors(['recaptcha' => ['Invalid response to spam filters.']])
                ->withInput();
        }

        Mail::to($this->getSubscribedAdmins())
            ->queue(new ContactRequest((object)$request->all()));

        return redirect()->back()->with(['success' => true]);
    }

    /**
     * Get all admin users who subscribed to contact requests.
     *
     * @return \App\User[]|\Illuminate\Database\Eloquent\Collection
     */
    protected function getSubscribedAdmins()
    {
        $users = User::with('role')->get()->reject(function ($user) {
            return $user->role->name !== 'Admin';
        })->map(function ($user) {
            return $user->email;
        });

        return $users;
    }
}
