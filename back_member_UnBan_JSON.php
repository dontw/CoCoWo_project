<?php
try{
  require_once("PDOTEST.php");
  // $sql = "delete from coorder where ord_no = :ordno";
  
  
    $sql = "update member set mem_status=0 where mem_no=:memno";
 
  
  $member = $pdo->prepare( $sql );
  // $member->bindValue(":userno", $_REQUEST["userno"]);
  $member->bindValue(":memno", $_REQUEST["memno"]);
  
  
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