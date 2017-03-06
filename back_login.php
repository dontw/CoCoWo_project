<?php

try{
  require_once("connectBooks.php");
  $sql = "select * from admin where adm_id=:adm_id and adm_pwd=:adm_pwd";
  $admin = $pdo->prepare($sql);
  $admin->bindValue(":adm_id", $_REQUEST["adm_id"]);
  $admin->bindValue(":adm_pwd", $_REQUEST["adm_pwd"]);

  $admin->execute();

  if( $admin->rowCount() == 0 ){
    echo "no";
  }else{
    echo "yes";

  }
}catch(PDOException $e){
  echo $e->getMessage();
}

 ?>
