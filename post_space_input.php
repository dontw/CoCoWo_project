<?php
ob_start();
session_start();


if(isset($_REQUEST["action"]) && ($_REQUEST['action'] == "add")){
  // echo "sql start!";
  try{
  require_once("connectBooks.php");

  // sql except checknox and files
  $sql = "INSERT INTO cospace (mem_no,
                               wot_no,
                               spa_name,
                               spa_info,
                               spa_city,
                               spa_addr,
                               spa_phone,
                               spa_price,
                               spa_plimit,
                               spa_time,
                               spa_status)

                        VALUES (:mem_no,
                                :wot_no,
                                :spa_name,
                                :spa_info,
                                :spa_city,
                                :spa_addr,
                                :spa_phone,
                                :spa_price,
                                :spa_plimit,
                                :spa_time,
                                :spa_status)";



  $space = $pdo->prepare($sql);
  $space -> bindValue(":mem_no",$_GET["mem_no"]);
  $space -> bindValue(":spa_name",$_REQUEST["spa_name"]);
  $space -> bindValue(":spa_city",$_REQUEST["spa_city"]);
  $space -> bindValue(":spa_addr",$_REQUEST["spa_addr"]);
  $space -> bindValue(":spa_phone",$_REQUEST["spa_phone"]);
  $space -> bindValue(":wot_no",$_REQUEST["wot_no"]);
  $space -> bindValue(":spa_plimit",$_REQUEST["spa_plimit"]);
  $space -> bindValue(":spa_price",$_REQUEST["spa_price"]);
  $space -> bindValue(":spa_info",$_REQUEST["spa_info"]);
  $space -> bindValue(":spa_time",$_REQUEST["spa_time"]);
  $space -> bindValue(":spa_status",0);


  $space -> execute();



  //catch current spa_no
  $this_spa_no = $pdo->lastInsertId();
  // $sql_no = "SELECT MAX(spa_no) AS this_spa_no FROM cospace;";
  // $space_no = $pdo->prepare($sql_no);
  // $space_no -> execute();
  // $Row_ch1 = $space_no->fetch(PDO::FETCH_ASSOC);
  // $_SESSION["this_spa_no"] = $Row_ch1["this_spa_no"];

  // sql for checkboxes
  $internet = $_REQUEST['internet'];
  $equip = $_REQUEST['equip'];
  $food = $_REQUEST['food'];
  $room = $_REQUEST['room'];
  $transport = $_REQUEST['transport'];

  for ($i=0; $i < count($internet) ; $i++) {
    $sql_ck1 = "INSERT INTO spadevice (spa_no,dev_no) VALUES(:spa_no, ".$internet[$i].");";
    $ck1 = $pdo->prepare($sql_ck1);
    $ck1 -> bindValue(":spa_no",$this_spa_no);
    $ck1 -> execute();
  }

  for ($i=0; $i < count($equip) ; $i++) {
    $sql_ck2 = "INSERT INTO spadevice (spa_no,dev_no) VALUES(:spa_no, ".$equip[$i].");";
    $ck2 = $pdo->prepare($sql_ck2);
    $ck2 -> bindValue(":spa_no",$this_spa_no);
    $ck2 -> execute();
  }

  for ($i=0; $i < count($food) ; $i++) {
    $sql_ck3 = "INSERT INTO spadevice (spa_no,dev_no) VALUES(:spa_no, ".$food[$i].");";
    $ck3 = $pdo->prepare($sql_ck3);
    $ck3 -> bindValue(":spa_no",$this_spa_no);
    $ck3 -> execute();
  }

  for ($i=0; $i < count($room) ; $i++) {
    $sql_ck4 = "INSERT INTO spadevice (spa_no,dev_no) VALUES(:spa_no, ".$room[$i].");";
    $ck4 = $pdo->prepare($sql_ck4);
    $ck4 -> bindValue(":spa_no",$this_spa_no);
    $ck4 -> execute();
  }

  for ($i=0; $i < count($transport) ; $i++) {
    $sql_ck5 = "INSERT INTO spadevice (spa_no,dev_no) VALUES(:spa_no, ".$transport[$i].")";
    $ck5 = $pdo->prepare($sql_ck5);
    $ck5 -> bindValue(":spa_no",$this_spa_no);
    $ck5 -> execute();
  }

  //upload Image



  echo $_FILES["photo"]["error"][0];

  for( $i=0 ;$i< count($_FILES["photo"]["error"]); $i++){
switch( $_FILES["photo"]["error"][$i]){
	case 0:

		$from = $_FILES["photo"]["tmp_name"][$i];
		//檢查資料夾或檔案是否存在
		if( file_exists("space_photo")==false){ //不存在
			//建立資料夾 make directory
	        mkdir("space_photo");
		}
        //原始檔名(utf-8)
        $fileName = $_FILES["photo"]["name"][$i];

        //設定好資料夾,並轉碼為big5
		$to = "img/space_photo/". mb_convert_encoding($fileName, "Big5","UTF-8");

		if(copy( $from, $to) ){
			// echo "上傳成功<br>";
      try{

        $img_name = "img/space_photo/".$fileName;

        $sql_photo = "INSERT INTO photo (spa_no, pho_name) VALUES (:spa_no, '$img_name')";
        $photos = $pdo->prepare($sql_photo);
        $photos->bindValue(":spa_no",$this_spa_no);
        $photos->execute();


      }catch(PDOException $ex){
        echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
        echo "行號：",$ex->getLine(),"<br>";
      }
		}else{
			echo "error<br>";
		}
		break;
	case 1:
	    echo "檔案不得超過", ini_get("upload_max_filesize") ,"<br>";
		break;
	case 2:
		echo "檔案不得超過", $_REQUEST["MAX_FILE_SIZE"] ,"<br>";
		break;
	case 3:
		echo "上傳檔案不完整<br>";
		break;
	case 4:
	    echo "檔案没送<br>";
	     break;
	default :
	    echo "錯誤代碼:" , $_FILES["photo"]["error"][$i],"請通知系統人員<br>";
	     break;
}//switch

}

header("Location: post_space.html");

  }catch(PDOException $ex){
    echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
    echo "行號：",$ex->getLine(),"<br>";
  }
}else{
  // echo "no";
}


