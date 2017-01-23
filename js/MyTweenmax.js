$(function() {

//====================
 //選單
 //====================
 $('a.className').click(function() {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
               }, 1000);
               return false;
           }
       }
   });

  //  選單下滑開啟

   $(window).scroll(function(){
     var offset_height = 100;
     var distance =$(window).scrollTop();

     if (distance > offset_height){
        $('.nav_bar').addClass('nav_on');
     }else {
       $('.nav_bar').removeClass('nav_on');
     }
   });

   /* ==============================================
  回到最頂端紐
  =============================================== */
    $(window).scroll(function(){
      var offset_height = 400;
      var distance =$(window).scrollTop();

      if (distance > offset_height){
         $('.up_btn').addClass('on');
      }else {
        $('.up_btn').removeClass('on');
      }
    });

    $('.up_btn').on('click',function(e){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0,
      },700);

    });



    // TweenMax.fromTo(".section_01 .title", 1, {
    //     x: -150,
    //     opacity: 0,
    // }, {
    //     x: 0,
    //     repeat: 0,
    //     opacity: 1,
    //     ease: Power1.easeOut,
    //
    // });
    //
    // TweenMax.fromTo(".section_01 .content", 1, {
    //     x: -150,
    //     opacity: 0,
    // }, {
    //     x: 0,
    //     opacity: 1,
    //     delay: 0,
    //     ease: Power1.easeOut
    // });
    //
    // TweenMax.staggerFromTo(".box", 0.5, {
    //         y: -100,
    //         opacity: 0,
    //         rotation: 0,
    //         scale:0,
    //     }, {
    //         y: 0,
    //         opacity: 1,
    //         rotation: 0,
    //         yoyo: true,
    //         scale:1,
    //         // rotation: 360
    //     }, 0.5);

     var controller = new ScrollMagic.Controller();

     var wp = new TimelineMax().staggerFromTo(".box", 0.5, {
           y: 50,
           opacity: 0,
           scale:0,

       }, {
           y: 0,
           opacity: 1,
           scale:1
       }, 0.1);


     var wp_2 = new TimelineMax().staggerFromTo(".icon", 0.5, {
           y: 50,
           opacity: 0,
       }, {
           y: 0,
           opacity: 1,
       }, 0.1);

     var scene = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         reverse: true,
         offset: '100px' //觸發點下移100px

         })

     .setTween(wp)
     .addIndicators() // add indicators (requires plugin)
     .addTo(controller);

    var scene_2 = new ScrollMagic.Scene({
         triggerElement: "#trigger2",
         reverse: true,
          offset: '300px'
    })

    // .setClassToggle('.icon','fade-in') <- add "fade-in" class to .icon
    .setTween(wp_2)
    .addIndicators()
    .addTo(controller);

    var scene_3 = new ScrollMagic.Scene({
         triggerElement: "#trigger3",
         reverse: true,
         offset: '500px'
    })

    .setClassToggle('.section_04','fade_in') //<- add "fade-in" class to .section_04
    .addIndicators({
      name: "k fine change the name"
    })
    .addTo(controller);

    // section5

    var scene_sticky = new ScrollMagic.Scene({
     triggerElement: "#trigger4",
     duration: 400,
     offset: 200
    })

    .setPin("#sticky" ,{spacerClass: 'doge'})
    .addIndicators({
      name :'sticky start'
    })
    .addTo(controller);



    //section_06
    var scene_move = new ScrollMagic.Scene({

      triggerElement: "#section06",
      duration: 500,
      reverse: false, //設定只跑一次
    })

    .setTween(TweenMax.staggerTo(".section_06 .title" , 1 ,{
        opacity: 1,
        x : 700,
        ease: Strong.easeInOut

    }))
    .addIndicators({
       name :'move'
    })
    .addTo(controller);

console.log('move ok');

    //section7 stellar
    $(window).stellar();

    var wp3 = new TimelineMax().staggerFromTo(".centers", 0.5, {
          y: 0,
          opacity: 1


      }, {
          y: 50,
          opacity: 0

      }, 0.1);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        reverse: true,
        offset: '100px', //觸發點下移100px
        duration: 300

        })




    .setTween(wp3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});
