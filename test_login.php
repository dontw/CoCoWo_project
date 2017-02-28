<?php
session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Testing_login</title>
  </head>
  <body>
    <?php
  //=====連資料庫，做測試
  try{
  	require_once("connectBooks.php");
  	$sql = "select * from member where mem_mail = :mem_mail and mem_pwd = :mem_pwd";
  	$member = $pdo->prepare($sql);
  	$member -> bindValue(":mem_mail",$_REQUEST["mem_mail"]);
  	$member -> bindValue(":mem_pwd",$_REQUEST["mem_pwd"]);
  	$member -> execute();

  	if( $member->rowCount() !=0 ){
  	    $memRow = $member->fetch(PDO::FETCH_ASSOC);

  		//登入成功，將登入者資訊寫入session
  		$_SESSION["mem_mail"] = $memRow["mem_mail"];
  		$_SESSION["mem_name"] = $memRow["mem_name"];
      $_SESSION["mem_pwd"] = $memRow["mem_pwd"];
      $_SESSION["mem_no"] = $memRow["mem_no"];

          //檢查是否從別支程式轉來
          if( isset( $_SESSION["where"]) === true){
          	header("Location:" . $_SESSION["where"]);	//若有從其他php頁面轉來則導回該php頁面
          }else{
          	echo $memRow["mem_name"] , "您好<br>";
          	echo "<a href='login_ok.php'>會員專區</a>";
            echo '<a href="post_space_input.php">input</a>';
          }

  	}else{
  		// echo "查無此帳密，請<a href='sessionLogin.html'>重新登入</a>";
  		echo "<script>alert('查無此帳密,請重新登入');location.href='testlogin.html';</script>";
  	}
  }catch(PDOException $ex){
  	echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
  	echo "行號：",$ex->getLine(),"<br>";
  }
  ?>
  </body>
</html>
