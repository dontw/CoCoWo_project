<?php

  try{
    include_once("connectBooks.php");

      $sql_select = "SELECT cs.spa_no,cs.spa_name,cs.spa_addr,cs.spa_info,cs.spa_time,cs.spa_price,photo.pho_name,cs.spa_cpnum,cs.spa_allscore,cs.spa_phone
                     FROM cospace as cs left join photo on photo.spa_no=cs.spa_no
                     WHERE cs.spa_no = ?";



      $stmt = $pdo->prepare($sql_select);
      $stmt->bindValue(1,$_REQUEST["spa_no"]);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_OBJ);

      $add = mb_substr("$row->spa_addr",0,3,"utf8");

  }catch(PDOException $e){
    echo $e->getMessage();
  }


?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/png" href="img/favicon.ico"/>
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="css/daterangepicker.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/jquery.easing.compatibility.js"></script>
    <script src="js/moment-with-locales.min.js"></script>
    <script src="js/jquery.daterangepicker.js"></script>

    <title>CoCoWork可可窩 </title>
  </head>
  <body class="space_content">
    <!-- main_nav_bar -->
     <div class="main_nav_bar">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-2 col-md-2">
              <a href="main_page.php">
                <div class="main_nav_logo"></div>
              </a>
            </div>
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
      <!-- bread_crumbs -->
      <div class="container bread_crumbs_container">
        <div class="bread_crumbs">
          <a href="search_space.html" class="bread_crumb_tag">搜尋空間</a>
          <span class="bread_crumb_separator">›</span>
          <a href="search_space.html" class="bread_crumb_tag"><?php echo $add; ?></a>
          <span class="bread_crumb_separator">›</span>
          <a href="search_space.html" class="bread_crumb_tag"><?php echo $row->spa_name; ?></a>
        </div>
      </div>
      <!-- space_content_slider -->
      <div class="space_content_slider">
          <div class="slider_content">
            <div class="content_img img1"></div>
          </div>
          <div class="slider_content">
            <div class="content_img img2"></div>
          </div>
          <div class="slider_content">
            <div class="content_img img3"></div>
          </div>
          <div class="slider_content">
            <div class="content_img img4"></div>
          </div>
          <div class="slider_content">
            <div class="content_img img5"></div>
          </div>
          <div class="slider_ctrl left">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div class="slider_ctrl right">
           <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
      </div>
      </div>
      <!-- space_content_main -->
      <div class="container space_content_main">

        <h3 class="space_name">
          <?php echo $row->spa_name; ?><img id="statu" src="" alt="">
          <input type="hidden" name="spadev" value="<?php echo $row->spa_no;?>">
          <input type="hidden" id="spablog" name="spabg" value="">
        </h3>

        <div class="space_order_wrap">
          <div class="space_order">
            <h5>預訂價格：<?php echo $row->spa_price;?>元/日</h5>
            <p class="order_limit">最少須預訂1天</p>
            <a href="#" class="button yellow order_btn">立即預訂</a>
            <a href="#" class="border_button dark-blue order_btn order_btn_1">聯絡空間主</a>
            <a href="#" class="border_button dark-blue order_btn order_btn_3 order_btn_3_1">
              <i class="fa fa-heart fa-fw" aria-hidden="true"></i>
              收藏空間
            </a>
            <a href="#" class="border_button dark-blue order_btn order_btn_3 order_btn_3_2">
              <i class="fa fa-share-alt fa-fw" aria-hidden="true"></i>
              分享空間
            </a>
            <a href="#" class="border_button dark-blue order_btn order_btn_3 order_btn_3_3">
              <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true"></i>
              檢舉空間
            </a>
            <div class="clearfix"></div>
          </div>
          <div class="space_owner">
            <div class="space_owner_content">
              <img class="owner_img" src="">
              <div class="owner_desc">這個空間的管理者是：<br><span></span></div>
            </div>
          </div>
          <div class="space_announce">
            <a href="#">可可窩是如何運作的?</a>
            <a href="#">什麼是"可可窩認證空間"?</a>
            <a href="#">彈性便利的退訂機制</a>

          </div>
        </div>

        <span class="space_star">
          <div id="span_star_score"></div>
          <p id="span_star_cpnum"><?php echo $row->spa_allscore."(".$row->spa_cpnum.")";?></p>
        </span>
        <div class="space_operate_info">
          <p class="space_addr">
            <span class="addr_icon">
              <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
            </span>
            <?php echo $row->spa_addr;?>
          </p>
          <p class="space_phone">
            <span class="addr_icon">
              <i class="fa fa-phone-square fa-fw" aria-hidden="true"></i>
            </span>
            <?php echo $row->spa_phone;?>
          </p>
          <p class="space_time">
            <span class="addr_icon">
              <i class="fa fa-clock-o fa-fw" aria-hidden="true"></i>
            </span>
            <?php echo $row->spa_time;?>
          </p>
          <p class="space_break">
            <span class="addr_icon">
              <i class="fa fa-calendar-times-o fa-fw" aria-hidden="true"></i>
            </span>
            國定假日、周六、周日公休
          </p>
        </div>


        <p class="space_describe_title">本空間概述</p>
        <p class="space_describe">
          <?php echo $row->spa_info;?>
        </p>

        <p class="space_equip_title">提供設備與服務</p>
        <div class="space_equip_item_wrapper">
          <!-- <div class="space_equip_item">
            <img class="item_img img1">
            <span class="item_name">1</span>
          </div> -->
          <!-- <div class="space_equip_item">
            <div class="item_img img2"></div>
            <span class="item_name">2</span>
          </div>
 -->          <!-- <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img4"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img5"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div>
          <div class="space_equip_item">
            <div class="item_img img3"></div>
            <span class="item_name"><?php //echo $row->dev_name;?></span>
          </div> -->
        </div>

        <p class="space_user_title">本空間今日使用者</p>
        <div id="usermember">

          <!-- <div class="space_user_item">
            <img class="user_img" src="img/doge.jpeg">
            <div class="user_status">
              <span class="user_name">使用者1</span>
              <span class="user_occu">柴犬訓練師</span>
            </div>
          </div> -->

          <!-- <div class="space_user_item">
            <img class="user_img" src="img/Gus.jpg">
            <div class="user_status">
              <span class="user_name">使用者2</span>
              <span class="user_occu">BOSS</span>
            </div>
          </div> -->

          <!-- <div class="space_user_item">
            <img class="user_img" src="img/write.jpeg">
            <div class="user_status">
              <div class="user_status">
                <span class="user_name">使用者3</span>
                <span class="user_occu">化學家</span>
              </div>
            </div>
          </div> -->

          <!-- <div class="space_user_item">
            <img class="user_img" src="img/post_space_sec2_furni_6.png">
            <div class="user_status">
              <span class="user_name">使用者1</span>
              <span class="user_occu">柴犬訓練師</span>
            </div>
          </div> -->

          <!-- <div class="space_user_item">
            <img class="user_img" src="img/post_space_sec2_furni_7.png">
            <div class="user_status">
              <span class="user_name">使用者1</span>
              <span class="user_occu">柴犬訓練師</span>
            </div>
          </div> -->

        </div><!-- usermember end -->




      </div>
      <!-- 2nd container end -->
      <!-- googlemap -->
      <div class="container google_map_wrap">
        <div class="row"><div id="map"></div></div>
        <div class="space_map_content">
          <h4><?php echo $row->spa_name;?></h4>
          <div class="space_operate_info">
            <p class="space_addr">
              <span class="addr_icon">
                <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
              </span>
              <?php echo $row->spa_addr;?>
            </p>
            <p class="space_phone">
              <span class="addr_icon">
                <i class="fa fa-phone-square fa-fw" aria-hidden="true"></i>
              </span>
              <?php echo $row->spa_phone;?>
            </p>
            <p class="space_time">
              <span class="addr_icon">
                <i class="fa fa-clock-o fa-fw" aria-hidden="true"></i>
              </span>
              <?php echo $row->spa_time;?>
            </p>
            <p class="space_break">
              <span class="addr_icon">
                <i class="fa fa-calendar-times-o fa-fw" aria-hidden="true"></i>
              </span>
              國定假日、周六、周日公休
            </p>
          </div>
        </div>
      </div>
      <!-- googlemap end -->
      <!-- space_intro -->
      <div class="container space_intro">
        <div class="row">
        <div class="col-md-6 space_intro_content">
          <h4>關於 <?php echo $row->spa_name?></h4>
          <p><?php echo $row->spa_info;?></p>
        </div>
        <div class="col-md-6 space_intro_img">
          <!-- <img src="img/index_sun.png" alt="pic"> -->
          <img src="<?php echo $row->pho_name;?>" class="img-responsive" alt="pic">

        </div>

        </div>
        <p class="space_blog_title">本空間相關窩誌</p>
        <hr>
        <div class="row">
          <div class="space_blogs">
              <!-- <div class="col-md-3">
                <div class="blog_item">
                  <img src="img/post_space_test_room_1.png" alt="">
                    <div class="blog_content">
                    <h5>巴拉巴拉拉共同工作空間</h5>
                    <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？...  <a href="#">...more</a></p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="blog_item">
                  <img src="img/post_space_test_room_1.png" alt="">
                    <div class="blog_content">
                    <h5>巴拉巴拉拉共同工作空間</h5>
                    <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？...  <a href="#">...more</a></p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="blog_item">
                  <img src="img/post_space_test_room_1.png" alt="">
                    <div class="blog_content">
                    <h5>巴拉巴拉拉共同工作空間</h5>
                    <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？...  <a href="#">...more</a></p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="blog_item">
                  <img src="img/post_space_test_room_1.png" alt="">
                    <div class="blog_content">
                    <h5>巴拉巴拉拉共同工作空間</h5>
                    <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？...  <a href="#">...more</a></p>
                  </div>
                </div>
              </div> -->
          </div>





        </div> <!--row-->


      </div>
      <!-- QA and evaluation ctrl -->
      <div class="container space_tab_ctrl">
        <ul>
          <li id="space_eval_btn" class="active">空間評價</li>
          <li id="space_qa_btn">問與答</li>
        </ul>
      </div>
      <!-- QA and evaluation ctrl -->
      <div class="container space_tab_disp">
        <div class="row">
          <div class="space_evaluation">
            <p class="space_evaluation_order">
              本空間共有 3 條評價
              <span>排序依照：
                <a href="#">時間</a>
                <span>|</span>
                <a href="#">評分</a>
                <span>|</span>
                <a href="#">幫助</a>
              </span>
            </p>
            <div class="space_evaluation_item">
              <div class="col-md-3 eval_user">
                <img class="evaluation_user_img" src="img/write.jpeg" alt="">
                <p class="user_name">使用者3</p>
                <p class="user_occu">化學家</p>
                <p class="user_total+review">
                  <i class="fa fa-commenting-o" aria-hidden="true"></i>
                  共有 3 條評價
                </p>
              </div>
              <div class="col-md-9 eval_content">
                <h5 class="eval_content_letter">"這個空間真棒!，希望下次還有機會來!"<span class="eval_time">2017－2－20</span></h5>
                <span class="space_eval_star"><span class="eval_star_score">4/5</span></span>
                <hr class="space_eval_line">
                <p>關於這個我們我認為阿，那個痾，這個空間還算是步錯，但是我好像不太會打中文，每次都被罵，不知道ㄏㄏ</p>
                <div class="eval_like">
                  <span>共 6 人覺得這篇評論有幫助！</span>
                  <span class="eval_like_btn"><i class="fa fa-thumbs-up fa-fw" aria-hidden="true"></i>這對我有幫助！</span>
                </div>
                <span class="eval_report">
                  <a href="#"><i class="fa fa-exclamation-circle fa-fw" aria-hidden="true"></i>回報此評價</a>
                </span>
              </div>
            </div>
          </div>


          <div class="space_qa" style="display:none;">


              <p class="space_qa_order">
                本空間共有 3 條問答
                <span>排序依照：
                  <a href="#">時間</a>
                  <span>|</span>
                  <a href="#">幫助</a>
                </span>
              </p>

            <div class="qa_result">

              <div class="space_qa_item col-md-12">
                <p class="qa_item_no">問與答#1</p>
                <div class="col-md-2 qa_asker">
                  <img class="eval_user_img" src="img/write.jpeg" alt="">
                  <p class="user_name">使用者3</p>
                  <p class="user_occu">化學家</p>
                </div>
                <div class="col-md-10 qa_asker_content">
                  <div class="col-xs-12 asker_bubble">
                    <p class="asker_tag">提問：</p>
                    <p class="asker_word">這邊可以做化學實驗嗎，謝謝!</p>
                    <p class="asker_time">於 2017－2－20</p>
                  </div>
                </div>
                <div class="col-md-10 qa_answer_content">
                  <div class="col-xs-12 answer_bubble">
                    <p class="answer_tag">回答：</p>
                    <p class="answer_word">NO!!!!不可以!!!!</p>
                    <p class="answer_time">於 2017－2－21</p>
                  </div>
                </div>
                <div class="col-md-2 qa_answer">
                  <img class="answer_img" src="img/doge.jpeg" alt="">
                  <p class="user_name">Doge桑</p>
                  <p class="user_occu">空間主</p>
                </div>
              </div>

              <div class="space_qa_item col-md-12">
                <p class="qa_item_no">問與答#2</p>
                <div class="col-md-2 qa_asker">
                  <img class="eval_user_img" src="img/write.jpeg" alt="">
                  <p class="user_name">使用者3</p>
                  <p class="user_occu">化學家</p>
                </div>
                <div class="col-md-10 qa_asker_content">
                  <div class="col-xs-12 asker_bubble unanswer">
                    <p class="asker_tag">提問：</p>
                    <p class="asker_word">再次確認，可以做化學相關教學嗎?</p>
                    <p class="asker_time">於 2017－2－22</p>
                  </div>
                </div>
                <!-- <div class="col-md-10 qa_answer_content">
                  <div class="col-xs-12 answer_bubble">
                    <p class="answer_tag">回答：</p>
                    <p class="answer_word">NO!!!!不可以!!!!</p>
                    <p class="answer_time">於 2017－2－21</p>
                  </div>
                </div>
                <div class="col-md-2 qa_answer">
                  <img class="answer_img" src="img/doge.jpeg" alt="">
                  <p class="user_name">Doge桑</p>
                  <p class="user_occu">空間主</p>
                </div> -->
              </div>

            </div><!-- qa_result -->

              <div class="col-md-12 qa_input_wrap">
                <div class="col-md-2 qa_asker">
                  <img class="eval_user_img" src="img/dummy_user.png" alt="">
                  <p class="user_name">訪客</p>
                  <p class="user_occu">我是訪客喔</p>
                </div>
                <div class="col-md-10">
                  <!-- <form class="qa_form" action=""> -->
                    <textarea class="qa_input" name="name" rows="4" cols="80" placeholder="有什麼關於空間的疑問嗎?歡迎提問!"></textarea>
                    <button class="button yellow qa_input_btn">送出提問</button>
                  <!-- </form> -->
                </div>
              </div>







          </div>

        </div> <!--row-->
      </div><!--qa&eval-->

      <!-- order_box start -->
