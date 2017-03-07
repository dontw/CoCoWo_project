<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/png" href="img/favicon.ico"/>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery.min.js"></script>

    <!-- TweenMax動畫 -->
    <!--<script src="libs/gsap/src/minified/TweenMax.min.js"></script>
    <script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
    <script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
    <script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script> -->
    <!-- TweenMax動畫 -->

    <!-- 頁面滾動 -->
    <!-- <link rel="stylesheet" href="css/jquery.fullPage.css"> -->
    <!-- <script src="js/jquery.fullPage.js"></script> -->
    <!-- 頁面滾動 -->

    <title>可可窩CoCoWo</title>

</head>
<body class="index_body">
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


<!-- 選單Bar 開始囉XD -->
   <div class="main_nav_bar">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-2 col-md-2">
            <a href="main_page.php">
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
            <a href="post_space.html" class="main_nav_a ">
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
<!-- 選單Bar 結束啦XD -->
<div id="dowebok">
    <!-- <div class="gototop"></div> -->
  <!-- 我是節點 01 -->


<!-- section_01 開始囉XD -->
  <section class="section section_01">
    <div id="section_01"></div>
    <div id="fixed_bg">
      <!--這裡是太陽-->
      <!-- <img id="sun" src="img/cocowo_sun.png" alt="sun"> -->
    </div>

  <!-- container_01 開始包 -->
    <div class="container">

      <!-- 立方塊 開始-->

        <div class="header_title">
        <!-- <object type="image/svg+xml" data="img/maker_space.svg"></object> -->
            <!-- <h2>簡單預約三步驟，一起在共享空間工作</h2> -->
            <h1>工作的地點，你有更多選擇</h1>
        </div>

        <div id="header_3step">
            <div class="header_3step boxL">
              <div class="front"></div>
              <div class="back"><img src="img/cocowo_header_3step01.png" alt=""></div>
              <div class="top"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <div class="header_3step boxC">
              <div class="front"></div>
              <div class="back"><img src="img/cocowo_header_3step02.png" alt=""></div>
              <div class="top"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <div class="header_3step boxR">
              <div class="front"></div>
              <div class="back"><img src="img/cocowo_header_3step03.png" alt=""></div>
              <div class="top"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <!-- <div class="step_title">
              <h4>輸入需求，找到適合空間</h4>
            </div>  -->
        </div>
      <!-- 立方塊 結束 -->

      <!-- 搜尋Bar 開始-->
        <div id="search_bar">
            <div class="select">
              <p class="placeholder">哪種work</p>
              <ul>
                <li>安靜看書</li>
                <li>專心工作</li>
                <li>激發靈感</li>
                <li>好好放鬆</li>
              </ul>
            </div>



            <div class="select">
              <p class="placeholder">要在哪裡</p>
              <ul>
                <li>台北市</li>
                <li>新北市</li>
                <li>桃園市</li>
                <li>新竹市</li>
              </ul>
            </div>



            <div class="select">
              <p class="placeholder">總共幾人</p>
              <ul>
                <li>單人</li>
                <li>1-5人小團體</li>
                <li>10人</li>
                <li>20人以上</li>
              </ul>
            </div>

            <div class="select">
              <a class="button border_button yellow" href="#btn">立即尋找</a>
            </div>


        </div>
      <!-- 搜尋Bar 結束-->
    </div>
  <!-- container_01 結束包 -->
  <ul class="bg-bubbles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </section>
<!-- section_01 結束啦XD -->

  <!-- 我是節點 02 -->

