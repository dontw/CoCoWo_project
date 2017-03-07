<?php

$str="";

try{
  require_once("PDOTEST.php");
  $sql = "select * from member ";
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
        $str.="<div id='tab2' class='tab_content'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th>會員編號</th>
                  <th>會員帳號</th>
                  <th>會員部分資訊</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>";
        while($memRow = $member->fetch(PDO::FETCH_ASSOC))
        {
         $str.="<tr class='order_list'>
                  <td class='memNo'><a href=''>{$memRow["mem_no"]}</a></td>
                  <td><a href=''>{$memRow["mem_name"]}</a></td>
                  <td>
                    <table class='insert'>
                      <tr>
                        <td>名稱：{$memRow["mem_name"]} 性別：{$memRow["mem_sex"]}</td>
                      </tr>
                      <tr>
                        <td>電話:<p class='minp'>{$memRow["mem_pho"]}</p></td>
                      </tr>
                    </table>
                  </td>";
          if($memRow["mem_status"]==0)
          {
             $str.="<td>
                    <a href='#' style='width:45%' class='button detail dark-blue' >查看</a>
                    <a href='#' style='width:45%' class='button ban red' >停權</a>
                  </td>";
                  
          }else
          {
             $str.="<td>
                    <a href='#' style='width:45%' class='button detail dark-blue' >查看</a>
                    <a href='#' style='width:45%' class='button unBan yellow' >恢復</a>
                  </td>";
          }
         
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