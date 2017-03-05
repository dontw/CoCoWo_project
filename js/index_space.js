//loading
$(window).load(function(){
  $("#preloader").hide();
  $(".index_body").show();
});

// section_01
	// 下拉選單 start
		$('.select').on('click','.placeholder',function(){
	      var parent = $(this).closest('.select');
	      if ( ! parent.hasClass('is-open')){
	        parent.addClass('is-open');
	        $('.select.is-open').not(parent).removeClass('is-open');
	      }else{
	        parent.removeClass('is-open');
	      }
	    }).on('click','ul>li',function(){
	      var parent = $(this).closest('.select');
	      parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
	    });
	// 下拉選單 end
// section_01

// section_02
	// 精選空間動畫 start
		 function WinOnResize(){ // 以 function 的方式來寫
			 if ( document.body.clientWidth > 768 ) // 當瀏覽器寬度 > 768px 例如 Full-HD
			 {
				// 大視窗 start

					//大視窗 -- 精選空間幻燈片展開 start

					// 討論窩
					$(".space01").click(function(){
						$(".space02,.space03,.preview").css({display:'none'});
						$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg01").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space02").click(function(){
						$(".space01,.space03,.preview").css({display:'none'});
						$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg02").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space03").click(function(){
						$(".space01,.space02,.preview").css({display:'none'});
						$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg03").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(document).on('click','.close_btn',function(){
				  		$(".space_bg01,.space_bg02,.space_bg03").css({transform:'translate3d(-30%,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'0',transition:'.2s'});
						$(".close_btn").css({opacity:'0',transition:'.2s'});
						$(".space01,.space02,.space03,.preview").css({display:'flex'});
						$(".talking_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
					});
					// 專注窩
					$(".space04").click(function(){
						$(".space05,.space06,.preview").css({display:'none'});
						$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg04").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space05").click(function(){
						$(".space04,.space06,.preview").css({display:'none'});
						$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg05").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space06").click(function(){
						$(".space04,.space05,.preview").css({display:'none'});
						$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg06").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(document).on('click','.close_btn',function(){
				  		$(".space_bg04,.space_bg05,.space_bg06").css({transform:'translate3d(-30%,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'0',transition:'.2s'});
						$(".close_btn").css({opacity:'0',transition:'.2s'});
						$(".space04,.space05,.space06,.preview").css({display:'flex'});
						$(".focus_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
					});
					// 隨意窩
					$(".space07").click(function(){
						$(".space08,.space09,.preview").css({display:'none'});
						$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg07").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space08").click(function(){
						$(".space07,.space09,.preview").css({display:'none'});
						$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg08").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space09").click(function(){
						$(".space07,.space08,.preview").css({display:'none'});
						$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg09").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(document).on('click','.close_btn',function(){
				  		$(".space_bg07,.space_bg08,.space_bg09").css({transform:'translate3d(-30%,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'0',transition:'.2s'});
						$(".close_btn").css({opacity:'0',transition:'.2s'});
						$(".space07,.space08,.space09,.preview").css({display:'flex'});
						$(".lazy_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
					});
					// 自然窩
					$(".space10").click(function(){
						$(".space11,.space12,.preview").css({display:'none'});
						$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg10").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space11").click(function(){
						$(".space10,.space12,.preview").css({display:'none'});
						$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg11").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space12").click(function(){
						$(".space10,.space11,.preview").css({display:'none'});
						$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg12").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(document).on('click','.close_btn',function(){
				  		$(".space_bg10,.space_bg11,.space_bg12").css({transform:'translate3d(-30%,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'0',transition:'.2s'});
						$(".close_btn").css({opacity:'0',transition:'.2s'});
						$(".space10,.space11,.space12,.preview").css({display:'flex'});
						$(".nature_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
					});
					// Maker窩
					$(".space13").click(function(){
						$(".space14,.space15,.preview").css({display:'none'});
						$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg13").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space14").click(function(){
						$(".space13,.space15,.preview").css({display:'none'});
						$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg14").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(".space15").click(function(){
						$(".space13,.space14,.preview").css({display:'none'});
						$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'2s'});
						$(".space_bg15").css({transform:'translate3d(0,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'1',transition:'2s'});
						$(".close_btn").css({opacity:'1',transition:'3s'});
					});
					$(document).on('click','.close_btn',function(){
				  		$(".space_bg13,.space_bg14,.space_bg15").css({transform:'translate3d(-30%,0,0)' ,transition:'1s'});
						$(".text").css({opacity:'0',transition:'.2s'});
						$(".close_btn").css({opacity:'0',transition:'.2s'});
						$(".space13,.space14,.space15,.preview").css({display:'flex'});
						$(".maker_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
					});
					//大視窗 --  精選空間幻燈片展開 end

					//大視窗 --  精選空間幻燈片位移&旋轉 start
					$(function(){

					 	var _dotIndex = 0,
					 		_originDeg = 70,
							_mainWidth = $('.space_slider').width(),
							_move = _dotIndex * _mainWidth * -1,
							_rotate = _originDeg + _dotIndex  * 180;

						$('.dot li').click(function(){

							var _dotIndex = $(this).index(),

							_mainWidth = $('.space_slider').width(),
							_move = _dotIndex * _mainWidth * -1,
							_rotate = _originDeg + _dotIndex  * 180;
							// 移動幻燈片
							$('.slider_overflow').css({left: _move });

						// 旋轉地板
						if (_dotIndex%2==0) {
					      $("figure").css({transform:"rotateX("+_rotate+"deg) translateZ(6vw)"});
						}
						else{
					      $("figure").css({transform:"rotateX("+_rotate+"deg) translateZ(-3vw)"});

						}

						// 按鈕事件
						if (_dotIndex==0) {
						      $("object").css("opacity","0");
						      $(".space_01 object").css("opacity","1");
						      $(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
						      $(".dot li:nth-child(1)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
							}
							else if(_dotIndex==1){
								$("object").css("opacity","0");
								$(".space_02 object").css("opacity","1");
						      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								$(".dot li:nth-child(2)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
							}
							else if(_dotIndex==2){
								$("object").css("opacity","0");
						      	$(".space_03 object").css("opacity","1");
						      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
						      	$(".dot li:nth-child(3)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
							}
							else if(_dotIndex==3){
								$("object").css("opacity","0");
						      	$(".space_04 object").css("opacity","1");
						      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
						      	$(".dot li:nth-child(4)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
							}
							else {
								$("object").css("opacity","0");
						      	$(".space_05 object").css("opacity","1");
						      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
						      	$(".dot li:nth-child(5)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
							}
						});

					});
					//大視窗 -- 精選空間幻燈片位移&旋轉 end
				// 大視窗 end
			 }
			 else if( document.body.clientWidth < 768 ) // 當瀏覽器寬度 < 768px 例如 1280*1024 或 NB 的 1366*768
			 {
				// 小視窗 end
							//小視窗 -- 精選空間幻燈片展開 start

							// 討論窩
							$(".space01").click(function(){
								$(".space02,.space03,.preview").css({display:'none'});
								$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg01").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space02").click(function(){
								$(".space01,.space03,.preview").css({display:'none'});
								$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg02").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space03").click(function(){
								$(".space01,.space02,.preview").css({display:'none'});
								$(".talking_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg03").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(document).on('click','.close_btn',function(){
						  		$(".space_bg01,.space_bg02,.space_bg03").css({transform:'translate3d(-20%,0,0)', height:'15vh' ,transition:'.5s'});
								$(".text").css({opacity:'0',transition:'.2s'});
								$(".close_btn").css({opacity:'0',transition:'.2s'});
								$(".space01,.space02,.space03,.preview").css({display:'flex'});
								$(".talking_space").css({cursor:'pointer',overflow:'hidden',width:'100%', transition:'.5s'});
							});
							// 專注窩
							$(".space04").click(function(){
								$(".space05,.space06,.preview").css({display:'none'});
								$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg04").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space05").click(function(){
								$(".space04,.space06,.preview").css({display:'none'});
								$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg05").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space06").click(function(){
								$(".space04,.space05,.preview").css({display:'none'});
								$(".focus_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg06").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(document).on('click','.close_btn',function(){
						  		$(".space_bg04,.space_bg05,.space_bg06").css({transform:'translate3d(-20%,0,0)', height:'15vh' ,transition:'1s'});
								$(".text").css({opacity:'0',transition:'.2s'});
								$(".close_btn").css({opacity:'0',transition:'.2s'});
								$(".space04,.space05,.space06,.preview").css({display:'flex'});
								$(".focus_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
							});
							// 隨意窩
							$(".space07").click(function(){
								$(".space08,.space09,.preview").css({display:'none'});
								$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg07").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space08").click(function(){
								$(".space07,.space09,.preview").css({display:'none'});
								$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg08").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space09").click(function(){
								$(".space07,.space08,.preview").css({display:'none'});
								$(".lazy_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg09").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(document).on('click','.close_btn',function(){
						  		$(".space_bg07,.space_bg08,.space_bg09").css({transform:'translate3d(-20%,0,0)', height:'15vh' ,transition:'1s'});
								$(".text").css({opacity:'0',transition:'.2s'});
								$(".close_btn").css({opacity:'0',transition:'.2s'});
								$(".space07,.space08,.space09,.preview").css({display:'flex'});
								$(".lazy_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
							});
							// 自然窩
							$(".space10").click(function(){
								$(".space11,.space12,.preview").css({display:'none'});
								$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg10").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space11").click(function(){
								$(".space10,.space12,.preview").css({display:'none'});
								$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg11").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space12").click(function(){
								$(".space10,.space11,.preview").css({display:'none'});
								$(".nature_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg12").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(document).on('click','.close_btn',function(){
						  		$(".space_bg10,.space_bg11,.space_bg12").css({transform:'translate3d(-20%,0,0)', height:'15vh' ,transition:'1s'});
								$(".text").css({opacity:'0',transition:'.2s'});
								$(".close_btn").css({opacity:'0',transition:'.2s'});
								$(".space10,.space11,.space12,.preview").css({display:'flex'});
								$(".nature_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
							});
							// Maker窩
							$(".space13").click(function(){
								$(".space14,.space15,.preview").css({display:'none'});
								$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg13").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space14").click(function(){
								$(".space13,.space15,.preview").css({display:'none'});
								$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg14").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(".space15").click(function(){
								$(".space13,.space14,.preview").css({display:'none'});
								$(".maker_space").css({cursor:'default',overflow:'visible',width:'100%',transition:'1s'});
								$(".space_bg15").css({transform:'translate3d(0,0,0)' ,transition:'1s' ,height:'55vh'});
								$(".text").css({opacity:'1',transition:'1s'});
								$(".close_btn").css({opacity:'1',transition:'1s'});
							});
							$(document).on('click','.close_btn',function(){
						  		$(".space_bg13,.space_bg14,.space_bg15").css({transform:'translate3d(-20%,0,0)', height:'15vh' ,transition:'1s'});
								$(".text").css({opacity:'0',transition:'.2s'});
								$(".close_btn").css({opacity:'0',transition:'.2s'});
								$(".space13,.space14,.space15,.preview").css({display:'flex'});
								$(".maker_space").css({cursor:'pointer',overflow:'hidden',width:'100%',transition:'1s'});
							});
							//小視窗 -- 精選空間幻燈片展開 end

							//小視窗 -- 精選空間幻燈片位移&旋轉 start

							$(function(){



								$('#right').click(function(){
									var count = document.getElementById('count').value; //點擊次數
									var _sliderLength = $(".slider_overflow li").length; //幻燈片長度

									var _mainWidth = $('.space_slider').width(); //幻燈片有五個窩 抓到每一種窩的寬度:90vh
									var _move = count * _mainWidth * -1; //移動幻燈片的數值 點擊次數*窩寬度*-1
									var _originDeg = 40; //地板初始角度
									var _rotate = _originDeg + count  * 180; //旋轉地板的數值 初始角度+點擊次數*180

									if (count == 0 || count == 2 || count == 4) {//如果點擊次數等於2or4向左邊位移_move,地板旋轉_rotate
										$('.slider_overflow').css({left: _move });
								        $("figure").css({transform:"rotateX("+_rotate+"deg) translateX(-26vw) translateZ(-10vw)"});
									}
									else if(count == 1 || count == 3 ){//如果點擊次數等於2or4向左邊位移_move,地板旋轉_rotate
										$('.slider_overflow').css({left: _move });
								        $("figure").css({transform:"rotateX("+_rotate+"deg) translateX(-26vw) translateZ(10vw)"});

									}

								    if (count==0) {

								      $("object").css("opacity","0");
								      $(".space_01 object").css("opacity","1");
								      $(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								      $(".dot li:nth-child(1)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
									}
									else if(count==1){


										$("object").css("opacity","0");
										$(".space_02 object").css("opacity","1");
								      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
										$(".dot li:nth-child(2)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
									}
									else if(count==2){


										$("object").css("opacity","0");
								      	$(".space_03 object").css("opacity","1");
								      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								      	$(".dot li:nth-child(3)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
									}
									else if(count==3){


										$("object").css("opacity","0");
								      	$(".space_04 object").css("opacity","1");
								      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								      	$(".dot li:nth-child(4)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
									}
									else {


										$("object").css("opacity","0");
								      	$(".space_05 object").css("opacity","1");
								      	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								      	$(".dot li:nth-child(5)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
									}

									if (count==4) {
										count=0;
									}
									else{
										count ++;
									}

									// alert(count);
									document.getElementById("count").value=count;
								});



								// $('#left').click(function(){
								// 	var count = document.getElementById('count').value; //點擊次數
								// 	var _sliderLength = $(".slider_overflow li").length; //幻燈片長度

								// 	var _mainWidth = $('.space_slider').width(); //幻燈片有五個窩 抓到每一種窩的寬度:90vh
								// 	var _move = count * _mainWidth * 1; //移動幻燈片的數值 點擊次數*窩寬度*-1
								// 	var _originDeg = 40; //地板初始角度
								// 	var _rotate = _originDeg + count  * 180; //旋轉地板的數值 初始角度+點擊次數*180

								// 	if (count == 0 || count == 2 || count == 4) {//如果點擊次數等於2or4向左邊位移_move,地板旋轉_rotate
								// 		$('.slider_overflow').css({left: _move });
								//         $("figure").css({transform:"rotateX("+_rotate+"deg) translateX(-26vw) translateZ(-10vw)"});
								// 	}
								// 	else if(count == 1 || count == 3 ){//如果點擊次數等於2or4向左邊位移_move,地板旋轉_rotate
								// 		$('.slider_overflow').css({left: _move });
								//         $("figure").css({transform:"rotateX("+_rotate+"deg) translateX(-26vw) translateZ(10vw)"});

								// 	}

								//     if (count==0) {

								//       $("object").css("opacity","0");
								//       $(".space_05 object").css("opacity","1");
								//       $(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								//       $(".dot li:nth-child(1)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
								// 	}
								// 	else if(count==1){


								// 		$("object").css("opacity","0");
								// 		$(".space_04 object").css("opacity","1");
								//       	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								// 		$(".dot li:nth-child(2)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
								// 	}
								// 	else if(count==2){


								// 		$("object").css("opacity","0");
								//       	$(".space_03 object").css("opacity","1");
								//       	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								//       	$(".dot li:nth-child(3)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
								// 	}
								// 	else if(count==3){


								// 		$("object").css("opacity","0");
								//       	$(".space_02 object").css("opacity","1");
								//       	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								//       	$(".dot li:nth-child(4)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
								// 	}
								// 	else {


								// 		$("object").css("opacity","0");
								//       	$(".space_01 object").css("opacity","1");
								//       	$(".dot li").css({backgroundColor:"rgba(255, 255, 255, .3)"});
								//       	$(".dot li:nth-child(5)").css({backgroundColor:"rgba(255, 255, 255, .8)"});
								// 	}

								// 	if (count==4) {
								// 		count=0;
								// 	}
								// 	else{
								// 		count++;
								// 	}

								// 	alert(count);
								// 	document.getElementById("count").value=count;
								// });

							});
							//小視窗 -- 精選空間幻燈片位移&旋轉 end
				// 小視窗 end
			 }

		 }
		 window.onresize=WinOnResize
		 window.onload=WinOnResize
	 // 精選空間動畫 end
// section_02

// section_03
	// Google 地圖 start
	    var info_window;
	    var map;
	    function initMap() {

	      var TibaMe = new google.maps.LatLng(24.967781, 121.191657);
	          var mapStyle = [
	                {
	                  featureType: 'poi.business',
	                  stylers: [{visibility: 'off'}]
	                },
	                {
	                  featureType: 'transit',
	                  elementType: 'labels.icon',
	                  stylers: [{visibility: 'off'}]
	                }
	              ];


	          var mapOptions = {
	              center: TibaMe,
	              scrollwheel:false,
	              zoom: 16,
	              styles: mapStyle

	              // mapTypeId: google.maps.MapTypeId.ROADMAP
	          };
	          map = new google.maps.Map(document.getElementById("map"), mapOptions);

	          info_window = new google.maps.InfoWindow({
	              content: 'loading',
	              maxWidth: 400 ,
	              maxHeight: 800
	          });

	      // 更改按鈕樣式開始
	          google.maps.event.addListener(info_window, 'domready', function() {

	              var iwOuter = $('.gm-style-iw');
	              var iwCloseBtn = iwOuter.next();

	              iwCloseBtn.css({opacity: '1', right: '-4px', top: '-6px', border: '2px solid #666', 'border-radius': '20px',width:'20px', height:'20px'});

	              if($('.iw-content').height() < 140){
	                $('.iw-bottom-gradient').css({display: 'none'});
	              }
	              iwCloseBtn.mouseout(function(){
	                $(this).css({opacity: '1'});
	              });
	          });
	      // 更改按鈕樣式結束
	      //
	      createLocationOnMap('Location Name 1', new google.maps.LatLng(24.965524, 121.193942),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img01.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>好凶蛋餅</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>桃園市中壢區五興路347號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 2', new google.maps.LatLng(24.970047, 121.193899),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img02.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>小木屋鬆餅</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>桃園市中壢區中大路300號號 志 希 館 前</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 3', new google.maps.LatLng(24.967017, 121.190670),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img03.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>摩斯漢堡中央店</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市內湖區大湖一街36號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');


	      createLocationOnMap('Location Name 4', new google.maps.LatLng(25.046724, 121.514313),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img01.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>新站旅店</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>臺北市中正區忠孝西路一段72號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 5', new google.maps.LatLng(25.049183, 121.517939),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img02.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>台北京站威秀影城</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市大同區市民大道一段209號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 6', new google.maps.LatLng(25.046277, 121.518315),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img03.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>台北天成大飯店</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市內湖區大湖一街36號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');


	      createLocationOnMap('Location Name 7', new google.maps.LatLng(25.018597, 121.534395),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img01.jpg" alt="" >'+
	                    '<div class="nearby_text">'+
	                        '<h3>台北真理堂</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市大安區新生南路三段86號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 8', new google.maps.LatLng(25.021108, 121.545762),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img02.jpg" alt="" >'+
	                    '<div class="nearby_text">'+
	                        '<h3>大安運動中心</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市大安區辛亥路三段55號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 9', new google.maps.LatLng(25.020476, 121.537713),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img03.jpg" alt="" >'+
	                    '<div class="nearby_text">'+
	                        '<h3>臺灣大學醉月湖</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>台北市大安區羅斯福路四段1號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');


	      createLocationOnMap('Location Name 10', new google.maps.LatLng(25.172270, 121.437441),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img01.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>淡水藝術工坊</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市淡水區中正路298號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 11', new google.maps.LatLng(25.168881, 121.443084),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img02.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>新建成餅店</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市淡水區公明街42號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 12', new google.maps.LatLng(25.173435, 121.441239),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img03.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>淡水國小</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市淡水區中山路160號號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');


	      createLocationOnMap('Location Name 13', new google.maps.LatLng(25.023187, 121.465499),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img01.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>彼得好咖啡</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市板橋區自由路37號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 14', new google.maps.LatLng(25.021700, 121.468380),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img02.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>丹堤咖啡</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市板橋區民生路二段237號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      createLocationOnMap('Location Name 15', new google.maps.LatLng(25.023508, 121.467350),
	                  '<div id="nearby_content" style="position:relative; margin-left:18px;">'+

	                    '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img03.jpg" alt="" ></div>'+
	                    '<div class="nearby_text">'+
	                        '<h3>微學館書店</h3>'+
	                        '<span></span>'+
	                        '<p>'+
	                          'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
	                        '</p>'+
	                        '<h5>新北市板橋區民生路三段11號</h5>'+
	                        '<h4>185元/天</h4>'+
	                        '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
	                    '</div>'+
	                  '</div>');
	      // Create the search box and link it to the UI element.
	      var input = document.getElementById('pac-input');
	      var searchBox = new google.maps.places.SearchBox(input);
	      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	      // Bias the SearchBox results towards current map's viewport.
	      map.addListener('bounds_changed', function() {
	        searchBox.setBounds(map.getBounds());
	      });

	      var markers = [];
	      // [START region_getplaces]
	      // Listen for the event fired when the user selects a prediction and retrieve
	      // more details for that place.
	      searchBox.addListener('places_changed', function() {
	        var places = searchBox.getPlaces();

	        if (places.length == 0) {
	          return;
	        }

	        // Clear out the old markers.
	        markers.forEach(function(marker) {
	          marker.setMap(null);
	        });
	        markers = [];

	        // For each place, get the icon, name and location.
	        var bounds = new google.maps.LatLngBounds();
	        places.forEach(function(place) {
	          var icon = {
	            url: place.icon,
	            size: new google.maps.Size(71, 71),
	            origin: new google.maps.Point(0, 0),
	            anchor: new google.maps.Point(17, 34),
	            scaledSize: new google.maps.Size(25, 25)
	          };

	          // Create a marker for each place.
	          markers.push(new google.maps.Marker({
	            map: map,
	            icon: icon,
	            title: place.name,
	            position: place.geometry.location
	          }));

	          if (place.geometry.viewport) {
	            // Only geocodes have viewport.
	            bounds.union(place.geometry.viewport);
	          } else {
	            bounds.extend(place.geometry.location);
	          }
	        });
	        map.fitBounds(bounds);
	      });
	      // [END region_getplaces]
	    }

	    function createLocationOnMap(title, position, content) {
	        var markerIcon = {
	            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
	            fillColor: '#e25a00',
	            fillOpacity: 0.95,
	            scale: 2,
	            strokeColor: '#fff',
	            strokeWeight: 3,
	            anchor: new google.maps.Point(12, 24)
	        };

	        var m = new google.maps.Marker({
	            map: map,
	            icon: markerIcon,
	            animation: google.maps.Animation.DROP,
	            title: title,
	            position: position,
	            html: content
	        });

	        google.maps.event.addListener(m, 'click', function () {
	            info_window.setContent(this.html);
	            info_window.open(map, this);
	              $('img[src="http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif"]').each(function() {
	              $(this).attr('width', 14);
	              $(this).attr('height', 13);
	              $(this).css({width: '14px',height: '13px'});
	              $(this).attr('src','http://www.google.com/intl/en_us/mapfiles/close.gif');
	            });
	        });
	    }
    // Google 地圖 end
// section_03
