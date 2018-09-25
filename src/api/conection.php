<?php
$user = 'root';
$pass = 'root12';
$dbname = 'test';
$status = false;
try {
    $dbh = new PDO('mysql:host=localhost;dbname='.$dbname, $user, $pass);
    $status = true;
} catch (\Exception $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}


?>