<!-- section_02 開始囉XD -->
  <section class="section section_02">
  <div id="section_02"></div>

  <!-- container_02 開始包 -->
    <div class="container">

        <div class="space_slider B">

          <ul class="slider_overflow">

            <li class="slider_main">
              <div class="space_title" >
                      <h3>討論窩</h3>
                      <h5>適合想互相交流的worker</h5>
                  </div>
              <div class="slider_box">

                <div class="slider talking_space space01">
                  <div class="slider_bg space_bg01">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>

                <div class="slider talking_space space02">
                  <div class="slider_bg space_bg02">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                      </div>
                      <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>

                </div>

                <div class="slider talking_space space03">
                  <div class="slider_bg space_bg03">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>
              </div>
            </li>

            <li class="slider_main">
              <div class="space_title" >
                      <h3>專注窩</h3>
                      <h5>適合需趕著交件的worker</h5>
                  </div>
              <div class="slider_box">

                <div class="slider focus_space space04">
                  <div class="slider_bg space_bg04">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>

                <div class="slider focus_space space05">
                  <div class="slider_bg space_bg05">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                      </div>
                      <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>

                </div>

                <div class="slider focus_space space06">
                  <div class="slider_bg space_bg06">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>
              </div>
            </li>

            <li class="slider_main">
              <div class="space_title" >
                      <h3>隨意窩</h3>
                      <h5>適合不想受拘束的worker</h5>
                  </div>
              <div class="slider_box">

                <div class="slider lazy_space space07">
                  <div class="slider_bg space_bg07">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>

                <div class="slider lazy_space space08">
                  <div class="slider_bg space_bg08">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                      </div>
                      <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>

                </div>

                <div class="slider lazy_space space09">
                  <div class="slider_bg space_bg09">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>
              </div>
            </li>

            <li class="slider_main">
              <div class="space_title" >
                      <h3>自然窩</h3>
                      <h5>適合想親近自然的worker</h5>
                  </div>
              <div class="slider_box">

                <div class="slider nature_space space10">
                  <div class="slider_bg space_bg10">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>

                <div class="slider nature_space space11">
                  <div class="slider_bg space_bg11">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                      </div>
                      <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>

                </div>

                <div class="slider nature_space space12">
                  <div class="slider_bg space_bg12">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>
              </div>
            </li>

            <li class="slider_main">
              <div class="space_title" >
                      <h3>Maker窩</h3>
                      <h5>適合喜愛3D列印的worker</h5>
                  </div>
              <div class="slider_box">

                <div class="slider maker_space space13">
                  <div class="slider_bg space_bg13">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>

                <div class="slider maker_space space14">
                  <div class="slider_bg space_bg14">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                      </div>
                      <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>

                </div>

                <div class="slider maker_space space15">
                  <div class="slider_bg space_bg15">
                    <div class="text">
                            <h2>Treerful 小樹屋</h2>
                            <span></span>
                            <p>
                              Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。
                            </p>
                            <h5>台北市內湖區大湖一街36號</h5>
                            <h4>185元/天</h4>
                            <a class="button border_button dark-blue" href="#btn">觀看更多</a>
                        </div>
                  </div>
                  <div class="close_btn"></div>
                  <div class="preview">
                    <h2 class="heading">Treerful 小樹屋</h2>
                  </div>
                </div>
              </div>
            </li>

          </ul>

        </div>
        <ul class="dot B">
          <li class="myCircle"></li>
          <li class="myCircle"></li>
          <li class="myCircle"></li>
          <li class="myCircle"></li>
          <li class="myCircle"></li>
        </ul>
        <ul class="dot_mobile">
          <!-- <li id="left"></li> -->
          <li id="right" ></li>
          <input id="count" type="hidden" value="1">
     <!--      <input id="countR" type="hidden" value="4"> -->
        </ul>
<!--         <script>
          $(".dot_mobile li").click(function(){
  alert($(".slider_overflow li").length);
});
        </script> -->
        <div id="scene">
          <div class="rotate_scene" onclick="">
            <figure>
              <div class="space_01"><object data="img/cocowo_talking_space.svg" type=""></object></div>
              <div class="space_03"><object data="img/cocowo_lazy_space.svg" type=""></object></div>
              <div class="space_05"><object data="img/cocowo_maker_space.svg" type=""></object></div>

              <div class="front"></div>
              <div class="bottom"></div>
              <div class="back"></div>

              <div class="space_02"><object data="img/cocowo_focus_space.svg" type=""></object></div>
              <div class="space_04"><object data="img/cocowo_nature_space.svg" type=""></object></div>

            </figure>
          </div>
        </div>

    </div>
  <!-- container_02 結束包 -->

  </section>
