<?php

  include('conection.php');
  $sql = 'SELECT * FROM heroes';
  $data = $dbh->query($sql)->fetchALL();
  $array = array();
  // foreach ($data as $row) {
  //    $array.array_push($row);
  // }
  $res = json_encode($data, JSON_NUMERIC_CHECK);
  echo $res;
  $dbh = null;
 ?>
