<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $this->validate($request, [
            'search' => 'nullable|max:255',
        ]);

        $users = User::with('role');

        if ($request->search) {
            $term = $request->search;
            $users->where(function (Builder $query) use ($term) {
                $query->where('name', 'like', "%$term%");
                $query->orWhere('email', 'like', "%$term%");
                $query->orWhereHas('role', function (Builder $query) use ($term) {
                    $query->where('roles.name', 'like', "%$term%");
                });
            });
        }

        $users = $users->orderBy('name', 'asc')->paginate(25);

        $users->getCollection()->transform(function (User $user) {
            $user->member_since = $user->created_at->diffForHumans();

            return $user;
        });

        return $this->success($users);
    }

    public function show(User $user, Request $request)
    {
        $this->authorize('view', $user);

        $user->member_since = $user->created_at->diffForHumans();

        return $this->success($user);
    }
}
