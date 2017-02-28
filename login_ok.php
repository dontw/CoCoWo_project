<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>login_ok!</h1>
  <?php
  session_start();
  echo $_SESSION["mem_mail"].'<br>';
  echo $_SESSION["mem_pwd"].'<br>';
  echo $_SESSION["mem_name"].'<br>';
  echo '<a href="post_space_input.php">input</a>'


   ?>
</body>
</html>
