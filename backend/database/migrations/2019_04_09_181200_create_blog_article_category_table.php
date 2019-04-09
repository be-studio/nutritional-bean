<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogArticleCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_article_category', function (Blueprint $table) {
            $table->bigIncrements('id');
          $table->unsignedBigInteger("article");
          $table->foreign("article")
            ->references("id")
            ->on("blog_articles");
          $table->unsignedBigInteger("category");
          $table->foreign("category")
            ->references("id")
            ->on("blog_categories")
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
        Schema::dropIfExists('blog_article_category');
    }
}
