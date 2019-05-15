<?php

namespace App\Http\Controllers;

use App\BlogCategory;
use App\RecipeCategory;
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
    $articles = BlogArticle::where("publish", true)->get();
    $recipes = Recipe::where("publish", true)->get();

    $articlesWithCatsTags = [];
    foreach($articles as $article) {
      $article->categories;
      $article->tags;

      $articlesWithCatsTags[] = $article;
    }

    $recipesWithCats = [];
    foreach($recipes as $recipe) {
      $recipe->categories;

      $recipesWithCats[] = $recipe;
    }

    return response()->json([
      "articles" => $articlesWithCatsTags,
      "recipes" => $recipesWithCats
    ]);
  }


  public function getPrevNextPost($permalink) {
    $articlesRecipes = [];

    $articles = BlogArticle::where("publish", true)->get();
    $recipes = Recipe::where("publish", true)->get();

    if($articles) {
      foreach($articles as $article) {
        $epoch = strtotime($article->updated_at);
        $articlesRecipes[$epoch] = [
          "title" => $article->title,
          "permalink" => $article->permalink,
          "poster" => $article->poster,
          "type" => "article"
        ];
      }
    }

    if($recipes) {
      foreach($recipes as $recipe) {
        $epoch = strtotime($recipe->updated_at);
        $articlesRecipes[$epoch] = [
          "title" => $recipe->title,
          "permalink" => $recipe->permalink,
          "poster" => $recipe->poster,
          "type" => "recipe"
        ];
      }
    }

    if($articlesRecipes) {
      krsort($articlesRecipes, 1);

      $sortedArticlesRecipes = [];
      foreach($articlesRecipes as $key=>$articleRecipe) {
        $sortedArticlesRecipes[] = $articleRecipe;
      }

      $index = 0;
      foreach($sortedArticlesRecipes as $articleRecipe) {
        if($articleRecipe["permalink"] == $permalink) {
          $prev = $index - 1;
          $next = $index + 1;

          if($prev < 0) {
            $prevTitle = null;
            $prevPermalink = null;
            $prevPoster = null;
            $prevType = null;
          } else {
            $prevItem = $sortedArticlesRecipes[$prev];
            $prevTitle = $prevItem["title"];
            $prevPermalink = $prevItem["permalink"];
            $prevPoster = $prevItem["poster"];
            $prevType = $prevItem["type"];
          }

          if($next > count($sortedArticlesRecipes) - 1) {
            $nextTitle = null;
            $nextPermalink = null;
            $nextPoster = null;
            $nextType = null;
          } else {
            $nextItem = $sortedArticlesRecipes[$next];
            $nextTitle = $nextItem["title"];
            $nextPermalink = $nextItem["permalink"];
            $nextPoster = $nextItem["poster"];
            $nextType = $nextItem["type"];
          }
        }

        $index++;
      }

      $posts = [
        "prev" => [
          "title" => $prevTitle,
          "permalink" => $prevPermalink,
          "poster" => $prevPoster,
          "type" => $prevType
        ],
        "next" => [
          "title" => $nextTitle,
          "permalink" => $nextPermalink,
          "poster" => $nextPoster,
          "type" => $nextType
        ]
      ];

      return response()->json($posts, 200);
    }

    return response()->json("ERROR: No articles or recipes to process.", 404);
  }


  /**
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getAllBlogArticles() {
    $articles = BlogArticle::where("publish", true)->get();

    return response()->json($articles);
  }


  /**
   * @param $category
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getBlogArticlesByCategory($category): JsonResponse {
    $filtered = [];

    $articles = BlogArticle::where("publish", true)->get();

    foreach($articles as $article) {
      $cats = $article->categories()->get()->toArray();
      $hasCat = false;

      foreach($cats as $cat) {
        if($cat["name"] == $category) {
          $filtered[] = $article;
        }
      }
    }

    return response()->json($filtered, 200);
  }


  /**
   * @return JsonResponse
   * @throws BindingResolutionException
   */
  public function getAllRecipes(): JsonResponse {
    $recipes = Recipe::where("publish", true)->get();

    return response()->json($recipes);
  }


  public function getBlogArticle($permalink) {
    $article = BlogArticle::where('permalink', $permalink)->first();

    if(!$article) {
      return response()->json("ERROR: Unable to retrieve article with the specified permalink.", 404);
    }

    $article->categories;
    $article->tags;

    return response()->json($article, 200);
  }


  public function getBlogCategories() {
    $cats = BlogCategory::all();

    return response()->json($cats, 200);
  }


  public function getRecipe($permalink) {
    $recipe = Recipe::where("permalink", $permalink)->first();

    if(!$recipe) {
      return response()->json("ERROR: Unable to retrieve recipe with the specified permalink.", 404);
    }

    $recipe->categories;

    return response()->json($recipe, 200);
  }


  public function getRecipesByCategory($category): JsonResponse {
    $filtered = [];

    $recipes = Recipe::where("publish", true)->get();

    foreach($recipes as $recipe) {
      $cats = $recipe->categories()->get()->toArray();
      $hasCat = false;

      foreach($cats as $cat) {
        if($cat["name"] == $category) {
          $filtered[] = $recipe;
        }
      }
    }

    return response()->json($filtered, 200);
  }


  public function getRecipeCategories() {
    $cats = RecipeCategory::all();

    return response()->json($cats, 200);
  }
}
