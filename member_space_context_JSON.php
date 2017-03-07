<?php
try{
  require_once("PDOTEST.php");


    $sql = "select * from cospace where spa_no = :spano";


  $member = $pdo->prepare( $sql );
  // $member->bindValue(":userno", $_REQUEST["userno"]);
  $member->bindValue(":spano", $_REQUEST["spano"]);


  $member->execute();
  $str="";
  $count =1;

  if( $member->rowCount() == 0 ){ //找不到
    // 傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    // 取回一筆資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);

    $str.="
      <div class='lightbox'>
        <div class='closeBox' >
          x
        </div>
        <h3>訂單詳情</h3>
        <form>
          <div>
            <h4>空間名稱:</h4>
            <p>{$memRow["spa_name"]}</p>
          </div>
          <div>

           <div>
            <h4>空間地址:</h4>
            <p>{$memRow["spa_addr"]}</p>
          </div>
            <h4>開放時間:</h4>
            <p>{$memRow["spa_time"]}</p>
          </div>
          <div>
            <h4>人數上限:</h4>
            <p>{$memRow["spa_plimit"]}</p>
          </div>
          <div>
            <h4>金額:</h4>
            <p>{$memRow["spa_price"]}</p>
          </div>
           <div>
            <h4>空間訊息:</h4>
            <p>{$memRow["spa_info"]}</p>
          </div>

          <div class='userbutton'>
            <a id='closeButton' class='button red' href='#'>關閉</a>
          </div>
        </form>
        </div>";

    // 送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
