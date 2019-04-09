<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogTag extends Model {
  protected $table = "blog_tags";
  protected $guarded = [];
  protected $casts = [];


  public function articles() {
    return $this->belongsToMany("App\BlogArticle", "blog_article_tag", "blog_tag_id", "blog_article_id")
      ->withTimestamps();
  }
}
