<?php
include "connect.php";
$username = $_POST["uname"];
$password = $_POST["psw"];
$re_password = $_POST["re-psw"];
if (hash("sha512", $password)!= hash("sha512", $re_password)) {
  echo "RETARD!!!!";
}
else {
  $sql = " INSERT INTO `users`(`user_name`,`user_pass`) VALUES ('" . mysqli_real_escape_string($conn, $username). "
','". hash('sha512', $password)."')";
$result = mysqli_query($conn,$sql);
if (!$result) {
  echo "database has autism today";
  echo mysqli_error($conn);
}else {
  echo "autism created";
}
}
 ?>
