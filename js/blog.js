

$(window).on('load', function() {$("#preloader").hide();
$(".blog_main").show();});

var storage = sessionStorage;

function insertMsg(blogno,user,gettext){
	$.ajax(
	{
		url:"../blog_insertMsg_JSON.php",
		data:
		{
			blogno:blogno,
			userno:user,
			text:gettext
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話



				console.log(msg);



		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function scrollRight()
{
	$('#contWrap').on('load scroll resize', function(){
		var scrollTop = $('#contWrap').scrollTop();
		$('#wrapper > p > span').text(scrollTop);

		var posBottom = $(document).height() - $('#contWrap').height();
		console.log($(document).height());
		// console.log('#contWrap'.innerHeight);
		console.log($('#contWrap').height());
		console.log($('.blogContextRight').height());
		if(scrollTop>=84)
		{
			$('.blogContextRightAll').css({top:(scrollTop-86)+'px'});
		}else
		{
			$('.blogContextRightAll').css({top:0});

		}

		if(scrollTop >= posBottom) {
			$('p').addClass('scrollBottom');
		} else {
			$('p').removeClass('scrollBottom');
		}
	});
}

//字數限制
function overp()
	{
		var len = 180;//設定要超過多少字數

		$(".overp").each(function(){

		// alert($(this).text().length);
		if($(this).text().length>len)
		{
			var text=$(this).text().substring(0,len-1)+"...";
			$(this).text(text);
		}
	});
	}

function getContext(parent,user)
{
	var blogno = parent;
	$.ajax(
	{
		url:"../blog_context_JSON.php",
		data:
		{
			blogno:blogno,
			userno:user
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

				var member = JSON.parse(msg);

				console.log(member);

				document.getElementById('blogContextDetail').innerHTML = member;
				scrollRight();
				loadButton();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}


//blogAjax
function getBlog(blognum, blogshow)
{

	var count = blognum;
	// var blogshow = blogshow;
	var countprev = count-blogshow;
	// alert(count+'hello:'+countprev);
	$.ajax(
	{
		url:"../blogItem_JSON.php",
		data:
		{
			blognum:count,
			blogprev:countprev
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{
			//註銷滾動事件
			//EMPTY存在的話
			if(msg.indexOf('empty')!= -1)
			{

				$(window).unbind('scroll');

			}

			var blog = JSON.parse(msg);
			// alert(blog);

			document.getElementById("blogItemAll").innerHTML += blog;


			overp();
			loadButton();


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getSlider()
{
	var pop = 40;

	$.ajax(
	{
		url:"../blogItem_slider_JSON.php",
		data:
		{
			pop:pop
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{


			var blog = JSON.parse(msg);
			// alert(blog);

			document.getElementById("plusSlider").innerHTML += blog;
			document.getElementById("plusSlider").innerHTML += "<script type='text/javascript' src='engine0/wowslider.js' defer></script> <script type='text/javascript' src='engine0/script.js' defer></script>";
			overp();
			loadButton();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}


// function showBlog(jsonStr){
// 		var table,tr,td,i,j, text,textNode;

// 		var member = JSON.parse(jsonStr);


// 		document.getElementById("blogItemAll").innerHTML += member;
// 		overp();
// 		loadButton();

// 	}
// function getBlog(blognum){
// 		var count = blognum;
// 		var xhr = new XMLHttpRequest();
// 		xhr.onreadystatechange=function (){
// 			if( xhr.readyState == 4){
// 				if( xhr.status == 200 ){

// 					showBlog( xhr.responseText);
// 				}else{
// 					alert( xhr.status );
// 				}
// 			}
// 		}

// 		var url = "../blogItem_JSON.php?blognum="+count;
// 		xhr.open("Get", url, true);
// 		xhr.send( null );
// 	}



//一些按鈕
function loadButton()
{
	var mdwBtn = $('.getContext'),
	overlayOpacity = 0.7,
	fadeTime = 500;
	mdwBtn.on('click',function(e)
	{
		e.preventDefault();
		var test = $(this).parent().parent().parent();
		var getno = test.children('.Nowblogno').text();
		var parent = parseInt(getno);

		// console.log(parent);
		// alert(parent);
		if(storage['userno']!=null)
		{
			var user = storage['userno'];
		}else
		{
			var user = 0;
		}
		// alert(user);
		storage['blogno'] = parent;
		getContext(parent,user);
		var wdHeight = $(window).height();
		// $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">×</div><iframe id="contWrap"></iframe></div>');
		// $('#contWrap').attr('src',setHref);
		$('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});
		$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#mdWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#mdOverlay').css({height:adjHeight});
		});

		$('#mdOverlay,.mdClose').on('click',function(){
			$('#contWrap').scrollTop(0);
			$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#mdOverlay,#mdWindow').css({display:'none'});

			});
		});
	});

	$('#reButton').on('click', function(e)
	{
		var gettext = $('.re').val();
		// alert(gettext);
		e.preventDefault();
		if(storage['userno']!=null)
		{
			var user = storage['userno'];
			var blogno = storage['blogno'];
			insertMsg(blogno,user,gettext);
			getContext(blogno,user);
		}else
		{
			alert('請登入會員!!');
		}

	})









}

$(document).ready(function(){

	var blogshow = 2;
	var blognum=blogshow;

	// button();

	overp();
	// getSlider();
	getBlog(blognum,blogshow);
	$(window).on('resize scroll load', function()
	{
		var scrollTop = $(window).scrollTop();
		var posBottom = $(document).height() - $(window).height();
		var posstart = $(document).height() / $(window).height();
		var startListen = scrollTop/$(document).height();
		var start = (scrollTop/posBottom)*100;
		$('#testp > p >span').text(scrollTop+'startListen'+startListen+'start'+start);
		if(start>50)
		{
			blognum+=2;
			getBlog(blognum, blogshow);
		}
	});

	var sliderBtn = $('.ws_cover > a'),
	overlayOpacity = 0.7,
	fadeTime = 500;

	sliderBtn.on('click', function(e){
		e.preventDefault();
		var test = $(this).attr('href');
		var cut = test.split('/');

		var sliderBlognNoNow = cut[3];
		if(storage['userno']!=null)
		{
			var user = storage['userno'];
		}else
		{
			var user = 0;
		}

		getContext(sliderBlognNoNow,user);

		var wdHeight = $(window).height();

		$('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});
		$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#mdWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#mdOverlay').css({height:adjHeight});
		});

		$('#mdOverlay,.mdClose').on('click',function(){
			$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#mdOverlay,#mdWindow').css({display:'none'});
			});
		});
	});








});
