<?php

namespace App\Http\Controllers;

use App\User;
use App\Site;
use App\UserSite;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UserSiteController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param \App\Site $site
     * @param \App\User $user
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function toggleEdit(Site $site, User $user)
    {
        $this->authorize('update', $site);

        $user_site = UserSite::where('site_id', $site->id)
            ->where('user_id', $user->id)
            ->first();

        if ($user_site) {
            $user_site->fill([
                'editable' => ! $user_site->editable,
            ])->save();
        }

        return $this->created($user_site);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Site $site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(Site $site, User $user)
    {
        $this->authorize('delete', $site);

        $user_site = UserSite::where('site_id', $site->id)
            ->where('user_id', $user->id)
            ->first();

        if ($user_site) {
            $user_site->delete();
        }

        return $this->deleted();
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function users(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'site_id' => 'nullable|exists:sites,id',
            'search' => 'nullable|min:2|max:255',
        ]);

        $users = User::where('id', '!=', $user->id);

        if ($request->site_id) {
            $users->whereDoesntHave('userSites', function ($query) use ($request) {
                $query->where('user_sites.site_id', $request->site_id);
            })->whereDoesntHave('siteInvitations', function ($query) use ($request) {
                $query->where('site_invitations.site_id', $request->site_id);
                $query->where('site_invitations.status', 'pending');
            });
        }

        if ($request->search) {
            $term = $request->search;
            $users->where(function (Builder $query) use ($term) {
                $query->where('name', 'like', "%$term%");
                $query->orWhere('email', $term);
            });
        }

        $users = $users->orderBy('name', 'asc')->paginate(20, [
            'users.id',
            'users.name',
        ]);

        return $this->success($users);
    }

    /**
     * Get users with whom the site is shared.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function sharedUsers(Request $request)
    {
        $this->validate($request, [
            'site_id' => 'required|exists:sites,id',
        ]);

        $this->authorize('viewAny', Site::findOrFail($request->site_id));

        $users = User::with('userSites')
            ->orderBy('name', 'asc')
            ->whereHas('userSites', function ($query) use ($request) {
                $query->where('site_id', $request->site_id);
            })
            ->select('id', 'name');

        $users = $users->get();

        $users->transform(function (User $user) {
            $user->can_edit = $user->userSites->first()->editable;

            return $user;
        });

        return $this->success($users);
    }
}
