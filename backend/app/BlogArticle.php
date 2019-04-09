<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogArticle extends Model {
  protected $table = "blog_articles";
  protected $guarded = [];
  protected $casts = [];


  public function categories() {
    return $this->belongsToMany("App\BlogCategory", "blog_article_category", "blog_article_id", "blog_category_id")
      ->withTimestamps();
  }


  public function tags() {
    return $this->belongsToMany("App\BlogTag", "blog_article_tag", "blog_article_id", "blog_tag_id")
      ->withTimestamps();
  }
}
