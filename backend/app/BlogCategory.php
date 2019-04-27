<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model {
  protected $table = "blog_categories";
  protected $guarded = [];
  protected $casts = [];


  public function articles() {
    return $this->belongsToMany("App\BlogArticle", "blog_article_category", "blog_category_id", "blog_article_id")
      ->where("publish", true)
      ->withTimestamps();
  }
}
