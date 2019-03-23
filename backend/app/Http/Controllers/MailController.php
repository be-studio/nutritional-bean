<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class MailController extends Controller {
  public function sendMail(Request $request) {
    $name = $request->name;
    $email = $request->email;
    $subject = $request->subject;

    $data = [
      "name" => $request->name,
      "email" => $request->email,
      "phone" => $request->phone,
      "subject" => $request->subject,
      "message" => $request->message,
      "privacy" => $request->privacy
    ];

    try {
      Mail::send("mail.contact", $data, function($message) use($name, $email, $subject) {
        $message
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
