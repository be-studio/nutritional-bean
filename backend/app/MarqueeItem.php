<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MarqueeItem extends Model {
  protected $table = "marquee_items";
  protected $guarded = [];
  protected $casts = [
    "link" => "integer"
  ];
}
