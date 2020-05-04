<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/invitations/{invitation}/accept', 'InvitationController@accept');

/**
 * Views for authenticated users.
 */
Route::group([
    'middleware' => ['auth'],
    'prefix' => '/app',
], function () {
    Route::get('/', 'HomeController@data');
    Route::get('/sites', 'HomeController@data');
    Route::get('/sites/{id}', 'HomeController@data');
    Route::get('/plots/{id}', 'HomeController@data');
    Route::get('/plants/{id}', 'HomeController@data');
    Route::get('/profile', 'HomeController@data');
    Route::get('/roles', 'HomeController@data');
    Route::get('/groups', 'HomeController@data');
    Route::get('/groups/{id}', 'HomeController@data');
    Route::get('/species', 'HomeController@data');
    Route::get('/users', 'HomeController@data');
    Route::get('/users/{user}', 'HomeController@data');
    Route::get('/roles', 'HomeController@data');
    Route::get('/admin/sites', 'HomeController@data');
});

/**
 * Web API routes for authenticated users.
 */
Route::group([
    'middleware' => ['auth'],
    'prefix' => '/web',
], function () {
    // Search Controller
    Route::get('/search', 'SearchController@index');

    // Profile Controller
    Route::get('/profile', 'ProfileController@index');
    Route::put('/profile', 'ProfileController@update');
    Route::put('/profile/password', 'ProfileController@updatePassword');

    // State Controller
    Route::get('/states', 'StateController@index');

    // County Controller
    Route::get('/counties', 'CountyController@index');

    // Site Controller
    Route::get('/sites', 'SiteController@index');
    Route::get('/user/{user}/sites', 'SiteController@index');
    Route::post('/sites', 'SiteController@create');
    Route::get('/sites/{site}', 'SiteController@show');
    Route::put('/sites/{site}', 'SiteController@update');
    Route::delete('/sites/{site}', 'SiteController@destroy');

    // Plot Controller
    Route::get('/sites/{site}/plots', 'PlotController@index');
    Route::post('/sites/{site}/plots', 'PlotController@create');
    Route::get('/plots/{plot}', 'PlotController@show');
    Route::put('/plots/{plot}', 'PlotController@update');
    Route::delete('/plots/{plot}', 'PlotController@destroy');

    // Plants
    Route::get('/plots/{plot}/plants', 'PlantController@index');
    Route::post('/plots/{plot}/plants', 'PlantController@create');
    Route::get('/plants/{plant}', 'PlantController@show');
    Route::put('/plants/{plant}', 'PlantController@update');
    Route::delete('/plants/{plant}', 'PlantController@destroy');

    // Measurements
    Route::get('/plants/{plant}/measurements', 'MeasurementController@index');
    Route::post('/plants/{plant}/measurements', 'MeasurementController@create');
    Route::get('/measurements/{measurement}', 'MeasurementController@show');
    Route::put('/measurements/{measurement}', 'MeasurementController@update');
    Route::delete('/measurements/{measurement}', 'MeasurementController@destroy');

    // Plant Types
    Route::get('/plant-types', 'PlantTypeController@index');

    // Species Search
    Route::get('/species', 'SpeciesController@index');

    // Group Controller
    Route::get('/groups', 'GroupController@index');
    Route::post('/groups', 'GroupController@create');
    Route::put('/groups/{group}', 'GroupController@update');
    Route::get('/groups/{group}', 'GroupController@show');
    Route::delete('/groups/{group}', 'GroupController@delete');
    Route::get('/groups/{group}/sites', 'GroupController@sites');

    // Invitation Controller
    Route::get('groups/{group}/invitations', 'InvitationController@index');
    Route::post('groups/{group}/invitations', 'InvitationController@create');
    Route::delete('/invitations/{invitation}', 'InvitationController@delete');

    // Species Controller
    Route::post('/species', 'SpeciesController@create');
    Route::put('/species/{species}', 'SpeciesController@update');
    Route::delete('/species/{species}', 'SpeciesController@delete');

    // Users Controller
    Route::get('/users', 'UserController@index');
    Route::get('/users/{user}', 'UserController@show');
    Route::patch('/user/{user}/role', 'UserController@patchRole');

    // Roles Controller
    Route::get('/roles', 'RoleController@index');

    // Permissions Controller
    Route::get('/permissions', 'PermissionController@index');
    Route::patch('/permissions/{permission}/roles/{role}', 'PermissionController@toggle');

    // Admin Sites
    Route::get('/admin/sites', 'Admin\SiteController@index');
});