<!-- section_02 結束啦XD -->

  <!-- 我是節點 03 -->

<!-- section_03 開始囉XD -->
  <section class="section section_03">
  <div id="section_03"></div>

    <div class="container">
      <div class="map_title">
        <h3>附近的空間</h3>
      </div>
    </div>
      <div id="nearby_box">
        <input id="pac-input" class="controls" type="text"
        placeholder="要找哪裡的窩？">
      </div>

    <div id="map"></div>


  </section>
<!-- section_03 結束啦XD -->

  <!-- 我是節點 04 -->

<!-- section_04 開始囉XD -->

  <section class="section section_04">
  <div id="section_04"></div>

    <div class="container">
      <div class="blog_title C">
            <h3>窩日誌</h3>
            <h5>co-work相關最新文章</h5>
      </div>
      <div class="blog_box C">
            <div class="blog blog_01">
              <img src="img/cocowo_blog_img01.jpg" alt="">
              <h5>空間介紹:巴拉巴巴嘎</h5>
              <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？該怎麼分配都是一門大學費用，以下將針對每一項介紹分析。</p>

            </div>
            <div class="blog blog_02">
              <img src="img/cocowo_blog_img02.jpg" alt="">
              <h5>如何靠空間活用致富</h5>
              <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？該怎麼分配都是一門大學費用，以下將針對每一項介紹分析。</p>

            </div>
            <div class="blog blog_03">
              <img src="img/cocowo_blog_img03.jpg" alt="">
              <h5>你所不知的共同工作</h5>
              <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？該怎麼分配都是一門大學費用，以下將針對每一項介紹分析。</p>

            </div>
      </div>
      <div class="blog_btn C">
            <a class="button border_button dark-blue" href="#btn">更多精彩文章</a>
      </div>
    </div>
  </section>
<!-- section_04 結束啦XD -->

  <!-- 我是節點 05 -->


<!-- section_05 開始囉XD -->
  <section class="section section_05">
  <div id="section_05"></div>

    <div class="container">
        <div class="footer_title D">

            <h1><span>work</span>在一起，尋找更多<span>可能</span></h1>

        </div>
            <a class="button border_button yellow D" href="#btn">立即尋找</a>
        </div>
        <img  class="D" src="img/cocowo_footer_people.png" alt="">

  </section>
<!-- section_05 結束啦XD -->

<!-- userLightBox -->
<div class="userlightboxbccc" id="loginuserlightboxbccc"></div>
 <div class="userLightBox" id="loginuserLightBox">
   <div class="lightbox">
     <div class="closeBox" id="logincloseBox">
      <i class="fa fa-times fa-fw" aria-hidden="true"></i>
     </div>
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
       <i class="fa fa-times fa-fw" aria-hidden="true"></i>
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
         <input type="text" name="useroccu" placeholder="職業">
       </label>
       <div class="userbutton">
         <a id="yesBtn" class="button dark-blue" href="#">確定</a>
         <input type="reset" name="" class="button red">
     </form>
     </div>
   </div>
 </div>

<!-- SignupuserLightBoxEnd-->

<!-- footer 開始囉XD -->

  <!-- <div class="section fp-auto-height footer "> -->
  <div class="footer">
  <div id="section_06"></div>

    <!-- <div class="footer_cloud"></div> -->
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

  </div>
<!-- footer 結束啦XD -->
</div>

</body>
<script src="js/index_space.js"></script>
<script src="js/loginBox.js"></script>
<script src="js/member.js"></script>
<!-- <script src="js/tween.js"></script> -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADTKs2WrmkAtyb0RqjlaDZjh0CHlPh1Gc&libraries=places&callback=initMap"
         async defer></script>
  <!-- <script type="text/javascript">
        $(document).ready(function() {
            $('#dowebok').fullpage({
                verticalCentered: true,
                anchors: [ 'HeaderBar', 'AwesomeWo','NearbyWo', 'BlogWo', 'GoSearch','Footer'],
                'navigation': true,
            });
        });
  </script> -->
</html>