//確認是否按下submit，確認後執行資料庫步驟

?>

<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" type="image/png" href="img/favicon.ico"/>
  <link rel="stylesheet" type="text/css" href="css/post_space_input/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/post_space_input/demo.css" />
	<link rel="stylesheet" type="text/css" href="css/post_space_input/component.css" />
	<link rel="stylesheet" type="text/css" href="css/post_space_input/cs-select.css" />
	<link rel="stylesheet" type="text/css" href="css/post_space_input/cs-skin-boxes.css" />
  <link rel="stylesheet" href="css/main.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/modernizr.custom.js"></script>

  <title>CoCoWork可可窩 </title>
</head>
<body class="post_space_input">
  <!-- main_nav_bar -->
   <div class="main_nav_bar">
  		<div class="container">
  			<div class="row">
  				<div class="col-xs-12 col-sm-2 col-md-2">
  					<a href="index.html">
  						<div class="main_nav_logo"></div>
  					</a>
  				</div>
  				<!-- <div class="col-sm-2 col-md-2"></div> -->
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="search_space.html" class="main_nav_a">
  						<i class="fa fa-search" aria-hidden="true"></i>
  						<span class="nav_p">搜索空間</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="post_space.html" class="main_nav_a  main_nav_a_active">
  						<i class="fa fa-plus-square-o" aria-hidden="true"></i>
  						<span class="nav_p">刊登空間</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="blog_main.html" class="main_nav_a main_nav_a_shop">
  						<i class="fa fa-book" aria-hidden="true"></i>
  						<span class="nav_p">窩 日 誌</span>
  					</a>
  				</div>
  				<div class="col-xs-20p col-sm-2 col-md-2">
  					<a href="#" class="main_nav_a">
  						<i class="fa fa-volume-control-phone" aria-hidden="true"></i>
  						<span class="nav_p">聯絡我們</span>
  					</a>
  				</div>
          <div class="col-xs-20p col-sm-2 col-md-2 nav_user_btn">
            <a href="#" class="main_nav_a main_nav_user_a">
  						<i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <span class="nav_p">登入</span>
  					</a>
          </div>
  			</div>
  		</div>
  	</div>
    <div class="stuff_nav"></div>
    <!-- main_nav_bar_end -->
    <!-- preloader -->
    <div id="preloader">
      <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span>
          <span class="leaf2"></span>
          <span class="leaf3"></span>
          <span class="leaf4"></span>
        </div>
        <span class="loading" data-name="Loading"><p>讀取中...</p></span>
      </div>
    </div>
    <!-- preloader_end -->
    <!-- SignupuserLightBox -->
    <div class="userlightboxbccc" id="signupuserlightboxbccc"></div>
      <div class="userLightBox" id="signupuserLightBox">
        <div class="lightbox">
          <div class="closeBox" id="signupcloseBox">
            x
          </div>
          <h4>會員註冊</h4>
          <form>
            <label for="usermail">
              帳號:
              <input type="mail" name="signusermail" placeholder="aaa123@example.com">
            </label>
            <label for="userpsw">
              密碼:
              <input type="password" name="signuserpsw" placeholder="會員密碼">
            </label>
            <label for="username">
              名稱:
              <input type="text" name="username" placeholder="會員名稱">
            </label>
            <label for="userpho">
              電話:
              <input type="text" name="userpho" placeholder="會員電話">
            </label>
            <label for="usersex">
            性別:
              <input type="radio" name="usersex" value="0">男
              <input type="radio" name="usersex" value="1">女
            </label>
            <label for="useroccu">
              職業:
              <input type="text" name="useroccu" placeholder="Engineer">
            </label>
            <div class="userbutton">
              <a id="yesBtn" class="button dark-blue" href="#">確定</a>
              <input type="reset" name="" class="button red">
          </form>
          </div>
        </div>
      </div>
    <!-- <input class="fs-anim-lower" id="q2" name="q2" type="email" placeholder="dean@road.us" required/> -->
    <div class="container input_container">

			<div class="fs-form-wrap" id="fs-form-wrap">
				<div class="fs-title">
					<h2>輸入刊登資訊</h2>
				</div>
				<form id="myform" class="fs-form fs-form-full" autocomplete="off" enctype="multipart/form-data" action="" method="POST">
					<ol class="fs-fields">
						<li>
							<label class="fs-field-label fs-anim-upper" for="spa_name" data-info="想一個亮眼的名子吧，例如：可可工作窩。">怎麼稱呼您所刊登的空間呢?</label>
							<input class="fs-anim-lower" id="spa_name" name="spa_name" type="text" placeholder="您的空間名稱" required/>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="spa_city" data-info="其他縣市陸續開放中!">您的空間位於哪個城市?</label>

              <select class="cs-select cs-skin-boxes fs-anim-lower" name="spa_city">
                <option value="" disabled selected>請選取城市名</option>
                <option value="台北市" data-class="taipeiCity">台北市</option>
                <option value="新北市" data-class="NewTaipeiCity">新北市</option>
                <option value="桃園市" data-class="TaoyuanCity">桃園市</option>
              </select>
            </li>
            <li>
              <label class="fs-field-label fs-anim-upper" for="spa_addr">空間地址</label>
							<input class="fs-anim-lower" id="spa_addr" name="spa_addr" type="text" placeholder="OO市OO區OOO街..." required/>
              <label class="fs-field-label fs-anim-upper" for="spa_phone" data-info="手機或市話">空間電話</label>
              <input class="fs-anim-lower" id="spa_phone" name="spa_phone" type="text" placeholder="02-1234-5678 or 0912-345-678" required/>
						</li>
            </li>
						<li data-input-trigger>
							<label class="fs-field-label fs-anim-upper" for="wot_no">你的空間屬於哪類型的窩?</label>
              <select class="cs-select cs-skin-boxes fs-anim-lower" name="wot_no">
                <option value="n/a" disabled selected>哪種窩呢?</option>
                <option value="1" data-class="casual_wo">隨意窩</option>
                <option value="2" data-class="concern_wo">專注窩</option>
                <option value="3" data-class="discuss_wo">討論窩</option>
                <option value="4" data-class="maker_wo">maker窩</option>
                <option value="5" data-class="nature_wo">自然窩</option>
              </select>
						</li>
						<li data-input-trigger>
							<label class="fs-field-label fs-anim-upper">你的空間提供那些通訊服務?</label>
              <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower input_checkboxs">
								<span><input id="internet" name="internet[]" type="checkbox" value="1"/>
                  <label for="internet" required>
                  <div class="inputimg info_1"></div>網路
                  </label>
                </span>
								<span><input id="wifi" name="internet[]" type="checkbox" value="2"/>
                  <label for="wifi" required>
                  <div class="inputimg info_2"></div>WiFi
                  </label>
                </span>
								<span><input id="phone" name="internet[]" type="checkbox" value="3"/>
                  <label for="phone" required>
                  <div class="inputimg info_3"></div>電話
                  </label>
                </span>
                <span><input id="fax" name="internet[]" type="checkbox" value="4"/>
                  <label for="fax" required>
                  <div class="inputimg info_4"></div>傳真
                  </label>
                </span>
								<span><input id="video" name="internet[]" type="checkbox" value="5"/>
                  <label for="video" required>
                  <div class="inputimg info_5"></div> 視訊設備
                  </label>
                </span>
								<span><input id="mail" name="internet[]" type="checkbox" value="6"/>
                  <label for="mail" required>
                  <div class="inputimg info_6"></div>郵包寄送
                  </label>
                </span>
							</div>
						</li>

            <li data-input-trigger>
              <label class="fs-field-label fs-anim-upper">你的空間提供那些辦公設備?</label>
              <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower input_checkboxs">
                <span><input id="stationary" name="equip[]" type="checkbox" value="11"/>
                  <label for="stationary" required>
                  <div class="inputimg equip_1"></div>文具
                  </label>
                </span>
                <span><input id="board" name="equip[]" type="checkbox" value="12"/>
                  <label for="board" required>
                  <div class="inputimg equip_2"></div>白板
                  </label>
                </span>
                <span><input id="furniture" name="equip[]" type="checkbox" value="13"/>
                  <label for="furniture" required>
                  <div class="inputimg equip_3"></div>辦公家具
                  </label>
                </span>
                <span><input id="monitor" name="equip[]" type="checkbox" value="14"/>
                  <label for="monitor" required>
                  <div class="inputimg equip_4"></div>螢幕
                  </label>
                </span>
                <span><input id="projector" name="equip[]" type="checkbox" value="15"/>
                  <label for="projector" required>
                  <div class="inputimg equip_5"></div>投影機
                  </label>
                </span>
                <span><input id="print" name="equip[]" type="checkbox" value="16"/>
                  <label for="print" required>
                  <div class="inputimg equip_6"></div>掃描影印
                  </label>
                </span>
              </div>
            </li>

            <li data-input-trigger>
              <label class="fs-field-label fs-anim-upper">你的空間有提供任何飲食嗎?</label>
              <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower input_checkboxs">
                <span><input id="water" name="food[]" type="checkbox" value="21"/>
                  <label for="water" required>
                  <div class="inputimg food_1"></div>飲水
                  </label>
                </span>
                <span><input id="hot" name="food[]" type="checkbox" value="22"/>
                  <label for="hot" required>
                  <div class="inputimg food_2"></div>熱飲
                  </label>
                </span>
                <span><input id="cold" name="food[]" type="checkbox" value="23"/>
                  <label for="cold" required>
                  <div class="inputimg food_3"></div>冷飲
                  </label>
                </span>
                <span><input id="dish" name="food[]" type="checkbox" value="24"/>
                  <label for="dish" required>
                  <div class="inputimg food_4"></div>餐點
                  </label>
                </span>
                <span><input id="restaurant" name="food[]" type="checkbox" value="25"/>
                  <label for="restaurant" required>
                  <div class="inputimg food_5"></div>餐廳
                  </label>
                </span>
                <span><input id="kitchen" name="food[]" type="checkbox" value="26"/>
                  <label for="kitchen" required>
                  <div class="inputimg food_6"></div>廚房
                  </label>
                </span>
              </div>
            </li>

            <li data-input-trigger>
              <label class="fs-field-label fs-anim-upper">你的空間有包含下列設施嗎?</label>
              <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower input_checkboxs">
                <span><input id="meeting" name="room[]" type="checkbox" value="31"/>
                  <label for="meeting" required>
                  <div class="inputimg room_1"></div>會議室
                  </label>
                </span>
                <span><input id="library" name="room[]" type="checkbox" value="32"/>
                  <label for="library" required>
                  <div class="inputimg room_2"></div>圖書室
                  </label>
                </span>
                <span><input id="theater" name="room[]" type="checkbox" value="33"/>
                  <label for="theater" required>
                  <div class="inputimg room_3"></div>視聽室
                  </label>
                </span>
                <span><input id="music" name="room[]" type="checkbox" value="34"/>
                  <label for="music" required>
                  <div class="inputimg room_4"></div>展演空間
                  </label>
                </span>
                <span><input id="tools" name="room[]" type="checkbox" value="35"/>
                  <label for="tools" required>
                  <div class="inputimg room_5"></div>工具間
                  </label>
                </span>
                <span><input id="lab" name="room[]" type="checkbox" value="36"/>
                  <label for="lab" required>
                  <div class="inputimg room_6"></div>實驗室
                  </label>
                </span>
              </div>
            </li>

            <li data-input-trigger>
              <label class="fs-field-label fs-anim-upper">您空間周遭交通狀態如何?</label>
              <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower input_checkboxs">
                <span><input id="bus" name="transport[]" type="checkbox" value="41"/>
                  <label for="bus" required>
                  <div class="inputimg transport_1"></div>公車
                  </label>
                </span>
                <span><input id="metro" name="transport[]" type="checkbox" value="42"/>
                  <label for="metro" required>
                  <div class="inputimg transport_2"></div>捷運
                  </label>
                </span>
                <span><input id="train" name="transport[]" type="checkbox" value="43"/>
                  <label for="train" required>
                  <div class="inputimg transport_3"></div>火車
                  </label>
                </span>
                <span><input id="bike" name="transport[]" type="checkbox" value="44"/>
                  <label for="bike" required>
                  <div class="inputimg transport_4"></div>單車位
                  </label>
                </span>
                <span><input id="scooter" name="transport[]" type="checkbox" value="45"/>
                  <label for="scooter" required>
                  <div class="inputimg transport_5"></div>機車位
                  </label>
                </span>
                <span><input id="car" name="transport[]" type="checkbox" value="46"/>
                  <label for="car" required>
                  <div class="inputimg transport_6"></div>汽車位
                  </label>
                </span>
              </div>
            </li>

            <li>
              <label class="fs-field-label fs-anim-upper" for="spa_plimit">你的空每個營業日能提供多少位置?</label>
							<input class="fs-mark fs-anim-lower" id="spa_plimit" name="spa_plimit" type="number" placeholder="1" step="1" min="1"/>
						</li>

            <li>
              <label class="fs-field-label fs-anim-upper" for="spa_price">你的空間每個位子的日租價格?</label>
              <input class="fs-mark fs-anim-lower" id="spa_price" name="spa_price" type="number" placeholder="100" step="1" min="1"/>
            </li>

            </li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="spa_info">敘述一下您空間的特色吧!</label>
							<textarea class="fs-anim-lower" id="spa_info" name="spa_info" placeholder="Describe here"></textarea>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q5">您的空間營業時間為何?</label>
							<input class="fs-anim-lower" type="text" name="spa_time">
						</li>
            <li>
              <label class="fs-field-label fs-anim-upper">提供您展現您空間特色的照片吧(最多五張)</label>
              <input class="fs-anim-lower" style="font-size:0.7em;" id="photo" name="photo[]" type="file" multiple/><label for="photo"></label>

            </li>
					</ol><!-- /fs-fields -->
          <input type="hidden" name="action" id="action" value="add">
					<button class="fs-submit" type="submit">送出申請</button>
				</form><!-- /fs-form -->
			</div><!-- /fs-form-wrap -->

		</div><!-- /container -->


    <!-- SignupuserLightBoxEnd-->
		<script src="js/classie.js"></script>
		<script src="js/selectFx.js"></script>
		<script src="js/fullscreenForm.js"></script>
    <script type="js/loginBox.js"></script>
		<script>
			(function() {
				var formWrap = document.getElementById( 'fs-form-wrap' );

				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
					new SelectFx( el, {
						stickyPlaceholder: false,
						onChange: function(val){
							document.querySelector('span.cs-placeholder').style.backgroundColor = val;
						}
					});
				} );

				new FForm( formWrap, {
					onReview : function() {
						classie.add( document.body, 'overview' ); // for demo purposes only
					}
				} );
			})();
		</script>


    <!-- footer-->
    <!-- <div class="footer">
      <div class="footer_cloud"></div>
      <div class="container">
        <div class="row">
        <div class="col-xs-12 col-md-4 site footer_col" >
          <h5>網站地圖</h5>
          <hr>
          <a href="#">刊登空間</a>
          <a href="#">搜索空間</a>
          <a href="#">窩 日 誌</a>
          <a href="#">會員中心</a>
        </div>
        <div class="col-xs-12 col-md-4 contacts footer_col" >
          <h5>聯絡資訊</h5>
          <hr>
          <div class="addr contact_row col-xs-12 col-md-12">
            <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
            <p>Address:<br>桃園縣中壢市大馬路123號</p>
          </div>
          <div class="phone contact_row col-xs-12 col-md-12">
            <i class="fa fa-phone fa-fw" aria-hidden="true"></i>
            <p>Tel:03-1234-5678<br>Mol:0912-345-678</p>

          </div>
          <div class="mail contact_row col-xs-12 col-md-12">
            <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
            <p>Mail:<br>contact@cocowork.com.tw</p>
          </div>

        </div>

        <div class="col-xs-12 col-md-4 socialmedia footer_col" >
          <h5>追蹤我們</h5>
          <hr>
          <div class="social_icons">
            <a href="#" class="fb_icon">
              <img src="img/facebook_icon.svg" alt="facebook's icon" class="social_icon">
            </a>
            <a href="#" class="fb_icon">
              <img src="img/youtube_icon.svg" alt="facebook's icon" class="social_icon">
            </a>
            <a href="#" class="fb_icon">
              <img src="img/instagram_icon.svg" alt="facebook's icon" class="social_icon">
            </a>
            <a href="#" class="fb_icon">
              <img src="img/googleplus_icon.svg" alt="facebook's icon" class="social_icon">
            </a>
          </div>

        </div>
      </div>
      <p class="minp copyright">Copyright © 2017 可可窩 cocowork</p>
      </div> -->
      <!-- footer-end -->

</body>
<footer>
  <!-- 放JS的地方 -->
  <script src="js/btn.js"></script>
  <script src="js/post_space_input.js"></script>
  <script src="js/loginBox.js"></script>
  <script src="js/member.js"></script>
</footer>
</html>
