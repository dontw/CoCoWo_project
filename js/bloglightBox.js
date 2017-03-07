var storage = sessionStorage;

function scrollRight()
{
	$('#mdWindow').on('load scroll resize', function(){
		var scrollTop = $('#mdWindow').scrollTop();
		$('#wrapper > p > span').text(scrollTop);

		var posBottom = $('#mdWindow').height() - $('#mdWindow').height();
		console.log($(document).height());
		// console.log('#mdWindow'.innerHeight);
		console.log($('#mdWindow').height());
		console.log($('.blogContextRight').height());
		if(scrollTop>=84)
		{
			$('.blogContextRightAll').css({top:(scrollTop-84)+'px'});
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

function getContext()
{
	var blogno = storage.getItem('blogno');
	$.ajax(
	{
		url:"blog_context_JSON.php",
		data:
		{
			blogno:blogno
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

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}



$(document).ready(function(){

	getContext();
	scrollRight();

});
