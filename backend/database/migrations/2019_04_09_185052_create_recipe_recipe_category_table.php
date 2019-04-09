<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipeRecipeCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_recipe_category', function (Blueprint $table) {
            $table->bigIncrements('id');
          $table->unsignedBigInteger("recipe");
          $table->foreign("recipe")
            ->references("id")
            ->on("recipes");
          $table->unsignedBigInteger("category");
          $table->foreign("category")
            ->references("id")
            ->on("recipe_categories")
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
        Schema::dropIfExists('recipe_recipe_category');
    }
}
