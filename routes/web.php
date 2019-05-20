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

Route::get('/', function () {
    return view('public/index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');


Route::group(['middleware' => ['web']], function () {
    //Category
	Route::post('/add-category', 'CategoryController@add');
	Route::get('/category', 'CategoryController@all');
	Route::get('/category/{id}', 'CategoryController@delete');
	Route::get('/edit-category/{id}', 'CategoryController@edit');
	Route::post('/update-category/{id}', 'CategoryController@update');

//Post
	Route::get('/post', 'PostController@all');
	Route::post('/add-post', 'PostController@add');
	Route::delete('/delete/{id}', 'PostController@delete');
	Route::get('/update-post/{id}', 'PostController@edit');
	Route::post('/update-post/{id}', 'PostController@update');
});
