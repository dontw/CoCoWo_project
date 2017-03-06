function closeSignBox(fadeTime)
{
	$('#signupuserlightboxbccc, #signupcloseBox').on('click',function(){

		$('#signupuserlightboxbccc,#signupuserLightBox').stop().animate({opacity:'0'},fadeTime, function()
			{
				$('#signupuserlightboxbccc, #signupuserLightBox').css({display:'none'});
			});
	});
}

function showSignBox(fadeTime)
{
	$('#signupuserlightboxbccc, #signupuserLightBox').css({display:'block',opacity:'0'});
		$('#signupuserlightboxbccc').css({height:wdHeight}).stop().animate({opacity:'1'},fadeTime);
		$('#signupuserLightBox').stop().animate({opacity:'1'},fadeTime);

		closeSignBox(fadeTime);


}

function closeBtn(fadeTime)
{
	wdHeight = $(window).height();
	$('#loginuserlightboxbccc, #logincloseBox').on('click',function(){

		$('#loginuserlightboxbccc,#loginuserLightBox').stop().animate({opacity:'0'},fadeTime, function()
			{
				$('#loginuserlightboxbccc, #loginuserLightBox').css({display:'none'});
			});
	});
	$('#signBtn').on('click',function(){

		$('#loginuserlightboxbccc,#loginuserLightBox').stop().animate({opacity:'0'},fadeTime, function()
			{
				$('#loginuserlightboxbccc,#loginuserLightBox').css({display:'none'});


			});

		showSignBox(fadeTime);

	});





}

$(document).ready(function(){



	var memBtn = $('.main_nav_user_a'),
	memcheck = $('.main_nav_user_a > span'),
	overlayOpacity = 0.7,
	fadeTime = 500;
	console.log(memcheck.text());

		memBtn.on('click', function(e)
		{
			e.preventDefault();

			// var setLoginBox = $(this),
			// setLoginHref = setLoginBox.attr('href'),
			wdHeight = $(window).height();
			// $('body').append('<div id="logOverlay"></div><div id="logWindow"><div class="logClose">×</div><iframe id="logcontWrap"></iframe></div>');
			// $('#logcontWrap').attr('src',setLoginHref);
			// $('#logOverlay,#logWindow').css({display:'block',opacity:'0'});
			// $('#logOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
			// $('#logWindow').stop().animate({opacity:'1'},fadeTime);

			$('#loginuserlightboxbccc, #loginuserLightBox').css({display:'block',opacity:'0'});
			$('#loginuserlightboxbccc').css({height:wdHeight}).stop().animate({opacity:'1'},fadeTime);
			$('#loginuserLightBox').stop().animate({opacity:'1'},fadeTime);
			closeBtn(fadeTime);
		});









});