<div class="order_light_box">
  <div class="add_order">
    <div class="close_box"><i class="fa fa-times" aria-hidden="true" style="color:white;"></i></div>
    <div class="add_order_space_info">
      <img src="<?php echo $row->pho_name;?>" alt="space's picture">
      <h4 class="space_title"><?php echo $row->spa_name; ?></h4>
      <div class="space_operate_info">
        <p class="space_addr">
          <span class="addr_icon">
            <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
          </span>
          <?php echo $row->spa_addr;?>
        </p>
        <p class="space_phone">
          <span class="addr_icon">
            <i class="fa fa-phone-square fa-fw" aria-hidden="true"></i>
          </span>
          <?php echo $row->spa_phone;?>
        </p>
        <p class="space_time">
          <span class="addr_icon">
            <i class="fa fa-clock-o fa-fw" aria-hidden="true"></i>
          </span>
          <?php echo $row->spa_time;?>
        </p>
        <p class="space_break">
          <span class="addr_icon">
            <i class="fa fa-calendar-times-o fa-fw" aria-hidden="true"></i>
          </span>
          國定假日、周六、周日公休
        </p>
      </div>
      <p class="space_describe_title">價格：<span>  <?php echo $row->spa_price;?></span>元/日</p>
      <p class="space_describe_title">空間概述：</p>
      <p>  <?php echo $row->spa_info;?></p>
    </div>


    <div class="add_order_input">
      <div class="input_content_show">
        <ul class="add_order_progressbar">
          <li class="step_1 active">日期人數</li>
          <li class="step_2">基本資料</li>
          <li class="step_3">訂單確認</li>
          <li class="step_4">付款方式</li>
        </ul>
        <div class="input_contents">

          <form id="order_form" action="">
            <div class="input_content content_1">
              <div class="content_1_input">
              <h3 class="input_title">請選擇預訂日期：</h3><input name="ord_daterange" id="date-range0" size="40" placeholder="請選取日期">
              <h3 class="input_title">請選擇預訂位置數：</h3><input name="ord_man" type="number" id="order_number_input" placeholder="請填數字">
              </div>
              <div class="content_1_panel">
                <h4>預定日期：</h4>
                <h4><span class="order_dates"></span></h4>
                <h4>天數：<span class="selected_date_panel"></span> 天</h4>
                <h4>預訂位置數：<span class="selected_number"></span> 個</h4>
                <h4>每日單價：<span class="space_price"><?php echo $row->spa_price;?></span>元</h4>
                <hr>
                <h3>總共：<span class="total_money"></span> 元</h3>
              </div>
              <a class="button yellow order_next_btn order_next_btn_1 ">下一步</a>
            </div>
            <div class="input_content content_2">
              <div class="left">
                <h3 class="input_title">姓名：</h3><input name="ord_name" id="order_name_input" type="text" placeholder="您的姓名" required="!!!">
                <h3 class="input_title">電話：</h3><input name="ord_phone" id="order_phone_input" type="text" placeholder="手機或市話">
                <h3 class="input_title">e-mail：</h3><input name="ord_mail" id="order_mail_input" type="text" placeholder="example@gmail.com">
              </div>
              <div class="right">
                <h3 class="input_title">備註</h3>
                <textarea id="order_info_input" name="ord_note" rows="12" cols="30" placeholder="有什麼額外需求都可以在先提出唷!"></textarea>
              </div>
              <a class="order_pre_btn order_pre_btn_1">上一步</a>
              <a class="button yellow order_next_btn order_next_btn_2">下一步</a>
            </div>
            <div class="input_content content_3">
              <div class="content_3_panel">
                <h5 style="text-align:center;">確認訂單</h5>
                <p>姓名：<span class="order_name"></span></p>
                <p>電話：<span class="order_phone"></span></p>
                <p>e-mail：<span class="order_mail"></span></p>
                <p>人數：<span class="selected_number"></span> 人</p>
                <p>天數：<span class="selected_date_panel"></span> 天</p>
                <p>預定日期：<span class="date order_dates"></span></p>
                <p>備註：<span class="order_info"></span></p>
                <hr>
                <h5 style="margin-bottom:0;">金額：<span class="total_money" id="total_money"></span> 元</h5>
              </div>
              <a class="order_pre_btn order_pre_btn_2">上一步</a>
              <a class="button yellow order_next_btn order_next_btn_3">下一步</a>
            </div>
            <div class="input_content content_4">
              <h3 class="pay_title">選擇付款方式：</h3>
              <div class="pay_radios">
                <input type="radio" id="cash" name="pay" value="cash" checked>
                <label id="go" for="cash">
                  <div class="inputimg info_1"></div>
                  <p class="pay_title">現金</p>
                </label>
                <input type="radio" id="credit_card" name="pay" value="credit_card">
                <label id="go" for="credit_card">
                  <div class="inputimg info_2"></div>
                  <p class="pay_title">信用卡</p>
                </label>
                <input type="radio" id="account" name="pay" value="account">
                <label id="go" for="account">
                  <div class="inputimg info_3"></div>
                  <p class="pay_title">轉帳</p>
                </label>
                <input type="radio" id="store" name="pay" value="store">
                <label id="go" for="store">
                  <div class="inputimg info_4"></div>
                  <p class="pay_title">超商付款</p>
                </label>
              </div>
              <div class="cube-wrapper">
                <div class="cube-folding">
                  <span class="leaf1"></span>
                  <span class="leaf2"></span>
                  <span class="leaf3"></span>
                  <span class="leaf4"></span>
                </div>
                <span class="loading" data-name="Loading"><p style="color:white;">請稍後</p></span>
              </div>
              <div class="thx_order">
              <h3 class="thx_title">感謝您的預訂！</h3>
                <a class="button yellow thx_button" href="#">返回空間主頁面</a>

              </div>
              <a class="order_pre_btn order_pre_btn_3">上一步</a>
              <input type="hidden" name="action" id="action" value="add">
              <input type="hidden" id="mem_no_input" name="mem_no">
              <input type="hidden" id="spa_no_input" name="spa_no" value="<?php echo $_REQUEST['spa_no'];?>">
              <input type="hidden" id="ord_money_input" name="ord_money">

              <button type="submit" class="button red order_next_btn order_next_btn_4">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- order_box_end -->
