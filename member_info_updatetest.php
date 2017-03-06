<?php
ob_start();
session_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>
<?php
try{
  $memNo = $_REQUEST["userno"];
  $memId = $_REQUEST["usermail"];
  $memPsw = $_REQUEST["userpsw"];
  // $memimg = $_REQUEST["userimg"];
  $memname = $_REQUEST["username"];
  $memoccu = $_REQUEST["useroccu"];
  $memsex = $_REQUEST["Yoursex"];
  $mempho = $_REQUEST["userpho"];
  $memimg = $_FILES["userimg"]["name"];
  if($memsex==0)
  {
    $memsex="男";
  }else
  {
    $memsex="女";
  }



  require_once("connectBooks.php");
  if($memimg!='')
  {
      $sql = "update member set mem_mail = :memId, mem_pwd =:memPsw, mem_img = :memimg, mem_name = :memname, mem_occu = :memoccu, mem_sex = :memsex, mem_pho = :mempho where mem_no = :memNo";
      $member = $pdo->prepare( $sql );
      $member->bindValue(":memNo" , $memNo);
      $member->bindValue(":memId" , $memId);
      $member->bindValue(":memPsw", $memPsw);
      $member->bindValue(":memimg", $memimg);
      $member->bindValue(":memname" , $memname);
      $member->bindValue(":memoccu", $memoccu);
      $member->bindValue(":memsex" , $memsex);
      $member->bindValue(":mempho", $mempho);

  }else
  {
     $sql = "update member set mem_mail = :memId, mem_pwd =:memPsw, mem_name = :memname, mem_occu = :memoccu, mem_sex = :memsex, mem_pho = :mempho where mem_no = :memNo";
      $member = $pdo->prepare( $sql );
      $member->bindValue(":memNo" , $memNo);
      $member->bindValue(":memId" , $memId);
      $member->bindValue(":memPsw", $memPsw);
      $member->bindValue(":memname" , $memname);
      $member->bindValue(":memoccu", $memoccu);
      $member->bindValue(":memsex" , $memsex);
      $member->bindValue(":mempho", $mempho);
  }




  $member->execute();
  echo '更改成功';

  echo $_FILES['userimg']['error'];
   if($_FILES['userimg']['error']>0){
  exit("檔案上傳失敗！");//如果出現錯誤則停止程式
  }
  $from = $_FILES["userimg"]["tmp_name"];

    //原始檔名(utf-8)
        $fileName = $_FILES["userimg"]["name"];

        //設定好資料夾,並轉碼為big5
    $to = "img/". mb_convert_encoding($fileName, "Big5","UTF-8");

    echo $from,"<br>";
    echo $to,"<br>";
    if(copy( $from, $to) ){
      echo "上傳成功<br>";
    }else{
      echo "error<br>";
    }



  // echo $memimg;
  //重定向瀏覽器
  header("Location: mem_page.html");
  //確保重定向後，後續代碼不會被執行
  exit;
}catch(PDOException $ex){
  echo "資料庫操作失敗，原因 : " , $ex->getMessage() , "<br>";
  echo "行號 : " , $ex->getLine() , "<br>";
}
?>
</body>
</html>
