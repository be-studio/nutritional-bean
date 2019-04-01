<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\MarqueeItem;

class MarqueeController extends Controller {
  public function getMarqueeItems() {
    $items = MarqueeItem::orderBy("order")->get();

    return response()->json($items, 200);
  }
}
