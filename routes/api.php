<?php

use App\Http\Controllers\Api\SitesController;
use App\Http\Controllers\Api\PlotsController;
use App\Http\Controllers\Api\PlantsController;
use App\Http\Controllers\Api\MeasurementsController;
use App\Http\Controllers\Api\SpeciesController;
use App\Http\Controllers\Api\UserTokenController;
use App\Site;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Traits\ListsSites;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/sanctum/token', [UserTokenController::class, 'login']);
Route::post('/sanctum/logout', [UserTokenController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/download/species', [SpeciesController::class, 'download'])->middleware('auth:sanctum');
Route::get('/download/sites', [SitesController::class, 'download'])->middleware('auth:sanctum');
Route::post('/upload/site', [SitesController::class, 'uploadSite'])->middleware('auth:sanctum');
Route::post('/upload/sites', [SitesController::class, 'uploadSites'])->middleware('auth:sanctum');
Route::post('/upload/plot', [PlotsController::class, 'uploadPlot'])->middleware('auth:sanctum');
//Route::post('/upload/measurements', [MeasurementsController::class, 'create'])->middleware('auth:sanctum');
Route::post('/upload/measurement', [MeasurementsController::class, 'update'])->middleware('auth:sanctum');
