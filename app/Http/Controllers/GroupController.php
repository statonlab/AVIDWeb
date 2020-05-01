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
        /** @var \App\User $user */
        $user = $request->user();

        $groups = $user->groups()->with([
            'owner' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ])->withCount([
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
        $this->authorize('view', $group);

        $sites = $this->getSites($group->sites());

        return $this->success($sites->paginate(20));
    }
}
