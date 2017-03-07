<?php

$str="";

try{
  require_once("PDOTEST.php");
  $sql = "select * from blog where blog_no = :blogno";
    $member = $pdo->prepare( $sql );
     $member->bindValue(":blogno", $_REQUEST["blogno"]);
    $member->execute();
    // $str = '成功';
    
    //送出json字串
    // echo json_encode( $str );
     if( $member->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
              echo "empty";
      }else
      {

        $memRow = $member->fetch(PDO::FETCH_ASSOC);

        $str.="<form action='back_blog_update.php' method='post' enctype='multipart/form-data'>
            <div class='row'>
              <div class='col-md-6 spaceInfoPhoto'>
                <input type='hidden' name='blogno' value='{$memRow["blog_no"]}'></input>
                <div class='spacecontext'>";
        if($memRow["blog_img"]!=null)
        {
          $str.="<img src='img/{$memRow["blog_img"]}' class='preview'>";  
        }else
        {
          $str.="<img src='img/cocowork_logo.svg' class='preview'>";   
        }     
                
        $str.="<input type='file' name='blogimg' class='upl'>
                </div>
              </div>

              <div class='col-sm-6'>
                <div class='detailItem'>
                  <h4>窩誌標題:</h4>
                  <input style='width:100%' type='text' name='blogtitle' value='{$memRow["blog_title"]}'>
                </div>
                
                <div class='detailItem'>
                  <h4>窩誌內文:</h4>
                  <textarea name='blogcontent' style='width:100%; height:235px'>{$memRow["blog_content"]}</textarea>
                </div>
                
              </div>
            </div>
            
            <div class='row'>
              
              <div style='text-align:center' class='col-sm-12'>
                <input type='submit' style='width:50%' class='button yeschange dark-blue' value='確認修改'>
                
              </div>
            </div>


            </form>";
           //送出json字串
    echo json_encode( $str );
        
      }   
  	
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}





?>