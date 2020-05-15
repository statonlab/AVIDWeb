<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request)
    {
        $this->authorize('create', Image::class);

        $this->validate($request, [
            'image' => 'required|image|max:5120',
        ]);

        // Create new image
        $image = Image::create([
            'path' => $request->file('image')->store('images'),
            'size' => $request->file('image')->getSize(),
        ]);

        $image->url = $image->makeUrl();

        return $this->created($image);
    }

    /**
     * Serve an image.
     *
     * @param \App\Image $image
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse|void
     */
    public function serve(Image $image)
    {
        $path = $image->path;
        if (! \Storage::exists($path)) {
            return abort(404);
        }

        // Cache the image for 30 days
        return response()->file(storage_path("app/$path"))->setCache(['max_age' => 1000 * 60 * 60 * 24 * 30]);
    }
}
