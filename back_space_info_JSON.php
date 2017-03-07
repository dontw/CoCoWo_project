<?php

$str="";

try{
  require_once("PDOTEST.php");
  $sql = "select * from cospace where spa_status = 2";
    $cospace = $pdo->prepare( $sql );
    $cospace->execute();
    // $str = '成功';
    
    //送出json字串
    // echo json_encode( $str );
     if( $cospace->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
              echo "empty";
      }else
      {
        $str.="<div id='tab1' class='tab_content'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th>空間編號</th>
                  <th>空間名稱</th>
                  <th>訂單內容</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>";
        while($spaRow = $cospace->fetch(PDO::FETCH_ASSOC))
        {
         $str.="<tr class='order_list'>
                  <td class='spaceNo'><a href=''>{$spaRow["spa_no"]}</a></td>
                  <td><a href=''>{$spaRow["spa_name"]}</a></td>
                  <td>
                    <table class='insert'>
                      <tr>
                        <td>人數上限：{$spaRow["spa_plimit"]} 金額：{$spaRow["spa_price"]}</td>
                      </tr>
                      <tr>
                        <td>開放時間:<p class='minp'>{$spaRow["spa_time"]}</p></td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <a href='#' style='width:95%' class='button yellow detail' >詳情</a>
                  </td>
                </tr>
                ";
        }
              
        $str.="</tbody>
            </table>
          </div>";

        
      }   
  	
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}

try{
  require_once("PDOTEST.php");
  $sql = "select * from cospace where spa_status = 0";
    $cospace = $pdo->prepare( $sql );
    $cospace->execute();
    // $str = '成功';
    
    //送出json字串
    // echo json_encode( $str );
     if( $cospace->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
              

            $str.="<div id='tab2' class='tab_content'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th>空間編號</th>
                  <th>空間名稱</th>
                  <th>訂單內容</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>";
       
          $str.="<tr class='order_list'>
                </tr>
                ";
        
              
        $str.="</tbody>
            </table>
            <div><p  style='text-align:center;color:#fff'>無空間紀錄...</p></div>
          </div>";




      }else
      {
        $str.="<div id='tab2' class='tab_content'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th>空間編號</th>
                  <th>空間名稱</th>
                  <th>訂單內容</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>";
        while($spaRow = $cospace->fetch(PDO::FETCH_ASSOC))
        {
          $str.="<tr class='order_list'>
                  <td class='spaceNo'><a href=''>{$spaRow["spa_no"]}</a></td>
                  <td><a href=''>{$spaRow["spa_name"]}</a></td>
                  <td>
                    <table class='insert'>
                      <tr>
                        <td>人數上限：{$spaRow["spa_plimit"]} 金額：{$spaRow["spa_price"]}</td>
                      </tr>
                      <tr>
                        <td>開放時間:<p class='minp'>{$spaRow["spa_time"]}</p></td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <a href='#' style='width:45%' class='button pass dark-blue' >通過</a>
                    <a href='#' style='width:45%' class='button notPass red' >不通過</a>
                    <a href='#' style='width:95%' class='button yellow detail' >詳情</a>
                  </td>
                </tr>
                ";
        }
              
        $str.="</tbody>
            </table>
          </div>";

        
      }   
      echo json_encode( $str );
    
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}




?>