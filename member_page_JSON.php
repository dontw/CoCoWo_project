<?php
try{
  require_once("connectBooks.php");
  // $sql = "select * from member where mem_name=:username";
  // $sql = "select *, sum(ord_man) totalman, sum(ord_money) totalmoney, count(distinct spa_info) spacenum, count(distinct ord_no) ordernum from member a join coorder b on a.mem_no = b.mem_no = (select mem_no from member where mem_no=:userno)
  //     join cospace c on b.spa_no = c.spa_no";
//   $sql="select * from member a join cospace b on a.mem_no = b.mem_no
// join coorder c on b.spa_no = c.spa_no
// join member d on c.mem_no = d.mem_no where a.mem_no =:userno";
  $sql="select *
  from member a join cospace b on a.mem_no = b.mem_no where a.mem_no =:userno";
  $member = $pdo->prepare( $sql );
  $member->bindValue(":userno", $_REQUEST["userno"]);


  $member->execute();
  $str="";
  // $rowCount=$member->fetchColumn();
  if( $member->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    try{
      require_once("PDOTEST.php");
      $sql2 = "select *, count(*) ordernum
  from member a join coorder b on a.mem_no = b.mem_no where a.mem_no =:userno";
      $empty = $pdo->prepare( $sql2 );
      $empty->bindValue(":userno", $_REQUEST["userno"]);
      $empty->execute();
      if( $empty->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串

        echo "empty";
      }else
      { //找得到
    //取回一筆資料
        $emRow = $empty->fetch(PDO::FETCH_ASSOC);

        $str.="<div class='container'>
          <div class='memPageAll'>

            <div class='col-xs-8 col-sm-3 memNavAll'>
              <nav class='navbar navbar-default' role='navigation'>
                <div class='navbar-header memNavDisAll'>
                  <button type='button' class='navbar-toggle navbar-left' data-toggle='collapse' data-target='.navbar-ex1-collapse'>
                    <span class='sr-only'>選單切換</span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                  </button>

                </div>";
                $str.="<div class='collapse navbar-collapse navbar-ex1-collapse memNavNoneAll'>";
                $str.="<ul class='nav navbar-nav memNavNone'>
                <li><img src='img/{$emRow["mem_img"]}'></li>
                <li class='active'><a href='mem_page.html'>會員名稱</a></li>
                <li><a href='mem_info_update.html'>會員資料更改</a></li>
                <li><a href='mem_order.html'>會員訂單管理</a></li>
                <li><a href='mem_space_info.html'>會員空間資訊管理</a></li>
                <li><a href='mem_space_order.html'>會員空間訂單管理</a></li>
                <li><a href='#' id='logout'>登出</a></li>
              </ul></div>";
              $str.="</nav>
            </div>

            <div class='col-xs-12 col-sm-9 mempageDetail'>
              <div class='memResult'>
                <div class='memResultContext'>
                  <h1>{$emRow["mem_name"]}! 歡迎來到可可窩!</h1>
                  <p>您在這總共預訂了<span class='spanBlue'>{$emRow["ordernum"]}</span> 次空間</p>

                </div>
              </div>
              <img src='img/mempage.png'>
            </div>
          </div>
        </div>";

      }
      echo json_encode( $str );

    }catch(PDOException $e){
      echo $e->getMessage();
    }


  }else{ //找得到
    //取回一筆資料
    // $memRow = $member->fetch(PDO::FETCH_ASSOC);

    // while($memRow = $member->fetch(PDO::FETCH_ASSOC))
    // {
    try{
      require_once("PDOTEST.php");

      $sql="select *,count(case when(c.mem_no=:userno) then 1 else null end) ordernum, sum(ord_man) totalman, sum(ord_money) totalmoney, count(distinct spa_info) spacenum from member a join cospace b on a.mem_no = b.mem_no
      join coorder c on b.spa_no = c.spa_no where a.mem_no =:userno
      ";
      $membertwo = $pdo->prepare( $sql );
      $membertwo->bindValue(":userno", $_REQUEST["userno"]);


      $membertwo->execute();
      $str="";

        if( $membertwo->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
          echo "empty";
        }else{

           $memRowtwo = $membertwo->fetch(PDO::FETCH_ASSOC);

          $str.="<div class='container'>
          <div class='memPageAll'>

            <div class='col-xs-8 col-sm-3 memNavAll'>
              <nav class='navbar navbar-default' role='navigation'>
                <div class='navbar-header memNavDisAll'>
                  <button type='button' class='navbar-toggle navbar-left' data-toggle='collapse' data-target='.navbar-ex1-collapse'>
                    <span class='sr-only'>選單切換</span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                  </button>

                </div>";
                $str.="<div class='collapse navbar-collapse navbar-ex1-collapse memNavNoneAll'>";
                $str.="<ul class='nav navbar-nav memNavNone'>
                <li><img src='img/{$memRowtwo["mem_img"]}'></li>
                <li class='active'><a href='mem_page.html'>會員名稱</a></li>
                <li><a href='mem_info_update.html'>會員資料更改</a></li>
                <li><a href='mem_order.html'>會員訂單管理</a></li>
                <li><a href='mem_space_info.html'>會員空間資訊管理</a></li>
                <li><a href='mem_space_order.html'>會員空間訂單管理</a></li>
                <li><a href='#' id='logout'>登出</a></li>
              </ul></div>";
              $str.="</nav>
            </div>

            <div class='col-xs-12 col-sm-9 mempageDetail'>
              <div class='memResult'>
                <div class='memResultContext'>
                  <h1>{$memRowtwo["mem_name"]}! 歡迎來到可可窩!</h1>
                  <p>您在這總共預訂了<span class='spanBlue'>{$memRowtwo["ordernum"]}</span> 次空間</p>
                  <p>您的<span class='spanBlue'> {$memRowtwo["spacenum"]} </span>個空間讓 <span class='spanBlue'>{$memRowtwo["totalman"]}</span> 人提高了生產力！</p>
                  <p>您的空間在本月使您獲利<span class='spanYellow'>{$memRowtwo["totalmoney"]}</span>元</p>
                </div>
              </div>
              <img src='img/mempage.png'>
            </div>
          </div>
        </div>";

      }
    }catch(PDOException $e){
      echo $e->getMessage();
    }
    //送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
