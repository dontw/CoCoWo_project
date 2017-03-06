<?php
try{
  require_once("connectBooks.php");
  $sql = "delete from coorder where ord_no = :ordno";


    // $sql = "update coorder set ord_status=2 where ord_no=:ordno;";


  $member = $pdo->prepare( $sql );
  // $member->bindValue(":userno", $_REQUEST["userno"]);
  $member->bindValue(":ordno", $_REQUEST["ordno"]);


  $member->execute();
  // $str="取消成功";
  $count =1;
  $rowCount=$member->fetchColumn();
  if( $member->rowCount() == 0 ){ //找不到
    // 傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    // 取回一筆資料
    // $memRow = $member->fetch(PDO::FETCH_ASSOC);


    // 送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
