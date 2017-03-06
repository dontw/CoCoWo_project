<?php

try{
  require_once("PDOTEST.php");
  $sql = "insert into message
(msg_no, blog_no, mem_no, msg_content, msg_report, msg_recount)
value(NULL, :blogno, :userno, :text, 0, 0)";
    $member = $pdo->prepare( $sql );
    $member->bindValue("blogno", $_REQUEST["blogno"]);
    $member->bindValue("userno", $_REQUEST["userno"]);
    $member->bindValue("text", $_REQUEST["text"]);
   
    
    $member->execute();
    // $str = '成功';
    echo "留言成功";
    
    //送出json字串
    // echo json_encode( $str );
  	
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}
?>