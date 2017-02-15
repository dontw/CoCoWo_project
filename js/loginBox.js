$(document).ready(function(){



	$('.nav_user_btn').click(function(){



		$('.userlightboxbccc').animate({
			opacity:1
		},1000);


    $(".userlightboxbccc").css("display", "block");



});

	$('#closeBox').click(function(){

		$('.userlightboxbccc').animate({
			'opacity':'0'
		},1000, function(){
			$(".userlightboxbccc").css("display", "none");


		});

	});






});
