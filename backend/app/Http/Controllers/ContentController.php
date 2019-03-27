<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Content;

class ContentController extends Controller {
  public function getContent($type) {
    $content = Content::where("type", $type)->get();

    return response()->json($content, 200);
  }
}
