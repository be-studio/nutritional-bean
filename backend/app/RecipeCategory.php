<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecipeCategory extends Model {
  protected $table = "recipe_categories";
  protected $guarded = [];
  protected $casts = [];


  public function articles() {
    return $this->belongsToMany("App\Recipe", "recipe_recipe_category", "recipe_category_id", "recipe_id")
      ->where("publish", true)
      ->withTimestamps();
  }
}
