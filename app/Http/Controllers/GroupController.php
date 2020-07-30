<?php

namespace App\Http\Controllers;

use App\Exceptions\UserDoesntBelongToGroupException;
use App\Group;
use App\Http\Controllers\Traits\ListsSites;
use App\Invitation;
use App\User;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    use ListsSites;

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->validate($request, [
            'search' => 'nullable|max:255',
        ]);

        /** @var \App\User $user */
        $user = $request->user();

        $groups = $user->groups()->with([
            'owner' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ])->when($request->search, function ($query) use ($request) {
            $term = $request->search;
            $query->where(function ($query) use ($term) {
                /** @var \Illuminate\Database\Eloquent\Builder $query */
                $query->where('name', 'like', "%$term%");
            });
        })->withCount([
            'users',
        ])->orderBy('name', 'asc')->paginate(20);

        return $this->success($groups);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request)
    {
        $this->authorize('create', Group::class);

        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        /** @var \App\User $user */
        $user = $request->user();
        $group = Group::create([
            'user_id' => $user->id,
            'name' => $request->name,
        ]);

        $sites = $user->sites()->select(['sites.id'])->get()->pluck('id');
        $group->sites()->syncWithoutDetaching($sites);

        $group->users()->attach($user->id);

        return $this->created($group);
    }

    /**
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Group $group, Request $request)
    {
        $this->authorize('update', $group);

        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        $group->fill([
            'name' => $request->name,
        ])->save();

        $group->load([
            'owner' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        return $this->created($group);
    }

    /**
     * @param \App\Group $group
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Group $group, Request $request)
    {
        $this->authorize('view', $group);

        /** @var \App\User $user */
        $user = $request->user();

        $group->load([
            'users' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
            'owner' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ]);

        if ($user->can('viewAny', [Invitation::class, $group])) {
            $group->load([
                'invitations' => function ($query) {
                    $query->where([
                        'status' => Invitation::PENDING,
                    ]);
                    $query->with([
                        'user' => function ($query) {
                            $query->select(['users.id', 'users.name']);
                        },
                    ]);
                },
            ]);

            $group->invitations->transform(function (Invitation $invitation) {
                $invitation->expired = $invitation->expires_at->isPast();

                return $invitation;
            });
        }

        return $this->success($group);
    }

    /**
     * @param \App\Group $group
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(Group $group)
    {
        $this->authorize('delete', $group);

        $group->delete();

        return $this->deleted('Deleted');
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function restore($id)
    {
        $group = Group::onlyTrashed()->findOrFail($id);

        $this->authorize('restore', $group);

        $group->restore();

        return $this->created($group);
    }

    /**
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function deleteUser(Group $group, Request $request)
    {
        $this->authorize('deleteUser', $group);

        $this->validate($request, [
            'user' => 'required|exists:users,id',
        ]);

        $user = User::findOrFail($request->user);

        if ($group->owner->id === $user->id) {
            return $this->error('Cannot remove group owner', [
                'user' => ['Cannot remove group owner'],
            ]);
        }

        try {
            $group->remove($user);
        } catch (UserDoesntBelongToGroupException $exception) {
            return $this->error($exception->getMessage(), [
                'user' => [$exception->getMessage()],
            ]);
        }

        return $this->deleted();
    }

    /**
     * @param \App\Group $group
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException'
     */
    public function sites(Group $group)
    {
        $this->authorize('viewSites', $group);

        $sites = $this->getSites($group->sites());

        return $this->success($sites->paginate(20));
    }

    /**
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function setPermissions(Group $group, Request $request)
    {
        $this->authorize('update', $group);

        $this->validate($request, [
            'user_id' => 'required|exists:users,id',
            'can_view' => 'required|boolean',
            'can_edit' => 'required|boolean',
        ]);

        $group->users()->updateExistingPivot($request->user_id, [
            'can_view' => $request->can_view,
            'can_edit' => $request->can_edit,
        ]);

        $user = $group->users()->where('user_id', $request->user_id)->first();

        return $this->success($user);
    }

    public function getPermissions(Group $group, Request $request)
    {
        $user = $request->user();

        $permissions = $group->users()->findOrFail($user->id)->pivot;

        return $this->success($permissions);
    }
}
