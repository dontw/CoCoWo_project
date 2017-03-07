<?php

$str="";

try{
  require_once("PDOTEST.php");
  $sql = "select * from member where mem_no = :memno";
    $member = $pdo->prepare( $sql );
    $member->bindValue(":memno", $_REQUEST["memno"]);
    $member->execute();
    // $str = '成功';
    
    //送出json字串
    // echo json_encode( $str );
     if( $member->rowCount() == 0 ){ //找不到
              //做另一個拉
             echo "empty";
    
      }else
      {
       
        $memRow = $member->fetch(PDO::FETCH_ASSOC);


            $str.="<div class='row'>
            <div class='col-md-2 spaceInfoPhoto'>
              <div class='spacecontext'>
                
                
                  <img src='img/{$memRow["mem_img"]}'>
                  
                
              </div>
            </div>
            
            <div class='col-sm-10'>
              <div class='col-sm-6'>
                <div class='detailItem'>
                  <h4>會員帳號:</h4>
                  <p>{$memRow["mem_mail"]}</p>
                </div>
                
                <div class='detailItem'>
                  <h4>會員名稱:</h4>
                  <p>{$memRow["mem_name"]}</p>
                </div>
                <div class='detailItem'>
                  <h4>會員性別:</h4>
                  <p>{$memRow["mem_sex"]}</p>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class='detailItem'>
                  <h4>會員電話:</h4>
                  <p>{$memRow["mem_pho"]}</p>
                </div>
                <div class='detailItem'>
                  <h4>會員職業:</h4>
                  <p>{$memRow["mem_occu"]}</p>
                </div>
                
              </div>
            </div>
          </div>";
           

         

         //送出json字串
    echo json_encode( $str );
      }   
  	
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}





?>