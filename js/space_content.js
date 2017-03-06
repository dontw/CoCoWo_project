$(document).ready(function(){

  //slick slider options
  $('.space_content_slider').on('init', function(event, slick){
    $('.slick-current').addClass('slider_blur_remove');
  });

  $('.space_content_slider').slick({
    slide: '.slider_content',
    arrows:false,
    centerMode:true,
    centerPadding: '10%',
    slidesToShow: 1,
    infinite: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerPadding:'0'
      }
    }]
  });

  //slider left ctrl
  $('.slider_ctrl.left').click(function() {
    $('.space_content_slider').slick('slickPrev');
  });

  //slider right ctrl
  $('.slider_ctrl.right').click(function() {
    $('.space_content_slider').slick('slickNext');
  });



  $('.space_content_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-current').removeClass('slider_blur_remove');
  });

  $('.space_content_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-current').addClass('slider_blur_remove');
  });

  // tab_ctrl
  $('#space_eval_btn').click(function() {
    $('#space_eval_btn').addClass('active');
    $('#space_qa_btn').removeClass('active');
    $('.space_qa').css('display', 'none');
    $('.space_evaluation').css('display', 'block');
  });

  $('#space_qa_btn').click(function() {
    $('#space_qa_btn').addClass('active');
    $('#space_eval_btn').removeClass('active');
    $('.space_evaluation').css('display', 'none');
    $('.space_qa').css('display', 'block');
  });

  //eval_like
  $('.eval_like_btn').click(function() {
    if ($(this).hasClass('click_btn')) {
      $(this).removeClass('click_btn');
      $(this).text("");
      $(this).html('<i class="fa fa-thumbs-up fa-fw" aria-hidden="true"></i>這對我有幫助！');
    }else {
      $(this).addClass('click_btn');
      $(this).text("");
      $(this).html('<i class="fa fa-thumbs-up fa-fw" aria-hidden="true"></i>已按有幫助');
    }

  //report_space
  $('#report_space').click(function() {
      $(this).text("");
      $(this).text("您已檢舉本空間");
  });

  });

  $('.space_qa_order span a').on('click',function(e){
    e.preventDefault();
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.space_evaluation_order span a').on('click',function(e){
    e.preventDefault();
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });

  //add_ordeer_box
  var fadeTime = 500;
  $('.order_btn').on('click',function(){
    $('.order_light_box').css({display:'block',opacity:'0'});
    $('.order_light_box').stop().animate({opacity:'1'},fadeTime, function()
      {
        $('.order_light_box').css({display:'block'});
      });
      return false;
  });

  $('.order_light_box .close_box,.thx_button').on('click',function(){
    $('.order_light_box').stop().animate({opacity:'0'},fadeTime, function()
      {
        $('.order_light_box').css({display:'none'});
      });
  });

  $('.order_next_btn_1').on('click',function(){
    if($('#date-range0').val()&&$('#order_number_input').val()){
      $('.step_2').addClass('active');
      $('.input_contents').animate({top: "-100%"},700,'easeOutBack');
      $('.content_2').animate({opacity: 1},700,'easeInOut');
    }else{
      alert('請輸入日期與預訂數量!');
    }
  });

  $('.order_pre_btn_1').on('click',function(){
    $('.step_2').removeClass('active');
    $('.input_contents').animate({top: "0%"},500,'easeOut');
  });

  $('.order_next_btn_2').on('click',function(){
    if($('#order_name_input').val() && $('#order_phone_input').val() && $('#order_mail_input').val()){
      $('.step_3').addClass('active');
      $('.input_contents').animate({top: "-200%"},700,'easeOutBack');
      $('.content_3').animate({opacity: 1},700,'easeInOut');
    }else{
      alert('請輸入訂單聯絡資訊!');
    }
  });

  $('.order_pre_btn_2').on('click',function(){
    $('.step_3').removeClass('active');
    $('.input_contents').animate({top: "-100%"},500,'easeOut');

  });

  $('.order_next_btn_3').on('click',function(){
    $('.step_4').addClass('active');
    $('.input_contents').animate({top: "-300%"},700,'easeOutBack');
    $('.content_4').animate({opacity: 1},700,'easeInOut');
  });

  $('.order_pre_btn_3').on('click',function(){
    $('.step_4').removeClass('active');
    $('.input_contents').animate({top: "-200%"},500,'easeOut');
  });


  $('.cube-wrapper').hide();
  $('.thx_order').animate({opacity:'0'}, function () {
        $(this).css('z-index', -1);
    });
  $('.order_next_btn_4').on('click',function(){
    if(confirm("確認送出訂單?")){
        $('.add_order_progressbar,.pay_title,.pay_radios,.order_pre_btn_3,.order_next_btn_4').hide();
        $('.cube-wrapper').show();
        $('.cube-wrapper').delay(3000).animate({opacity:0});
        $('.thx_order').delay(3000).animate({opacity:'1'},300,function(){
          $(this).css('z-index', 50);
        });
      return false;
    }
    return false;
  });

