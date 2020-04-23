<?php

namespace App\Http\Controllers;

use App\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /** @var \App\User $user */
        $user = $request->user();

        $groups = $user->groups()->orderBy('name', 'asc')->paginate(20);

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

        return $this->created($group);
    }

    /**
     * @param \App\Group $group
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Group $group)
    {
        $this->authorize('view', $group);

        $group->load([
            'invitations',
        ]);

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
}
