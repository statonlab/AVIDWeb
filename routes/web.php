<?php

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

Route::group([
    'middleware' => ['auth'],
    'prefix' => '/app',
], function () {
    Route::get('/', 'HomeController@data');
    Route::get('/sites', 'HomeController@data');
    Route::get('/sites/{id}', 'HomeController@data');
});

Route::group([
    'middleware' => ['auth'],
    'prefix' => '/web',
], function () {
    // State Controller
    Route::get('/states', 'StateController@index');

    // County Controller
    Route::get('/counties', 'CountyController@index');

    // Site Controller
    Route::get('/sites', 'SiteController@index');
    Route::post('/sites', 'SiteController@create');
    Route::get('/sites/{site}', 'SiteController@show');
    Route::put('/sites/{site}', 'SiteController@update');
    Route::delete('/sites/{site}', 'SiteController@destroy');

    // Plot Controller
    Route::get('/sites/{site}/plots', 'PlotController@index');
    Route::post('/plots', 'PlotController@create');
    Route::get('/plots/{plot}', 'PlotController@show');
    Route::put('/plots/{plot}', 'PlotController@update');
    Route::delete('/plots/{plot}', 'PlotController@destroy');
});
