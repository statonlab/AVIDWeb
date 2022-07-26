<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use App\Role;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $this->validate($request, [
            'order_by' => 'nullable|in:name,email,created_at,sites_count',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
        ]);

        $users = User::with(['role'])
            ->withCount(['sites']);

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

        if ($request->verified === 'verified') {
            $users->whereNotNull('email_verified_at');
        } else if ($request->verified === 'unverified') {
            $users->whereNull('email_verified_at');
        }

        $users = $users->orderBy($request->order_by ?? 'name', $request->order_dir ?? 'asc')
            ->paginate(25);

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

    public function patchRole(User $user, Request $request)
    {
        $this->authorize('setRole', $user);

        $this->validate($request, [
            'role' => 'required|integer',
        ]);

        $user->fill([
            'role_id' => $request->role,
        ])->save();

        return $this->success($user);
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    public function export(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $this->validate($request, [
            'order_by' => 'nullable|in:name,email,created_at,sites_count',
            'order_dir' => 'nullable|in:asc,desc',
            'search' => 'nullable|max:255',
        ]);

        $users = User::with(['role'])
            ->withCount(['sites']);

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

        if ($request->verified === 'verified') {
            $users->whereNotNull('email_verified_at');
        } else if ($request->verified === 'unverified') {
            $users->whereNull('email_verified_at');
        }

        $users = $users->orderBy($request->order_by ?? 'name', $request->order_dir ?? 'asc')
            ->get();

        $users->transform(function (User $user) {
            $user->member_since = $user->created_at->diffForHumans();

            return $user;
        });

        return Excel::download(new UsersExport($users), "AVID_users.xlsx");
    }
}
