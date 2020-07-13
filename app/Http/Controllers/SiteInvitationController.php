<?php

namespace App\Http\Controllers;

use App\User;
use App\Site;
use App\UserSite;
use App\SiteInvitation;
use Illuminate\Http\Request;

class SiteInvitationController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request)
    {
        $this->validate($request, [
            'site_id' => 'nullable|exists:sites,id'
        ]);

        if ($request->site_id) {
            $site = Site::findOrFail($request->site_id);

            $this->authorize('viewAny', [SiteInvitation::class, $site]);
        }

        $user = $request->user();

        $invitations = SiteInvitation::pending()->with([
            'user' => function ($query) {
                $query->select('id', 'name');
            }
        ]);

        if ($request->site_id) {
            $invitations->with([
                'recipient' => function ($query) {
                    $query->select('id', 'name');
                }
            ])->where('site_id', $request->site_id);
        } else {
            $invitations->with(['site'])->where('recipient_id', $user->id);
        }

        $invitations = $invitations->get()->map(function (SiteInvitation $invitation) {
            $invitation->expired = $invitation->expires_at->isPast();

            return $invitation;
        });

        return $this->success($invitations);
    }

    /**
     * @param \App\Site $site
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Site $site, Request $request)
    {
        $this->authorize('create', [SiteInvitation::class, $site]);

        $this->validate($request, [
            'user_id' => 'nullable|exists:users,id'
        ]);

        if (UserSite::where('site_id', $site->id)->where('user_id', $request->user_id)->exists()) {
            return $this->error('Site is already shared', [
                'user_id' => ['This site is already being shared with that user.'],
            ]);
        }

        $invitation = SiteInvitation::where('recipient_id', $request->user_id)
            ->where('site_id', $site->id)
            ->pending()
            ->active()
            ->exists();

        if ($invitation) {
            return $this->error('Invitation already exists', [
                'user_id' => ['There is an active invitation for this user. Please allow 7 days before sending another invitation.'],
            ]);
        }

        /** @var \App\User $user */
        $user = $request->user();
        /** @var \App\User $user */
        $recipient = User::findOrFail($request->user_id);

        $invitation = SiteInvitation::generate($user, $site, $recipient);

        $invitation->load(['user']);

        return $this->created($invitation);
    }

    /**
     * @param \App\SiteInvitation $invitation
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(SiteInvitation $invitation)
    {
        $this->authorize('delete', $invitation);

        $invitation->delete();

        return $this->deleted();
    }

    /**
     * @param \App\SiteInvitation $invitation
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View|void
     */
    public function accept(SiteInvitation $invitation, Request $request)
    {
        if ($invitation->token !== $request->auth) {
            abort(403);

            return;
        }

        if ($invitation->expires_at->isPast()) {
            return view('invitations.expired');
        }

        if ($invitation->status !== SiteInvitation::PENDING) {
            return view('invitations.invalid', [
                'message' => 'This invitation has already been processed.',
            ]);
        }

        if (auth()->check()) {
            $user = auth()->user();

            if ($user->id === $invitation->recipient_id) {
                $invitation->accept($user);

                return redirect()->to('/app/sites');
            } else {
                auth()->logout();
            }
        }

        session()->put('site_invitation', $invitation->id);

        return redirect('/login');
    }

    public function reject(SiteInvitation $invitation, Request $request)
    {
        if ($invitation->token !== $request->auth) {
            abort(403);

            return;
        }

        if ($invitation->expires_at->isPast()) {
            return view('invitations.expired');
        }

        if ($invitation->status !== SiteInvitation::PENDING) {
            return view('invitations.invalid', [
                'message' => 'This invitation has already been processed.',
            ]);
        }

        if (auth()->check()) {
            $user = auth()->user();

            if ($user->id === $invitation->recipient_id) {
                $invitation->reject($user);

                return redirect()->to('/app/sites');
            } else {
                auth()->logout();
            }
        }

        session()->put('site_invitation', $invitation->id);

        return redirect('/login');
    }
}
