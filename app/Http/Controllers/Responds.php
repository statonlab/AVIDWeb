<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

trait Responds
{
    /**
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success($data)
    {
        return JsonResponse::create($data);
    }

    /**
     * @param $message
     * @param array $errors
     * @param int $status
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error($message, array $errors, $status = 422)
    {
        return JsonResponse::create([
            'message' => $message,
            'errors' => $errors,
        ], $status);
    }

    /**
     * Not found 404.
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    protected function notFound($message = 'Not Found')
    {
        return JsonResponse::create($message, 404);
    }

    /**
     * @param string|array $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function created($data)
    {
        return JsonResponse::create($data, 201);
    }

    /**
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    protected function deleted(string $message = '')
    {
        return JsonResponse::create($message, 201);
    }

    /**
     * Unauthorized request.
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    protected function unauthorized($message = 'Unauthorized')
    {
        return JsonResponse::create($message, 403);
    }

    /**
     * Bad request message.
     *
     * @param string $message
     * @return JsonResponse
     */
    protected function badRequest($message = 'Bad Request')
    {
        return JsonResponse::create($message, 400);
    }

    /**
     * Internal server error.
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    protected function serverError($message = '')
    {
        if (empty($message)) {
            $message = __('server.server_error');
        }

        return JsonResponse::create($message, 500);
    }
}
