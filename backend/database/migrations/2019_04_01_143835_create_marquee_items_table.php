<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarqueeItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marquee_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedSmallInteger("order");
            $table->string("text", 128);
            $table->boolean("link")
              ->default(false);
            $table->string("url", 256)
              ->nullable();
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
        Schema::dropIfExists('marquee_items');
    }
}
