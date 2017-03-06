<?php
try{
  require_once("connectBooks.php");
  // $sql = "select * from member where mem_name=:username";
  $sql = "select * from blog where blog_pop>=:pop";
  $member = $pdo->prepare( $sql );
  $member->bindValue(":pop", $_REQUEST["pop"]);


  $member->execute();
  $str="";
  $count=0;
  $temp =1;
  // $rowCount=$member->fetchColumn();
  if( $member->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    //取回一筆資料
    // $memRow = $member->fetch(PDO::FETCH_ASSOC);
    $str.="<div id='wowslider-container0'>
              <div class='ws_images' >
          <ul>";
    while($memRow = $member->fetch(PDO::FETCH_ASSOC))
    {


      $str.="<li><a href='#' class='linkGo'><img src='data0/images/{$memRow["blog_slider_img"]}' alt='index_img_01' title='{$memRow["blog_title"]}' id='wows0_{$count}'/></a></li>";


      $count++;

    }

    $str.="</ul></div>
          <div class='ws_bullets'><div>";

     require_once("PDOTEST.php");
  // $sql = "select * from member where mem_name=:username";
  $sql = "select * from blog where blog_pop>=:pop";
  $member = $pdo->prepare( $sql );
  $member->bindValue(":pop", $_REQUEST["pop"]);


  $member->execute();

    while($memRow = $member->fetch(PDO::FETCH_ASSOC))
    {

       $str.="<a href='#' title='{$memRow["blog_title"]}'><span>{$temp}</span></a>";
      $temp++;
    }


    $str.="</div></div><div class='ws_script' style='position:absolute;left:-99%'><a href='http://wowslider.com/vi'>image slider</a> by WOWSlider.com v8.7</div>
          <div class='ws_shadow'></div>
        ";
    //送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
