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
  $('.order_light_box .close_box').on('click',function(){

    $('.order_light_box').stop().animate({opacity:'0'},fadeTime, function()
      {
        $('.order_light_box').css({display:'none'});
      });
  });

  $('.order_next_btn_1').on('click',function(){
    $('.step_2').addClass('active');
  });

  $('.order_pre_btn_1').on('click',function(){
    $('.step_2').removeClass('active');
  });

  $('.order_next_btn_2').on('click',function(){
    $('.step_3').addClass('active');
  });

  $('.order_pre_btn_2').on('click',function(){
    $('.step_3').removeClass('active');
  });

  $('.order_next_btn_3').on('click',function(){
    $('.step_4').addClass('active');
  });

  $('.order_pre_btn_3').on('click',function(){
    $('.step_4').removeClass('active');
  });




});





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
