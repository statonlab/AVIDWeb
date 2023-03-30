<?php

namespace App\Http\Controllers;

use App\PendingFile;
use Illuminate\Http\Request;
use Storage;

class PendingFileController extends Controller
{
    public function download(PendingFile $file)
    {
        $this->authorize('download', $file);

        if (! Storage::disk($file->disk)->exists($file->path)) {
            abort(404);

            return;
        }

        return Storage::disk($file->disk)->download($file->path, $file->name);
    }

    public function show(PendingFile $file)
    {
        $this->authorize('download', $file);

        return $this->success($file);
    }
}
