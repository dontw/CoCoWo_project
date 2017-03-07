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
  $blogno = $_REQUEST["blogno"];
  $blogimg = $_FILES["blogimg"]["name"];
  $blogtitle = $_REQUEST["blogtitle"];
  
  $blogcontent = $_REQUEST["blogcontent"];
  
 

  require_once("PDOTEST.php");
  if($memimg!='')
  {
      $sql = "update blog set blog_title = :blogtitle, blog_img =:blogimg, blog_content = :blogcontent where blog_no = :blogno";
      $member = $pdo->prepare( $sql );
      $member->bindValue(":blogno" , $blogno);
      $member->bindValue(":blogimg" , $blogimg);
      $member->bindValue(":blogtitle", $blogtitle);
      $member->bindValue(":blogcontent", $blogcontent);
      
      
  }else
  {
     $sql = "update blog set blog_title = :blogtitle, blog_content = :blogcontent where blog_no = :blogno";
      $member = $pdo->prepare( $sql );
       $member->bindValue(":blogno" , $blogno);
      $member->bindValue(":blogtitle", $blogtitle);
      $member->bindValue(":blogcontent", $blogcontent);
     
  }
  
  
  
  
  $member->execute();
  echo '更改成功';
  
  echo $_FILES['blogimg']['error'];
   if($_FILES['blogimg']['error']>0){
  echo("檔案上傳失敗！");//如果出現錯誤則停止程式
  }
  $from = $_FILES["blogimg"]["tmp_name"];

    //原始檔名(utf-8)
        $fileName = $_FILES["blogimg"]["name"];

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
  header("Location: back_blog.html"); 
  //確保重定向後，後續代碼不會被執行 
  exit;
}catch(PDOException $ex){
  echo "資料庫操作失敗，原因 : " , $ex->getMessage() , "<br>";
  echo "行號 : " , $ex->getLine() , "<br>";
}
?>
</body>
</html>