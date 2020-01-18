<?php

namespace App\Http\Controllers;

use Storage;
use Illuminate\Http\JsonResponse;


class VersionController extends Controller {
  public function getVersion() {
    $json = Storage::disk("local")->get("version.json");
    $json = json_decode($json, true);

    return response()->json(
      [
        "schemaVersion" => 1,
        "label" =>"BE Nutrition Bean",
        "message" => $json["version"],
        "color" => "green"
      ]
    );
  }
}
