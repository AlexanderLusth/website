<?php
$servername = "localhost";
$dbname = "login_user";
$serveruser = "root";
$serverpass = "";
$conn = new mysqli($servername, $serveruser, $serverpass, $dbname);

if (!$conn) {
  echo mysqli_connect_error();
}

 ?>
