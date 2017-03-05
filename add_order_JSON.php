<?php
try{
  require_once("connectBooks.php");

  $sql = "INSERT INTO coorder(spa_no,
                              mem_no,
                              ord_daterange,
                              ord_man,
                              ord_name,
                              ord_phone,
                              ord_mail,
                              ord_note,
                              ord_status,
                              ord_money
                              )

                       VALUES(:spa_no,
                              :mem_no,
                              :ord_daterange,
                              :ord_man,
                              :ord_name,
                              :ord_phone,
                              :ord_mail,
                              :ord_note,
                              :ord_status,
                              :ord_money)";

  $ord = $pdo->prepare($sql);

  $ord->bindValue(":ord_daterange", $_REQUEST["ord_daterange"]);
  $ord->bindValue(":ord_man", $_REQUEST["ord_man"]);
  $ord->bindValue(":ord_name", $_REQUEST["ord_name"]);
  $ord->bindValue(":ord_phone", $_REQUEST["ord_phone"]);
  $ord->bindValue(":ord_mail", $_REQUEST["ord_mail"]);
  $ord->bindValue(":ord_note", $_REQUEST["ord_note"]);
  $ord->bindValue(":ord_status", 0);
  $ord->bindValue(":mem_no", $_REQUEST["mem_no"]);
  $ord->bindValue(":spa_no", $_REQUEST["spa_no"]);
  $ord->bindValue(":ord_money", (int)$_REQUEST["ord_money"]);



  $ord->execute();





}catch(PDOException $e){
  echo $e->getMessage();
}
?>
