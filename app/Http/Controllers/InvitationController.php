<?php

namespace App\Http\Controllers;

use App\Group;
use App\Invitation;
use Illuminate\Http\Request;

class InvitationController extends Controller
{
    /**
     * @param \App\Group $group
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(Group $group)
    {
        $this->authorize('viewAny', [Invitation::class, $group]);

        $invitations = $group->invitations()
            ->with(['user'])
            ->get()
            ->map(function (Invitation $invitation) {
                $invitation->expired = $invitation->expires_at->isPast();

                return $invitation;
            });

        return $this->success($invitations);
    }

    /**
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Group $group, Request $request)
    {
        $this->authorize('create', [Invitation::class, $group]);

        $this->validate($request, [
            'email' => 'required|email',
            'name' => 'required',
        ]);

        if ($group->users()->where('email', $request->email)->exists()) {
            return $this->error('User is already a member', [
                'email' => ['This email belongs to a user who is already a member of this group.'],
            ]);
        }

        $invitation = Invitation::where('email', $request->email)
            ->pending()
            ->active()
            ->exists();

        if ($invitation) {
            return $this->error("Invitation already exists", [
                'email' => ['There is an active invitation for this email. Please allow 7 days before sending another invitation.'],
            ]);
        }

        /** @var \App\User $user */
        $user = $request->user();
        $invitation = Invitation::generate($user, $group, $request->name,
            $request->email);

        $invitation->load(['user']);

        return $this->created($invitation);
    }

    /**
     * @param \App\Invitation $invitation
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(Invitation $invitation)
    {
        $this->authorize('delete', $invitation);

        $invitation->delete();

        return $this->deleted();
    }

    /**
     * @param \App\Invitation $invitation
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View|void
     */
    public function accept(Invitation $invitation, Request $request)
    {
        if ($invitation->token !== $request->auth) {
            abort(403);

            return;
        }

        if ($invitation->expires_at->isPast()) {
            return view('invitations.expired');
        }

        if ($invitation->status !== Invitation::PENDING) {
            return view('invitations.invalid', [
                'message' => 'This invitation has already been processed.',
            ]);
        }

        if (auth()->check()) {
            $user = auth()->user();

            if ($user->email === $invitation->email) {
                $invitation->accept($user);

                return redirect()->to('/app/groups');
            } else {
                auth()->logout();
            }
        }

        session()->put('invitation', $invitation->id);

        return redirect('/register');
    }
}
