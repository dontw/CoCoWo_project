var storage = sessionStorage;

function getOrderContext(nowOrdNo)
{
	$.ajax(
	{
		url:"member_space_order_context_JSON.php",
		data:
		{
			ordno:nowOrdNo
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{


			var member = JSON.parse(msg);
			console.log(member);

			document.getElementById("ordtext").innerHTML = member;
			loadBtn();
			var fadeTime=500;
			var wdHeight = $(window).height();
			closeBtn(fadeTime,wdHeight);


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function showOrder(fadeTime)
{
	var wdHeight = $(window).height();
	$('.detailbcc, .ordtext').css({display:'block',opacity:'0'});
	$('.detailbcc').css({height:wdHeight}).stop().animate({opacity:'1'},fadeTime);
	$('.ordtext').stop().animate({opacity:'1'},fadeTime);

}

function closeBtn(fadeTime,wdHeight)
{
	$('.detailbcc, .closeBox, #closeButton').on('click',function(){

		$('.detailbcc,.ordtext').stop().animate({opacity:'0'},fadeTime, function()
			{
				$('.detailbcc, .ordtext').css({display:'none'});
			});
	});
}

function docancel(nowOrdNo)
{

	$.ajax(
	{
		url:"member_space_order_cancel_JSON.php",
		data:
		{
			ordno:nowOrdNo
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			// var member = JSON.parse(msg);
			console.log('取消成功');

			window.location.reload();


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function doconfirm(nowOrdNo)
{

	$.ajax(
	{
		url:"member_space_order_confirm_JSON.php",
		data:
		{
			ordno:nowOrdNo
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			// var member = JSON.parse(msg);
			// console.log('取消成功');

			window.location.reload();


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getDetail(userno,stat)
{

	$.ajax(
	{
		url:"member_space_order_JSON.php",
		data:
		{
			userno:userno,
			stat:stat
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

				var member = JSON.parse(msg);
				console.log(member);

				document.getElementById("memSpace").innerHTML = member;


			loadBtn();



		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function loadBtn()
{
	var userno = storage.getItem('userno');
	$('#cancel').on('click',function(e)
	{
		var stat = 2;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#cancel').addClass('headLinkNow');
		getDetail(userno,stat);

	});
	$('#yes').on('click',function(e)
	{
		var stat = 0;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#yes').addClass('headLinkNow');
		getDetail(userno,stat);
	});

	$('#history').on('click',function(e)
	{
		var stat = 1;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#history').addClass('headLinkNow');
		getDetail(userno,stat);
	});

	$('.Detail').on('click',function(e)
	{
		var fadeTime=500;
		var test = $(this).parent().parent().children('.thFirst').text();
		var nowOrdNo = parseInt(test);
		// alert(nowOrdNo);
		getOrderContext(nowOrdNo);
		showOrder(fadeTime);
		e.preventDefault();

	});

	$('.cancel').on('click',function(e)
	{
		var test = $(this).parent().parent().children('.thFirst').text();
		var nowOrdNo = parseInt(test);
		// alert(nowOrdNo);
		e.preventDefault();
		docancel(nowOrdNo);
	});

	$('.confirm').on('click',function(e)
	{
		var test = $(this).parent().parent().children('.thFirst').text();
		var nowOrdNo = parseInt(test);
		// alert(nowOrdNo);
		e.preventDefault();
		doconfirm(nowOrdNo);
	});
}

$(document).ready(function()
{
	var userno = storage.getItem('userno');
	var stat = 0;
	console.log(userno);
	getDetail(userno,stat);


});
