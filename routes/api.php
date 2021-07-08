<?php

use App\Http\Controllers\Api\MeasurementsController;
use App\Http\Controllers\Api\PlantsController;
use App\Http\Controllers\Api\PlotsController;
use App\Http\Controllers\Api\SitesController;
use App\Http\Controllers\Api\PlotsApi;
use App\Http\Controllers\Api\PlantsApi;
use App\Http\Controllers\Api\MeasurementsApi;
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

Route::post('/sanctum/token', [UserTokenController::class, 'login']);
Route::post('/sanctum/register', [UserTokenController::class, 'register']);
Route::post('/sanctum/logout', [UserTokenController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/download/species', [SpeciesController::class, 'download'])->middleware('auth:sanctum');
Route::get('/download/sites', [SitesController::class, 'download'])->middleware('auth:sanctum');
Route::post('/upload/site', [SitesController::class, 'uploadSite'])->middleware('auth:sanctum');
//Route::post('/upload/sites', [SitesController::class, 'uploadSites'])->middleware('auth:sanctum');
Route::post('sites', [SitesController::class, 'create'])->middleware('auth:sanctum');
Route::post('plots', [PlotsController::class, 'create'])->middleware('auth:sanctum');
Route::post('plants', [PlantsController::class, 'create'])->middleware('auth:sanctum');
Route::post('measurements', [MeasurementsController::class, 'create'])->middleware('auth:sanctum');
Route::put('site/{site}', [SitesController::class, 'update'])->middleware('auth:sanctum');
Route::put('plot/{plot}', [PlotsController::class, 'update'])->middleware('auth:sanctum');
Route::put('plant/{plant}', [PlantsController::class, 'update'])->middleware('auth:sanctum');
Route::put('measurement/{measurement}', [MeasurementsController::class, 'update'])->middleware('auth:sanctum');
