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
    return view('welcome');
});

Route::get("/utility/csrf", "UserController@getCsrfToken");
Route::get("/content/{type}", "ContentController@getContent");
Route::get("/marquee", "MarqueeController@getMarqueeItems");
Route::get("/blog/articles-recipes", "BlogRecipeController@getAllBlogArticlesRecipes");
Route::get("/blog/articles", "BlogRecipeController@getAllBlogArticles");
Route::get("/recipes", "BlogRecipeController@getAllRecipes");
Route::post("/contact", "MailController@sendMail");


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
