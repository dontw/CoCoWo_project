<?php

$str="";

try{
  require_once("PDOTEST.php");
  $sql = "select * from blog";
    $member = $pdo->prepare( $sql );
    $member->execute();
    // $str = '成功';
    
    //送出json字串
    // echo json_encode( $str );
     if( $member->rowCount() == 0 ){ //找不到
              //傳回空的JSON字串
              echo "empty";
      }else
      {
        $str.="<div id='tab1' class='tab_content'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th>窩誌編號</th>
                  <th>窩誌標題</th>
                  <th>作者</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>";
        while($memRow = $member->fetch(PDO::FETCH_ASSOC))
        {
         $str.="<tr class='order_list'>
                  <td class='blogNo'>
                    <a href=''>{$memRow["blog_no"]}</a>
                  </td>
                  <td> 
                    <a href=''>{$memRow["blog_title"]}</a>
                  </td>
                  <td>
                    <a href=''>Heisenberg</a>
                  </td>
                  <td>
                    <a href='#' style='width:90%' class='button change dark-blue' >修改</a>
                  </td>
                ";
          
           
        
          $str.=" </tr>";     
      
        }
              
        $str.="</tbody>
            </table>
          </div>";
           //送出json字串
    echo json_encode( $str );
        
      }   
  	
}catch(PDOException $e){
  echo "資料庫操作失敗,原因：",$e->getMessage(),"<br>";
    echo "行號：",$e->getLine(),"<br>";
}





?>