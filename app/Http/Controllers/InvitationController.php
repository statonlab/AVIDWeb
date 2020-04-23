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
        $this->authorize('view', $group);

        $invitations = $group->invitations;

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
        ]);

        $invitation = Invitation::where('email', $request->email)
            ->pending()
            ->active()
            ->exists();

        if ($invitation) {
            return $this->error("Invitation already exists", [
                'email' => ['There is an active invitation for this email. Please allow 7 days before sending another invitation.'],
            ]);
        }

        $invitation = Invitation::generate($request->user, $group, $request->email);

        return $this->created($invitation);
    }

    /**
     * @param \App\Invitation $invitation
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(Invitation $invitation)
    {
        $this->authorize('update', $invitation);

        $invitation->delete();

        return $this->deleted();
    }
}
