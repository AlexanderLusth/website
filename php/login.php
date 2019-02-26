<?php
include "connect.php";
$username = $_POST["uname"];
$password = $_POST["psw"];
$sql = "SELECT `user_name`, `user_pass` FROM `users` WHERE `user_name` = '" . mysqli_real_escape_string($conn, $username) . "'
AND `user_pass` = '" . hash('sha512',$password) . "'";
$result = mysqli_query($conn, $sql);
if (!$result) {
  echo "autism outbreak";
}else {

  if (mysqli_num_rows($result) == 0){
    echo "U retarded? ";
  }else {
    echo "welcome " . $username . " UwU";
  }
}
 ?>
