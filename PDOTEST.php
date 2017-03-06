<?php
    try{
    	$dsn ="mysql:host:localhost;port=3333;dbname=ad104g1;charset=utf8";
    	$user="root";
    	$password="1234";
      $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
    	$pdo = new PDO( $dsn, $user, $password, $options);

    }catch(PDOException $ex){
      echo "資料庫操作失敗，原因 : " , $ex->getMessage() , "<br>";
      echo "行號 : " , $ex->getLine() , "<br>";
    }
  ?>
