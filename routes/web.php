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

Auth::routes(['verify' => true]);

Route::get('/web/images/storage/{image}', 'ImageController@serve');

Route::get('/', 'HomeController@index')->name('home');

// About
Route::get('/about', 'AboutController@about')->name('about');
Route::get('/about/benefits', 'AboutController@benefits')->name('benefits');
Route::get('/about/who', 'AboutController@who')->name('who');

// Deer Impacts
Route::get('/impacts', 'ImpactsController@impacts')->name('impacts');
Route::get('/impacts/conditions', 'ImpactsController@conditions')->name('conditions');
Route::get('/impacts/symptoms', 'ImpactsController@symptoms')->name('symptoms');

// Site Preparation
Route::get('/site-preparation', 'SitePreparationController@selection')->name('selection');
Route::get('/site-preparation/key', 'SitePreparationController@key')->name('key');
Route::get('/site-preparation/equipment', 'SitePreparationController@equipment')->name('equipment');
Route::get('/site-preparation/plots', 'SitePreparationController@plots')->name('plots');
Route::get('/site-preparation/quadrants', 'SitePreparationController@quadrants')->name('quadrants');
Route::get('/site-preparation/data', 'SitePreparationController@data')->name('data');

// User Guides
Route::get('/user-guides/getting-started', 'UserGuidesController@gettingStarted')->name('getting-started');
Route::get('/user-guides/spring-wildflowers', 'UserGuidesController@springWildflowers')->name('spring-wildflowers');
Route::get('/user-guides/woody-seedlings', 'UserGuidesController@woodySeedlings')->name('woody-seedlings');
Route::get('/user-guides/exclosures', 'UserGuidesController@exclosures')->name('exclosures');

// User Guides
Route::get('/user-guides/getting-started', 'UserGuidesController@gettingStarted')->name('getting-started');
Route::get('/user-guides/spring-wildflowers', 'UserGuidesController@springWildflowers')->name('spring-wildflowers');
Route::get('/user-guides/woody-seedlings', 'UserGuidesController@woodySeedlings')->name('woody-seedlings');
Route::get('/user-guides/exclosures', 'UserGuidesController@exclosures')->name('exclosures');

// Resources
Route::get('/resources/data-sheets', 'ResourcesController@dataSheets')->name('data-sheets');
Route::get('/resources/identification', 'ResourcesController@identification')->name('identification');
Route::get('/resources/manual', 'ResourcesController@manual')->name('manual');
Route::get('/resources/references', 'ResourcesController@references')->name('references');


Route::get('/invitations/{invitation}/accept', 'InvitationController@accept');

/**
 * Views for authenticated users.
 */
Route::group([
    'middleware' => ['auth', 'verified'],
    'prefix' => '/app',
], function () {
    Route::get('/', 'HomeController@data');
    Route::get('/sites', 'HomeController@data');
    Route::get('/sites/{id}', 'HomeController@data');
    Route::get('/groups/{group}/sites/{id}', 'HomeController@data');
    Route::get('/beta/sites', 'HomeController@data');
    Route::get('/beta/sites/{id}', 'HomeController@data');
    Route::get('/plots/{id}', 'HomeController@data');
    Route::get('/groups/{group}/plots/{id}', 'HomeController@data');
    Route::get('/plants/{id}', 'HomeController@data');
    Route::get('/groups/{group}/plants/{id}', 'HomeController@data');
    Route::get('/profile', 'HomeController@data');
    Route::get('/roles', 'HomeController@data');
    Route::get('/groups', 'HomeController@data');
    Route::get('/groups/{id}', 'HomeController@data');
    Route::get('/species', 'HomeController@data');
    Route::get('/users', 'HomeController@data');
    Route::get('/users/{user}', 'HomeController@data');
    Route::get('/roles', 'HomeController@data');
    Route::get('/admin/sites', 'HomeController@data');
    Route::get('/admin/sites/{id}', 'HomeController@data');
    Route::get('/admin/plots/{id}', 'HomeController@data');
    Route::get('/admin/plants/{id}', 'HomeController@data');
    Route::get('/reminders', 'HomeController@data');
    Route::get('/calendar', 'HomeController@data');
    Route::get('/events', 'HomeController@data');
    Route::get('/data-entry', 'HomeController@data');
    Route::get('/statistics', 'HomeController@data');
});

/**
 * Web API routes for authenticated users.
 */
Route::group([
    'middleware' => ['auth', 'verified'],
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
    Route::get('/sites/{site}/export', 'SiteController@export');
    Route::post('/sites/{site}/import', 'SiteController@import');

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
    Route::get('/groups/{group}/permissions', 'GroupController@getPermissions');
    Route::post('/groups', 'GroupController@create');
    Route::put('/groups/{group}', 'GroupController@update');
    Route::put('/groups/{group}/permissions', 'GroupController@setPermissions');
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

    // Event Controller
    Route::get('/events', 'EventController@index');
    Route::get('/events/{event}', 'EventController@show');
    Route::post('/events', 'EventController@create');
    Route::post('/events/{event}/update', 'EventController@update');
    Route::delete('/events/{event}', 'EventController@destroy');

    // Image Controller
    Route::post('/images', 'ImageController@create');

    // Admin Sites
    Route::get('/admin/sites', 'Admin\SiteController@index');

    // Reminders
    Route::get('/reminders', 'ReminderController@index');
    Route::post('/reminders', 'ReminderController@create');
    Route::get('/reminders/{reminder}', 'ReminderController@show');
    Route::put('/reminders/{reminder}', 'ReminderController@update');
    Route::delete('/reminders/{reminder}', 'ReminderController@destroy');

    // Reminder Events
    Route::get('/reminder-events', 'ReminderEventController@index');
    Route::get('/reminder-events/{event}', 'ReminderEventController@show');


    // Data Entry
    Route::get('/data-entry/sites', 'DataEntryController@sites');
    Route::get('/data-entry/sites/{site}/plots', 'DataEntryController@plots');

    // Statistics
    Route::get('/statistics/sites', 'StatisticsController@sites');
    Route::get('/statistics/plots', 'StatisticsController@plots');
    Route::get('/statistics/species', 'StatisticsController@species');
    Route::get('/statistics/{site}/chart', 'StatisticsController@siteChart');
    Route::get('/statistics/chart', 'StatisticsController@chart');
});
