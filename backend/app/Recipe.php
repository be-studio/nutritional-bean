<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model {
  protected $table = "recipes";
  protected $guarded = [];
  protected $casts = [];


  public function categories() {
    return $this->belongsToMany("App\RecipeCategory", "recipe_recipe_category", "recipe_id", "recipe_category_id")
      ->withTimestamps();
  }
}
