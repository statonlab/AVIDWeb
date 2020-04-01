<?php

namespace App\Http\Middleware;

use Closure;

class AdminArea
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /** @var \App\User $user */
        $user = $request->user();

        if (! $user || ! $user->isAdmin()) {
            return abort(403);
        }

        return $next($request);
    }
}
