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
     * @param \Illuminate\Http\Request $request
     * @param \App\UserSite $user_site
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Site $site, User $user, Request $request)
    {
        $this->authorize('update', $site);

        $this->validate($request, [
            'viewable' => 'nullable|boolean',
            'editable' => 'nullable|boolean'
        ]);

        $user_site = UserSite::where('site_id', $site->id)->where('user_id', $user->id)->first();

        if ($user_site) {
            $user_site->fill([
                'viewable' => $request->viewable ?? $user_site->viewable,
                'editable' => $request->editable ?? $user_site->editable,
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
    public function delete(Site $site, User $user, Request $request)
    {
        $this->authorize('delete', $site);

        $user_site = UserSite::where('site_id', $site->id)->where('user_id', $user->id)->first();

        if ($user_site) {
            $user_site->delete();
        }

        return $this->deleted();
    }

    public function users(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'site_id' => 'nullable|exists:sites,id',
            'search' => 'nullable|max:255',
        ]);

        $users = User::where('id', '!=', $user->id)->orderBy('name', 'asc');

        if ($request->search) {
            $term = $request->search;
            $users->where(function (Builder $query) use ($term) {
                $query->where('name', 'like', "%$term%");
                $query->orWhere('email', $term);
            });
        }

        $users = $users->get();

        $users->transform(function (User $user) use ($request) {
            $user_site = UserSite::where('user_id', $user->id)->where('site_id', $request->site_id)->first();
            $user->shared = $user_site !== null;

            if ($user->shared) {
                $user->can_view = $user_site->viewable;
                $user->can_edit = $user_site->editable;
            }

            return $user;
        });

        return $this->success($users);
    }
}
