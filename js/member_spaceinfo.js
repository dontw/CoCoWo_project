var storage = sessionStorage;


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
}

$(document).ready(function()
{
	var userno = storage.getItem('userno');
	var stat = 2;
	console.log(userno);
	getDetail(userno,stat);

	
});