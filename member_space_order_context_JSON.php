<?php
try{
  require_once("connectBooks.php");


    $sql = "select * from coorder a join member b on a.mem_no = b.mem_no join cospace c on a.spa_no = c.spa_no where ord_no = :ordno";


  $member = $pdo->prepare( $sql );
  // $member->bindValue(":userno", $_REQUEST["userno"]);
  $member->bindValue(":ordno", $_REQUEST["ordno"]);


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
        <h2>訂單詳情</h2>
        <form>
          <div>
            <h4>預訂人:</h4>
            <p>{$memRow["mem_name"]}</p>
          </div>
          <div>
            <h4>預訂空間:</h4>
            <p>{$memRow["spa_name"]}</p>
          </div>
          <div>
            <h4>預訂時間:</h4>
            <p>{$memRow["ord_daterange"]}</p>
          </div>
          <div>
            <h4>價格:</h4>
            <p>{$memRow["ord_money"]}</p>
          </div>
          <div>
            <h4>人數:</h4>
            <p>{$memRow["ord_man"]}</p>
          </div>
          <div>
            <h4>其他需求:</h4>
            <p>{$memRow["ord_note"]}</p>
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
