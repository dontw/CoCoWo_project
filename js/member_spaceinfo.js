var storage = sessionStorage;


function showOrder(fadeTime)
{
	var wdHeight = $(window).height();
	$('.detailbcc, .ordtext').css({display:'block',opacity:'0'});
	$('.detailbcc').css({height:wdHeight}).stop().animate({opacity:'1'},fadeTime);
	$('.ordtext').stop().animate({opacity:'1'},fadeTime);

	closeBtn(fadeTime,wdHeight);
	
};

function closeBtn(fadeTime,wdHeight)
{
	$('.detailbcc, .closeBox, #closeButton').on('click',function(){
		
		$('.detailbcc,.ordtext').stop().animate({opacity:'0'},fadeTime, function()
			{
				$('.detailbcc, .ordtext').css({display:'none'});
			});
	});
};

function upSpace(spano)
{
	$.ajax(
	{
		url:"../member_space_up_JSON.php",
		data:
		{
			spano:spano
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{
			
			alert("上架成功!");
			window.location.reload();
			loadBtn();
			
			
		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}


function deleteSpace(spano)
{
	$.ajax(
	{
		url:"../member_space_delete_JSON.php",
		data:
		{
			spano:spano
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{
			
			alert("刪除成功!");
			window.location.reload();
			loadBtn();
			showOrder(500);
			
			
			
		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getspaceContent(spano)
{
	$.ajax(
	{
		url:"../member_space_context_JSON.php",
		data:
		{
			spano:spano
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{
			
				var member = JSON.parse(msg);
				console.log(member);
				
				document.getElementById("ordtext").innerHTML = member;
				
			
			loadBtn();
			showOrder(500);
			
			
			
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
		url:"../member_spaceinfo_JSON.php",
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
	$('#check').on('click',function(e)
	{
		var stat = 0;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#check').addClass('headLinkNow');
		getDetail(userno,stat);

	});
	$('#unset').on('click',function(e)
	{
		var stat = 1;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#unset').addClass('headLinkNow');
		getDetail(userno,stat);
	});

	$('#set').on('click',function(e)
	{
		var stat = 2;
		$('.orderHead >li > a').removeClass('headLinkNow');
		e.preventDefault();
		$('#set').addClass('headLinkNow');
		getDetail(userno,stat);
	});

	$('.spaceDetail').on('click', function(e)
	{
		var fadeTime =500;
		e.preventDefault();
		var getspano = $(this).parent().parent().children('.getspano').text();
		var spano = parseInt(getspano);
		getspaceContent(spano);

		showOrder(fadeTime)
		// alert(spano);
		
	});

	$('.why').on('click', function(e)
	{
		e.preventDefault();
		var getspano = $(this).parent().parent().children('.getspano').text();
		var spano = parseInt(getspano);
		alert("資料異常!請重新登入空間");

	});

	$('.delete').on('click', function(e)
	{
		e.preventDefault();
		var getspano = $(this).parent().parent().children('.getspano').text();
		var spano = parseInt(getspano);
		// alert(spano);
		deleteSpace(spano);
	});

	$('.upSpace').on('click', function(e)
	{
		e.preventDefault();
		var getspano = $(this).parent().parent().children('.getspano').text();
		var spano = parseInt(getspano);
		// alert(spano);
		upSpace(spano);
	});
}

$(document).ready(function()
{
	var userno = storage.getItem('userno');
	var stat = 2;
	console.log(userno);
	getDetail(userno,stat);

	
});