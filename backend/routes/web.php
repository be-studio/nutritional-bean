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
Route::get("/blog/prevnextpost/{permalink}", "BlogRecipeController@getPrevNextPost");
Route::get("/blog/articles", "BlogRecipeController@getAllBlogArticles");
Route::get("/blog/category/{category}", "BlogRecipeController@getBlogArticlesByCategory");
Route::get("/blog/article/{permalink}", "BlogRecipeController@getBlogArticle");
Route::get("/blog/categories", "BlogRecipeController@getBlogCategories");
Route::get("/recipes", "BlogRecipeController@getAllRecipes");
Route::get("/recipes/categories", "BlogRecipeController@getRecipeCategories");
Route::get("/recipes/category/{category}", "BlogRecipeController@getRecipesByCategory");
Route::get("/recipe/{permalink}", "BlogRecipeController@getRecipe");
Route::post("/contact", "MailController@sendMail");

Route::get("/version", "VersionController@getVersion");


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
