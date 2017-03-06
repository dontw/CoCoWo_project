<?php
try{
  require_once("connectBooks.php");
  // $sql = "select * from member where mem_name=:username";
  $sql = "select * from member where mem_no = :userno";
  $member = $pdo->prepare( $sql );
  $member->bindValue(":userno", $_REQUEST["userno"]);


  $member->execute();
  $str="";
  // $rowCount=$member->fetchColumn();
  if( $member->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "empty";
  }else{ //找得到
    //取回一筆資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);

    // while($memRow = $member->fetch(PDO::FETCH_ASSOC))
    // {

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
                <li class='active'><a href='mem_info_update.html'>會員資料更改</a></li>
                <li><a href='mem_order.html'>會員訂單管理</a></li>
                <li><a href='mem_space_info.html'>會員空間資訊管理</a></li>
                <li><a href='#'>會員空間訂單管理</a></li>
                <li><a href='index.html'>登出</a></li>
              </ul></div>
              </nav>
              </div>";
        $str.="<div class='col-xs-12 col-sm-9 memInfoRight'>
          <ol class='breadcrumb'>
            <li>
              <a href='index.html'>首頁</a>
            </li>
            <li>
              <a href='mem_page.html'>我的會員頁面</a>
            </li>
            <li class='active'>會員資料更改</li>
          </ol>";

        $str.="<h3>會員資料更改</h3>

          <div class='memResult'>
          <form action='member_info_updatetest.php' method='post' enctype='multipart/form-data'>
            <input type='hidden' name='userno' value='{$memRow["mem_no"]}'>
            <div class='col-xs-12 col-sm-6'>
              <p>會員信箱</p>
              <input type='text' name='usermail' value='{$memRow["mem_mail"]}'>
              <p>會員密碼</p>
              <input type='password' name='userpsw' value='{$memRow["mem_pwd"]}'>
              <p>再次確認密碼</p>
              <input type='password' name='userpsw2' value='{$memRow["mem_pwd"]}'>
              <p>上傳會員頭像</p>
              <div class='col-xs-12 col-sm-6 submitImg'>
                <img class='preview' src='img/105-User-512.png'>
              </div>

              <div class='col-xs-12 col-sm-6 submitImgButton'>
                <div class='subRect'>

                </div>
                <div class='subText'>
                  <input  type='file' class='upl' name='userimg'>
                  <p>照片大小請小於2MB</p>
                </div>
              </div>
            </div>";
          $str.="<div class='col-xs-12 col-sm-6'>
              <p>會員稱呼</p>
              <input type='text' name='username' value='{$memRow["mem_name"]}'>
              <p>職業</p>
              <input type='text' name='useroccu' value='{$memRow["mem_occu"]}'>
              <p>性別</p>";
          if($memRow["mem_sex"]=='男')
          {
            $str.="<select name='Yoursex'>
                  　<option selected='true' value='0'>男</option>
                  　<option value='1'>女</option>
                </select>";
          }else
          {
            $str.="<select name='Yoursex'>
                  　<option value='0'>男</option>
                  　<option selected='true' value='1'>女</option>
                </select>";
          }
          $str.="<p>電話</p>
              <input type='text' name='userpho' value='{$memRow["mem_pho"]}'>
              <div class='memUpdateButton'>
                <input class='button dark-blue Btn' type='submit' name=''>
                <input class='button yellow Btn' type='reset' name=''>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>";



    // }
    //送出json字串
    echo json_encode( $str );
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
