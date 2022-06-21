<?php

namespace App\Http\Controllers;

use App\DeleteAccountRequest;
use App\Http\Controllers\Responds;
use App\Jobs\SendAccountRequestDeletionNotification;
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

        return $this->success(DeleteAccountRequest::orderByDesc('id')->paginate(20));
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Request $request): JsonResponse
    {
        $deleteAccountRequest = DeleteAccountRequest::create($request->only([
                'reason',
            ]) + [
                'user_id' => $request->user()->id,
            ]);

        dispatch(new SendAccountRequestDeletionNotification($deleteAccountRequest));

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

        return $this->created('');
    }
}
