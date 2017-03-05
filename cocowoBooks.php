<?php
	$dsn="mysql:host=localhost;dbname=ad104g1;charset=utf8;";
	$user="root";
	$password="1234";
	$options=array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn,$user,$password,$options);
?>
