<?php

namespace App\Http\Controllers;

use App\User;
use App\Role;
use App\Mail\ContactRequest;
use Mail;
use Illuminate\Http\Request;

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
        return view('contact.contact_form');
    }

    /**
     * Contact administrators.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        Mail::to($this->getSubscribedAdmins())->queue(new ContactRequest((object)$request->all()));

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
