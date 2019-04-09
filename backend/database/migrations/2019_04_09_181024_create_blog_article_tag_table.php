<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogArticleTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_article_tag', function (Blueprint $table) {
            $table->bigIncrements('id');
          $table->unsignedInteger("article");
          $table->foreign("article")
            ->references("id")
            ->on("blog_articles");
          $table->unsignedInteger("tag");
          $table->foreign("tag")
            ->references("id")
            ->on("blog_tags")
            ->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_article_tag');
    }
}
