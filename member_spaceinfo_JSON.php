<?php
try{
  require_once("PDOTEST.php");
  // $sql = "select * from member where mem_name=:username";
  $stat = $_REQUEST["stat"];
  if($stat==0)
  {
    $sql = "select * from cospace a join member b on a.mem_no = b.mem_no  where (spa_status=0 or spa_status=3) and (b.mem_no=:userno)";
  }else if($stat==1)
  {
    $sql = "select * from cospace a join member b on a.mem_no = b.mem_no where spa_status=1 and b.mem_no=:userno";
  }else if($stat==2)
  {
    $sql = "select * from cospace a join member b on a.mem_no = b.mem_no where spa_status=2 and b.mem_no=:userno";
  };

  $member = $pdo->prepare( $sql );
  $member->bindValue(":userno", $_REQUEST["userno"]);


  $member->execute();
  $str="";
  $count =1;
  // $rowCount=$member->fetchColumn();
  if( $member->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    try{
      require_once("PDOTEST.php");
      $sql2 = "select * from member where mem_no =:userno";
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
                <li><a href='mem_page.html'>會員名稱</a></li>
                <li><a href='mem_info_update.html'>會員資料更改</a></li>
                <li><a href='mem_order.html'>會員訂單管理</a></li>
                <li class='active'><a href='mem_space_info.html'>會員空間資訊管理</a></li>
                <li><a href='mem_space_order.html'>會員空間訂單管理</a></li>
                <li><a href='index.html'>登出</a></li>
              </ul></div>
              </nav>
              </div>";
        $str.="<div class='col-xs-12 col-sm-9 memOrderRight'>
          <ol class='breadcrumb'>
            <li>
              <a href='#'>首頁</a>
            </li>
            <li>
              <a href='#'>我的會員頁面</a>
            </li>
            <li class='active'>空間資訊管理</li>
          </ol>";
        if($stat==0)
          {
             $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' class='headLinkNow' href='#'>審核中</a></li>
            <li><a id='unset' href='#'>未上架</a></li>
            <li><a id='set' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>狀態</th>
                </tr>
              </thead><tbody>";
          }else if($stat==1)
          {
             $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' href='#'>審核中</a></li>
            <li><a id='unset' class='headLinkNow' href='#'>未上架</a></li>
            <li><a id='set' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>操作</th>
                </tr>
              </thead><tbody>";
          }else
          {
               $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' href='#'>審核中</a></li>
            <li><a id='unset' href='#'>未上架</a></li>
            <li><a id='set' class='headLinkNow' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>操作</th>
                </tr>
              </thead><tbody>";
          }

                $str.="</tbody>
              </table>
                <div style='text-align:center; margin-top:15px'><p>無空間紀錄...</p></div>
                </div>

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

    while($memRow = $member->fetch(PDO::FETCH_ASSOC))
    {
      if($count == 1)
      {
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
                <li><img src='img/{$memRow["mem_img"]}'></li>
                <li><a href='mem_page.html'>會員名稱</a></li>
                <li><a href='mem_info_update.html'>會員資料更改</a></li>
                <li><a href='mem_order.html'>會員訂單管理</a></li>
                <li class='active'><a href='mem_space_info.html'>會員空間資訊管理</a></li>
                <li><a href='mem_space_order.html'>會員空間訂單管理</a></li>
                <li><a href='index.html'>登出</a></li>
              </ul></div>
              </nav>
              </div>";
        $str.="<div class='col-xs-12 col-sm-9 memOrderRight'>
          <ol class='breadcrumb'>
            <li>
              <a href='#'>首頁</a>
            </li>
            <li>
              <a href='#'>我的會員頁面</a>
            </li>
            <li class='active'>空間資訊管理</li>
          </ol>";
          if($stat==0)
          {
             $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' class='headLinkNow' href='#'>審核中</a></li>
            <li><a id='unset' href='#'>未上架</a></li>
            <li><a id='set' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>狀態</th>
                </tr>
              </thead><tbody>";
          }else if($stat==1)
          {
             $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' href='#'>審核中</a></li>
            <li><a id='unset' class='headLinkNow' href='#'>未上架</a></li>
            <li><a id='set' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>操作</th>
                </tr>
              </thead><tbody>";
          }else
          {
               $str.="<ul class='orderHead'>
            <li class='listFirst'><h3>會員空間</h3></li>
            <li class='listFirst'><a class='button yellow spaceButton' href='#'>刊登新空間+</a></li>
            <li><a id='check' href='#'>審核中</a></li>
            <li><a id='unset' href='#'>未上架</a></li>
            <li><a id='set' class='headLinkNow' href='#'>目前上架</a></li>
          </ul>
          <div class='orderTable'>
            <table cellspacing='20'>
              <thead>
                <tr>
                  <th class='xs-none'>空間編號</th>
                  <th>空間名稱</th>
                  <th  class='xs-none'>空間部分資訊</th>
                  <th>操作</th>
                </tr>
              </thead><tbody>";
          }


            $count = 2;
        }


        $str.="
                <tr>
                  <td  class='xs-none getspano'><a href=''>{$memRow["spa_no"]}</a></td>
                  <td><a href=''>{$memRow["spa_name"]}</a></td>
                  <td  class='xs-none'>
                    <table class='insert'>
                      <tr>
                        <td>人數：{$memRow["spa_plimit"]} 金額：{$memRow["spa_price"]}</td>
                      </tr>
                      <tr>
                        <td>日期:<p class='minp'>{$memRow["spa_time"]}</p></td>
                      </tr>
                    </table>
                  </td>
                  <td>";

        if($memRow["spa_status"]==0)
        {
          $str.="
                    <a class='button dark-blue spaceDetail' >審核中.....</a>

                  </td>
                </tr>


           ";
        }else if($memRow["spa_status"]==1)
        {
          $str.="  <a class='button yellow upSpace' >上架</a>
                    <a class='button dark-blue spaceDetail' >查看</a>
                  </td>
                </tr>


           ";
        }else if($memRow["spa_status"]==2)
        {
            $str.="  <a class='button dark-blue spaceDetail' >查看</a>
                    <a class='button red delete' >刪除</a>

                  </td>
                </tr>


           ";
        }else
        {
            $str.="  <a class='button yellow why' >審核未過!</a>
                  </td>
                </tr>


           ";
        }






    }
    $str.="</tbody>
        </table>
          </div>

        </div>
      </div>
    </div>";
    //送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
