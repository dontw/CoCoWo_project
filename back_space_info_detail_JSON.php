<?php

$str="";
$count = 0;
try{
  require_once("PDOTEST.php");
  $sql = "select * from cospace a JOIN member b on a.mem_no = b.mem_no
join photo c on a.spa_no = c.spa_no where a.spa_no = :spano";
    $cospace = $pdo->prepare( $sql );
    $cospace->bindValue(":spano", $_REQUEST["spano"]);
    $cospace->execute();
    // $str = '成功';

    //送出json字串
    // echo json_encode( $str );
     if( $cospace->rowCount() == 0 ){ //找不到
              //做另一個拉
             echo "empty";

      }else
      {

        while($spaRow = $cospace->fetch(PDO::FETCH_ASSOC))
        {
          if($count==0)
          {
            $str.="<div class='row'>
              <div class='col-sm-6'>
                <div class='detailItem'>
                  <h4>會員帳號:</h4>
                  <p>{$spaRow["mem_mail"]}</p>
                </div>

                <div class='detailItem'>
                  <h4>空間名稱:</h4>
                  <p>{$spaRow["spa_name"]}</p>
                </div>
                <div class='detailItem'>
                  <h4>空間地址:</h4>
                  <p>{$spaRow["spa_addr"]}</p>
                </div>
              </div>
              <div class='detailItem'>
                <h4>空間價格:</h4>
                <p>{$spaRow["spa_price"]}</p>
              </div>
              <div class='detailItem'>
                <h4>人數上限:</h4>
                <p>{$spaRow["spa_plimit"]}</p>
              </div>
              <div class='detailItem'>
                <h4>開放時間:</h4>
                <p>{$spaRow["spa_time"]}</p>
              </div>
            </div>

            <div class='row'>
              <div class='col-md-12 spacecontext'>
                <h4>空間內文:</h4>
                <p>{$spaRow["spa_info"]}</p>
              </div>
            </div>
            <div class='spaceInfoPhoto row'>
            <div class='col-md-12 spacecontext'>

              <h4>空間圖片:</h4>";
            $count=1;
          }


          $str.="<img src='{$spaRow["pho_name"]}'>";
        }

        $str.="</div>
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
