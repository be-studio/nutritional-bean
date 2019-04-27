<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class MailController extends Controller {
  public function sendMail(Request $request) {
    $name = $request->get("name");
    $email = $request->get("email");
    $subject = $request->get("subject");

    $privacyString = $request->get("privacy") ? "Yes" : "No";

    $data = [
      "name" => $request->get("name"),
      "email" => $request->get("email"),
      "phone" => $request->get("phone"),
      "subject" => $request->get("subject"),
      "msg" => $request->get("message"),
      "privacy" => $privacyString
    ];

    try {
      Mail::send("mail.contact", $data, function($mail) use($name, $email, $subject) {
        $mail
          ->to("eric.lew@icloud.com", "The Nutritional Bean")
          ->from($email, $name)
          ->subject("[The Nutritional Bean] Contact Form Message: '" . $subject . "'");
      });

      return response()->json("SUCCESS: Contact mail delivered.", 200);
    } catch(\Exception $error) {
      return response()->json("ERROR: Unable to deliver contact mail. Details: '" . $error . "'", 500);
    }
  }
}