<!-- userLightBox -->
<div class="userlightboxbccc" id="loginuserlightboxbccc"></div>
  <div class="userLightBox" id="loginuserLightBox">
    <div class="lightbox">
      <div class="closeBox" id="logincloseBox"><i class="fa fa-times" aria-hidden="true"></i></div>
      <h4>會員登入</h4>
      <label for="usermail">
        <input id="usermail" type="text" name="usermail" placeholder="會員帳號">
      </label>
      <label for="userpsw">
        <input id="userpsw" type="password" name="userpsw" placeholder="會員密碼">
      </label>
      <label for="userpsw">
        <input type="checkbox" name="userck" >記住帳號與密碼
      </label>
      <div class="userbutton">
        <a id="userBtn" class="button dark-blue" href="#">登入</a>
        <a id='signBtn' class="button yellow">註冊</a>
      </div>
    </div>
  </div>

<!-- userLightBoxEnd-->

<!-- SignupuserLightBox -->
<div class="userlightboxbccc" id="signupuserlightboxbccc"></div>
  <div class="userLightBox" id="signupuserLightBox">
    <div class="lightbox">
      <div class="closeBox" id="signupcloseBox">
      <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <h4>會員註冊</h4>
      <form>
        <label for="usermail">
          <input type="mail" name="signusermail" placeholder="aaa123@example.com">
        </label>
        <label for="userpsw">
          <input type="password" name="signuserpsw" placeholder="會員密碼">
        </label>
        <label for="username">
          <input type="text" name="username" placeholder="會員名稱">
        </label>
        <label for="userpho">
          <input type="text" name="userpho" placeholder="會員電話">
        </label>
        <label for="usersex">
          <input type="radio" name="usersex" value="0">男
          <input type="radio" name="usersex" value="1">女
        </label>
        <label for="useroccu">
          <input type="text" name="useroccu" placeholder="Engineer">
        </label>
        <div class="userbutton">
          <a id="yesBtn" class="button dark-blue" href="#">確定</a>
          <input type="reset" name="" class="button red">
        </div>
      </form>
      </div>
    </div>


<!-- SignupuserLightBoxEnd-->



      <!--footer_start-->
      <div class="footer">
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
        </div>
      <!-- footer_end -->


  </body>
  <footer>
    <!-- 放JS的地方 -->
  </footer>
</html>
<script src="js/slick.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2CcU1WuGApPmm-c2p5jGF6OHUMfP75os&callback=initMap"
async defer></script>
<script src="js/btn.js"></script>
<script src="js/space_content.js"></script>
<script type="text/javascript" src="js/send_order.js"></script>
<script type="text/javascript" src="js/member.js"></script>
<script type="text/javascript" src="js/loginBox.js">

</script>

</script>
