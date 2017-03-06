var storage = sessionStorage;

function logout()
{
	$('#logout').click(function(e)
	{
		e.preventDefault();
		storage.removeItem('username');
		storage.removeItem('userno');
		window.location = '../index.php';
	});
}

function getDetail(userno)
{
	$.ajax(
	{
		url:"../member_page_JSON.php",
		data:
		{
			userno:userno
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{


			var member = JSON.parse(msg);
			console.log(member);

			document.getElementById("mempage").innerHTML += member;

			logout();


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

$(document).ready(function()
{
	var userno = storage.getItem('userno');
	console.log(userno);
	getDetail(userno);
});
