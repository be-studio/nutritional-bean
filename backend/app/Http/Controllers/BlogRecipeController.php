<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\BlogArticle;
use App\Recipe;


class BlogRecipeController extends Controller {
  /**
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getAllBlogArticlesRecipes() {
    $articles = BlogArticle::all();
    $recipes = Recipe::all();

    return response()->json([
      "articles" => $articles,
      "recipes" => $recipes
    ]);
  }


  /**
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getAllBlogArticles() {
    $articles = BlogArticle::all();

    return response()->json($articles);
  }


  /**
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getAllRecipes() {
    $recipes = Recipe::all();

    return response()->json($recipes);
  }
}
