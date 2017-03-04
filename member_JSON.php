<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from member where mem_mail=:username and mem_pwd=:userpsw";
  $blog = $pdo->prepare($sql);
  $blog->bindValue(":username", $_REQUEST["username"]);
  $blog->bindValue(":userpsw", $_REQUEST["userpsw"]);

  $blog->execute();
  $str="";

  if( $blog->rowCount() == 0 ){

    echo "empty";
  }else{


    while($blogRow = $blog->fetch(PDO::FETCH_ASSOC))
    {
      $str.='|'.$blogRow['mem_no'].'|';
      $str.=$blogRow['mem_name'];

    }

    echo json_encode($str);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
