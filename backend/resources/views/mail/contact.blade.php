<!doctype html>

<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <title>Contact Template - The Nutritional Bean</title>
</head>

<body>
  <h1>The Nutritional Bean</h1>
  <h2>Contact Mail</h2>

  <ul>
    <li>Name: {{ $name }}</li>
    <li>Email Address: {{ $email }}</li>
    <li>Phone Number: {{ $phone }}</li>
    <li>Subject: {{ $subject }}</li>
    <li>Privacy Policy Agreed: {{ $privacy }}</li>
  </ul>

  <h3>Message</h3>

  <p>{{ $msg }}</p>

  <hr />

  <small>Powered by BE Studio Mail Service, Copyrght &copy; 2019.</small>
</body>
</html>