// get current date
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = d.getFullYear() + '-' +
    ((''+month).length<2 ? '0' : '') + month + '-' +
    ((''+day).length<2 ? '0' : '') + day;

var dates_num;

  $('#date-range0').dateRangePicker({
        language:'tc',
        startDate: output,
        separator: ' ~ ',
        autoClose: true,
        getValue: function()
        	{
        		var dateObject = $(this).val();
        	}
      });
  var days_num = 0;
  var people_num = 0 + 1;




  $(".date-picker-wrapper.no-shortcuts").on("change keyup paste mousemove", function(){
    // alert('date ok!');
    $('.order_dates').text($('#date-range0').val());
  });

  $("#order_number_input").on("change keyup paste", function(){
    $('.selected_number').text($('#order_number_input').val());
    people_num = $('#order_number_input').val();
    return people_num;
  });

  $(".date-picker-wrapper.no-shortcuts").on(" mousemove", function(){
    // alert('ok!');
    days_num = $('.selected-days-num').html();
    // console.log(days_num);
    $('.selected_date_panel').text(days_num);
    return days_num;
  });

  $(".selected_number,.selected_date_panel,.order_dates").bind("DOMSubtreeModified",function(){
    var space_price = $('.space_price').html();
    var total =days_num * people_num * space_price;
    $('.total_money').text(total);
  });

  $("#order_name_input").on("change keyup paste", function(){
    $('.order_name').text($(this).val());
  });

  $("#order_phone_input").on("change keyup paste", function(){
    $('.order_phone').text($(this).val());
  });

  $("#order_mail_input").on("change keyup paste", function(){
    $('.order_mail').text($(this).val());
  });

  $("#order_info_input").on("change keyup paste", function(){
    $('.order_info').text($(this).val());
  });

  $('.space_price').text($('.main_space_price').html());

  });

  $(window).keydown(function(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    return false;
  }

  if(event.keyCode == 9) {
    event.preventDefault();
    return false;
  }

  //Ajax

  //去得各空間設備
  $.ajax({
    type : 'get',
    url : 'spacontent_device_JSON.php',
    data : {
      dev : $('input[name="spadev"]').val()
    },
    datatype:'JSON',
    error:function(xhr){
      console.log(xhr.responseText);
    },
    success:function(data){
      // data = JSON.stringify(data);

      for(var i=0;i<data.length;i++){
        $('.space_equip_item_wrapper').append(
            '<div class="space_equip_item">'
           +'  <img class="item_img" src="' + data[i].dev_icon +'">'
           +'  <span class="item_name">' + data[i].dev_name +'</span>'
           +'</div>'
        );
        // $('#cc').css(
        //     "background-image" , "url( " +data[i].dev_icon+ ")"
        // );
      }//for
     // console.log(data);
   }//success
  })

  //去得上方動態照片
  $.ajax({
    type : 'get',
    url :  'spacontent_photo_JSON.php',
    data : {
      pho : $('input[name="spadev"]').val()
    },
    datatype : 'JSON',
    error:function(xhr){
      console.log(xhr.responseText);
    },
    success:function(p){
      for(var i=0 ; i< p.length;i++){
        // $('.space_content_slider').append(
        //     '<div class="slider_content">'
        //   + '  <div class="content_img" style="width:100px;height:400px;background-image: url(' + p[i].pho_name + ');></div>'
        //   + '</div>'
        // );
        $('.img1').css(
          "background-image" , "url(" + p[0].pho_name + ")"
        );
        $('.img2').css(
          "background-image" , "url(" + p[1].pho_name + ")"
        );
        $('.img3').css(
          "background-image" , "url(" + p[2].pho_name + ")"
        );
        $('.img4').css(
          "background-image" , "url(" + p[3].pho_name + ")"
        );
      }
      // console.log(p);
    }
  })

  //取得空間星星樣式
    $.ajax({
            type:'get',
            url:'spacontent_stars_JSON.php',
            data : {
                star : $('input[name="spadev"]').val()
            },
            dataType:'json',
            error:function(xhr){
                console.log(xhr.responseText);
            },
            success:function(e){
                var star1 = "";
                var star0 = "";

                for(var i=0;i<e.length;i++){

                    star1 = "";
                    for(var y=0;y<e[i].spa_allscore;y++){
                        star1 = star1 + '<img src="img/star1.png">';
                    }

                    star0 = "";
                    for(var z=0;z<5-e[i].spa_allscore;z++){
                        star0 = star0 + '<img src="img/star0.png">';
                    }

                    $('#span_star_score').append(star1+star0);

                }
            }
    });

    //空間使用者
    $.ajax({
            type:'get',
            url:'spacontent_user_JSON.php',
            data : {
                user : $('input[name="spadev"]').val()
            },
            dataType:'json',
            error:function(xhr){
                console.log(xhr.responseText);
            },
            success:function(u){

                for(var i=0;i<u.length;i++){

                    $('#usermember').append(
                         '<div class="space_user_item">'
                        +'  <img class="user_img" src="' + u[i].mem_img + '">'
                        +'  <div class="user_status">'
                        +'    <span class="user_name">' + u[i].mem_name + '</span>'
                        +'    <span class="user_occu">' + u[i].mem_occu + '</span>'
                        +'  </div>'//user_status
                        +'</div>'//space_user_item
                    );

                    $('.owner_img').attr("src",u[0].mem_img);
                    $('.owner_desc span').text(u[0].mem_name);

                }

                // console.log(u);
            }
    });

    // //讀取窩誌編號
    //   $.ajax({
    //     type:'get',
    //     url:'spacontent_blog_JSON.php',
    //     data : {
    //       spa : $('input[name="spadev"]').val()
    //     },
    //     dataType:'json',
    //     error:function(xhr){
    //       console.log(xhr.responseText);
    //     },
    //     success:function(b){
    //
    //       for(var i=0;i<b.length;i++){
    //         var no = b[i].blog_no;
    //         $('#spablog').val(no);
    //
    //       }//for
    //
    //       //bg();
    //
    //     }
    //   });


      count = 3;
      //顯示問與答
            $.ajax({
                type : 'get',
                url : 'spacontent_qadefaule_JSON.php',
                data : {
                    blog : $('input[name="spadev"]').val()
                },
                dataType : 'json',
                error:function(xhr){
                  console.log(xhr.responseText);
                },
                success:function(qad){
                    var count = 0;
                    for(var i=0;i<qad.length;i++){
                        $('.qa_result').append(

                        '<div class="space_qa_item col-md-12">'
                        +'  <p class="qa_item_no">問與答#'+ count +'</p>'
                        +'  <div class="col-md-2 qa_asker">'
                        +'    <img class="eval_user_img" src="img/dummy_user.png" alt="">'
                        +'    <p class="user_name">遊客</p>'
                        +'    <p class="user_occu">遊客' + count + '號</p>'
                        +'  </div>'//qa_asker
                        +'  <div class="col-md-10 qa_asker_content">'
                        +'    <div class="col-xs-12 asker_bubble unanswer">'
                        +'      <p class="asker_tag">提問：</p>'
                        +'      <p class="asker_word">' + qad[i].qa_qcontent + '</p>'
                        +'      <p class="asker_time">於 ' + qad[i].qa_qtime + '</p>'
                        +'    </div>'//unanswer
                        +'  </div>'//qa_asker_content
                        +'</div>');//item
                        // $('.space_qa').reload();
                         count++;
                    }

                            //console.log(qad);


              }//success

          });//ajax


        //顯示窩誌
        $.ajax({
            type : 'get',
            url : 'spacontent_blogarticle_JSON.php',
            data : {
              blog : $('input[name="spadev"]').val()
            },
            dataType : 'json',
            error:function(xhr){
              console.log(xhr.responseText);
            },
            success:function(b){
                for(var i=0;i<b.length;i++){
                  $('.space_blogs').append(
                    ' <div class="col-md-3">'
                    +'  <div class="blog_item">'
                    +'    <img src="'+ b[i].bp_name +'" alt="cowork">'
                    +'    <div class="blog_content">'
                    +'      <h5>'+ b[i].blog_title +'</h5>'
                    +'      <p>想開店的朋友，都知道初期必須準備一筆資金，而初期到底要準備多少資金，到底有什麼要花錢？...  <a href="#">...more</a></p>'
                    +'    </div>'//blog_content
                    +'  </div>'//blog_item
                    +'</div>'); //col

                }


            }//success

          });//ajax





      // function bg(){
      //   var num = $('input[name="spabg"]').val();

      //   //顯示問與答
      //     $.ajax({
      //       type : 'get',
      //       url : 'spacontent_qadefaule_JSON.php',
      //       data : {
      //         blog : num
      //       },
      //       dataType : 'json',
      //       error:function(xhr){
      //           console.log(xhr.responseText);
      //       },
      //       success:function(qad){
      //             count = 0;
      //           for(var i=0;i<qad.length;i++){
      //               $('.qa_result').append(

      //                 '<div class="space_qa_item col-md-12">'
      //                 +'  <p class="qa_item_no">問與答#'+ count +'</p>'
      //                 +'  <div class="col-md-2 qa_asker">'
      //                 +'    <img class="eval_user_img" src="img/write.jpeg" alt="">'
      //                 +'    <p class="user_name">遊客</p>'
      //                 +'    <p class="user_occu">遊客號</p>'
      //                 +'  </div>'//qa_asker
      //                 +'  <div class="col-md-10 qa_asker_content">'
      //                 +'    <div class="col-xs-12 asker_bubble unanswer">'
      //                 +'      <p class="asker_tag">提問：</p>'
      //                 +'      <p class="asker_word">' + qad[i].msg_content + '</p>'
      //                 +'      <p class="asker_time">於 2017－1－20</p>'
      //                 +'    </div>'//unanswer
      //                 +'  </div>'//qa_asker_content
      //                 +'</div>');//item
      //               // $('.space_qa').reload();
      //               count++;
      //           }

      //           //console.log(num);


      //       }//success

      //     })//ajax
      // }//bg

  });

  //送出問與答
    $('.qa_input_btn').click(function(){
          $.ajax({
            type : 'get',
            url : 'spacontent_qa_JSON.php',
            data : {
              bg : $('input[name="spadev"]').val(),
              txt : $('.qa_input').val()
            },
            dataType : 'json',
            error:function(xhr){
                console.log(xhr.responseText);
            },
            success:function(qa){
                $('.qa_result').empty();

                for(var i=0;i<qa.length;i++){
                    $('.qa_result').append(
                      '<div class="space_qa_item col-md-12">'
                      +'  <p class="qa_item_no">問與答#2</p>'
                      +'  <div class="col-md-2 qa_asker">'
                      +'    <img class="eval_user_img" src="img/dummy_user.png" alt="">'
                      +'    <p class="user_name">遊客</p>'
                      +'    <p class="user_occu">遊客' + count + '號</p>'
                      +'  </div>'//qa_asker
                      +'  <div class="col-md-10 qa_asker_content">'
                      +'    <div class="col-xs-12 asker_bubble unanswer">'
                      +'      <p class="asker_tag">提問：</p>'
                      +'      <p class="asker_word">' + qa[i].qa_qcontent + '</p>'
                      +'      <p class="asker_time">於' + qa[i].qa_qtime + '</p>'
                      +'    </div>'//unanswer
                      +'  </div>'//qa_asker_content
                      +'</div>');//item

                    count++;
                }

                $('.qa_input').val('');

            }//success

          })//ajax

    });//click



























function initMap() {
  // Create a map object and specify the DOM element for display.
  var mapOptions = {

    scrollwheel: false,
    // 預設地圖的放大級數
    zoom: 16,

    // 地圖中心的經緯度
    center: new google.maps.LatLng(25.02523,121.54310),
  };

// 拿地圖的html div
var mapElement = document.getElementById('map');

// 將上面對地圖的設定套用在選定的div地圖上
var map = new google.maps.Map(mapElement, mapOptions);

// marker小圖標得設定寫在這!
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(25.02523,121.54310),
  map: map,
  title: 'Prototype Hacker Demo'
});


}
