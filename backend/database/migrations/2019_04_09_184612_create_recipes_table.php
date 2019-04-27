<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->bigIncrements('id');
          $table->unsignedBigInteger("author")
            ->nullable();
          $table->foreign("author")
            ->references("id")
            ->on("users");
          $table->string("title", 512);
          $table->string("permalink", 512)
            ->nullable();
          $table->string("poster", 256)
            ->nullable();
          $table->text("ingredients")
            ->nullable();
          $table->integer("servings")
            ->default(1);
          $table->mediumText("method")
            ->nullable();
          $table->mediumText("content")
            ->nullable();
          $table->string("excerpt", 512)
            ->nullable();
          $table->boolean("publish")
            ->default(false);
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
        Schema::dropIfExists('recipes');
    }
}
