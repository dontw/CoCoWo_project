<?php
try{
  require_once("connectBooks.php");
  $sql = "insert into member(mem_no, mem_mail, mem_pwd, mem_img, mem_name, mem_pho, mem_sex, mem_occu)
        value(NULL, :usermail, :userpsw, '', :username, :userpho, :usersex, :useroccu)";
    $member = $pdo->prepare( $sql );
    $member->bindValue("usermail", $_REQUEST["usermail"]);
    $member->bindValue("userpsw", $_REQUEST["userpsw"]);
    $member->bindValue("username", $_REQUEST["username"]);
    $member->bindValue("userpho", $_REQUEST["userpho"]);
    $member->bindValue("usersex", $_REQUEST["usersex"]);
    $member->bindValue("useroccu", $_REQUEST["useroccu"]);


    $member->execute();
    // $str = '成功';
    echo "註冊成功,請登入";

    //送出json字串
    // echo json_encode( $str );

}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}
?>
