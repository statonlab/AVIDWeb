<?php

namespace App\Http\Controllers;

use App\DeleteAccountRequest;
use App\Http\Controllers\Traits\Responds;
use App\Jobs\SendAccountRequestDeletionNotification;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeleteAccountRequestController extends Controller
{
    use Responds;

    /**
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', DeleteAccountRequest::class);

        return $this->success(DeleteAccountRequest::orderByDesc('id')->get());
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function myIndex(): JsonResponse
    {
        $this->authorize('view', DeleteAccountRequest::class);

        return $this->success(DeleteAccountRequest::where('user_id', auth()->id())
            ->orderByDesc('id')
            ->first());
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request): JsonResponse
    {
        $this->authorize('create', DeleteAccountRequest::class);
        $this->validate($request, [
            'reason' => 'nullable|string|max:255',
        ]);

        if (DeleteAccountRequest::where('user_id', $request->user()->id)->exists()) {
            return DeleteAccountRequest::where('user_id', $request->user()->id)->first();
        }

        $deleteAccountRequest = DeleteAccountRequest::create($request->only([
                'reason',
            ]) + [
                'user_id' => $request->user()->id,
            ]);

        if (DeleteAccountRequest::where('user_id', $request->user()->id)
            ->where('created_at', '>', Carbon::now()->subHours(2))
            ->withTrashed()
            ->doesntExist()) {
            dispatch(new SendAccountRequestDeletionNotification($deleteAccountRequest));
        }

        return $this->success($deleteAccountRequest);
    }

    /**
     * @param \App\DeleteAccountRequest $deleteRequest
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete(DeleteAccountRequest $deleteRequest): JsonResponse
    {
        $this->authorize('delete', $deleteRequest);

        $deleteRequest->delete();

        return $this->deleted($deleteRequest);
    }
}
