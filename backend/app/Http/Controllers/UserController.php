<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class UserController extends Controller {
  public function getCsrfToken(): JsonResponse {
    $response = [
      "token" => encrypt(csrf_token())
    ];
    return response()->json($response, 200);
  }
}
