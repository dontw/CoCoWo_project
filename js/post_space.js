

$(window).load(function(){
  $("#preloader").delay(3000).hide();
  $(".post_space").show();
});



$(document).ready(function(){

  $('#money').sparkleHover(
  {image:'../img/flipping_coin.gif',
  sprite_size:48,
  colors : ['transperant'],
  lifespan: 3000,
  radius:800,
  num_sprites: 100
  });

  // onepage_scroll
  $(".main").onepage_scroll({
     sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
     beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
     loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
     keyboard: true,                  // You can activate the keyboard controls
     responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                      // the browser's width is less than 600, the fallback will kick in.
     direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });



  // tweenMax
  //sec_2 animation
  //falling ground
  var controller = new ScrollMagic.Controller();

  var wp = new TimelineMax().staggerFromTo(".person", 2, {
        y: -700,
        opacity: 1,
        scale:1,

    }, {
        y: 0,
        opacity: 1,
        scale:1,
        ease: Bounce.easeOut
    }, 1);


  var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      reverse: false,
      offset: '100px' //觸發點下移100px

      })

  .setTween(wp)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


  //growing furnitures
  var wp_2 = new TimelineMax().staggerFromTo(".furni", 0.5, {

        y: 0,
        opacity: 0,
        scale:0,

    }, {
        delay: 3,
        y: 0,
        opacity: 1,
        scale:1,
        ease: Power3.easeOut,
    }, 0.5);

  var scene_2 = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      reverse: false,
      offset: '110px',


      })

  .setTween(wp_2)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  //devices move in

  var wp_3 = new TimelineMax().staggerFromTo(".devices", 1.5, {

        x: -500,
        opacity: 0,
        scale:1,

    }, {
        delay: 7,
        x: 0,
        opacity: 1,
        scale:1,
        ease: Power3.easeOut,
    }, 0.8);

  var scene_3 = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      reverse: false,
      offset: '120px',


      })

  .setTween(wp_3)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  //sec3
  //ground fall in
  var wp_4 = new TimelineMax().staggerFromTo(".ground_wrap_2", 2, {

        x: -300,
        y: -1500,
        opacity: 1,
        scale:1,

    }, {
        delay: 0.5,
        x: 0,
        y:0,
        opacity: 1,
        scale:1,
        ease: Power3.easeOut,
    }, 0.8);

  var scene_4 = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      reverse: true,
      offset: '120px',


      })

  .setTween(wp_4)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

//user fall in
  var wp_5 = new TimelineMax().staggerFromTo(".user", 0.5, {

        y: -800,
        opacity: 0,
        scale:1,

    }, {
        delay: 2.5,
        x: 0,
        y:0,
        opacity: 1,
        scale:1,
        ease: Power3.easeOut,
    }, 0.3);

  var scene_5 = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      reverse: true,
      offset: '120px',


      })
  .setTween(wp_5)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

function clickAndShowMoney(){
  $("#money").click();
  delay(1000);
  $("#money").click();
}


//user_inter fade in
  var wp_6 = new TimelineMax().staggerFromTo(".user_inter", 2, {

        y: 300,
        opacity: 0,
        scale:1,

    }, {
        delay: 5,
        x: 0,
        y:0,
        opacity: 1,
        scale:1,
        ease: Power3.easeOut,
        onComplete: clickAndShowMoney
    }, 0.3);

  var scene_6 = new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      reverse: true,
      offset: '120px',


      })
  .setTween(wp_6)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  var wp_7 = new TimelineMax().staggerTo(".user_inter", 2, {
        delay: 6.5,
        y: -300,
        opacity: 0,
        scale:1,

    }, 0.3);

  var scene_7 = new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      reverse: true,
      offset: '120px',


      })
  .setTween(wp_7)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  if ($(window).width() < 768) {
    var wp_8 = new TimelineMax().staggerFromTo(".fixed_post", 0.05, {

          // css:{top: "5%"},
          opacity: 1,
          scale:1,

      }, {
          css:{className:'+=CenterBtnMobile'},
          delay: 0,
          opacity: 1,
          ease: Power0.easeNone,
      }, 0);

    var scene_8 = new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        reverse: true,
        offset: '120px',


        })
    .setTween(wp_8)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


}
else{
  var wp_8 = new TimelineMax().staggerFromTo(".fixed_post", 0.05, {

        opacity: 1,
        scale:1,

    }, {
        css:{className:'+=CenterBtn'},
        delay: 0,
        opacity: 1,
    }, 0);

  var scene_8 = new ScrollMagic.Scene({
      triggerElement: "#trigger8",
      reverse: true,
      offset: '120px',


      })
  .setTween(wp_8)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

}

//pouring money

var wp_9 = new TimelineMax().staggerTo(".user_inter", 2, {
      delay: 6.5,
      y: -300,
      opacity: 0,
      scale:1,

  }, 0.3);

var scene_9 = new ScrollMagic.Scene({
    triggerElement: "#trigger9",
    reverse: true,
    offset: '120px',


    })
.setTween(wp_7)
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

  $('.upper_slider').slick({
    slide: '.upper_content',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.buttom_slider',
    useCSS: true,
		cssEase: 'ease',
		infinite: true,
		lazyLoad: 'ondemand',
		cssTransitions: true,

     });

  $('.buttom_slider').on('init', function(event, slick){
    $('.slick-current').addClass('add_color');
   console.log('slider was initialized');
  });

  $('.buttom_slider').slick({
    slide: '.buttom_content',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.upper_slider',
    focusOnSelect: true,
    draggable: false,
		autoplay: true,
		autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: false,
					autoplaySpeed: 2000
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
  ]
  });

  $('.buttom_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-current').removeClass('add_color');
  });

  $('.buttom_slider').on('afterChange', function(event, slick, currentSlide){
    $('.slick-current').addClass('add_color');
  });

  $('.fixed_post').on('click',function(){
    if (sessionStorage.getItem("username")) {
      var url = "post_space_input.php";
      window.location = url;
      return false;
    }else{
      alert("請先登入會員!");
      $('.main_nav_user_a').click();
    }
  });








});
