<?php
$user = 'root';
$pass = 'root';
$dbname = 'test';
try {
    $dbh = new PDO('mysql:host=localhost;dbname='.$dbname, $user, $pass);
} catch (\Exception $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}


?>
