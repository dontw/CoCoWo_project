var storage = sessionStorage;
function dofirst(memno, memname)
{
	// alert(1234);


		var userno = memno;
		var username = memname;
		storage['userno'] = userno;
		storage['username'] = username;
		window.location.reload();
	// $('#logWindow,#logOverlay').stop().animate({opacity:'0'},fadeTime,function(){
	// 		$('#logOverlay,#logWindow').remove();
	// 		alert(1234);
	// 	});

}

//memAjax
function checkmem()
{

	var checkusername = $('#usermail').val();
	var checkuserpsw = $('#userpsw').val();

	$.ajax(
	{
		url:"../member_JSON.php",
		data:
		{
			username:checkusername,
			userpsw:checkuserpsw
		},
		type:"POST",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話
			if(msg.indexOf('empty')!= -1)
			{
				//註銷滾動事件
				alert("帳密錯誤!!")
			}else
			{


				var memcut = msg.split("|");
				alert('登入成功!!!');

				dofirst(memcut[1], memcut[2]);
			}
			// console.log(msg);


		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

//memInsertAjax
function insertmem()
{

	var signusermail = $('input[name=signusermail]').val();
	var signuserpsw = $('input[name=signuserpsw]').val();
	var signusername = $('input[name=username]').val();
	var signuserpho = $('input[name=userpho]').val();
	var signusersex = $('input[name=usersex]:checked').val();
	var signuseroccu = $('input[name=useroccu]').val();
	if(signusersex==0)
	{
		signusersex='男';
	}else
	{
		signusersex='女';
	}
	// alert(signusermail+'<br>'+signuserpsw);
	$.ajax(
	{
		url:"../memberInsert_JSON.php",
		data:
		{
			usermail:signusermail,
			userpsw:signuserpsw,
			username:signusername,
			userpho:signuserpho,
			usersex:signusersex,
			useroccu:signuseroccu
		},
		type:"POST",
		dataType:'html',

		success:function(msg)
		{


				// var member = JSON.parse(msg);


				alert("已申請完成!請重新登入");
				window.location.reload();



		},
		error:function(xhr, ajaxOption, thrownError)
		{
			console.log(xhr.status);
			console.log(thrownError);
		}
	});
}


//memInsertAjax
function testmem()
{
	alert(123);
	$.ajax(
	{
		url:"../memberInsert_JSON.php",
		type:"POST",
		dataType:'text',

		success:function(msg)
		{


				var member = JSON.parse(msg);


				alert(member);



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
		var nowUser = storage.getItem('userno');
		if(nowUser!=null)
		{
			$('.nav_user_btn').html('<a href="mem_page.html" class="main_nav_a main_nav_userpage_a"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="nav_p">會員中心</span>')

		}

		$('#userBtn').on('click', function(e)
			{
				e.preventDefault();
				checkmem();
			});

		$('#yesBtn').click(function(e)
		{
			e.preventDefault();
			insertmem();
		});

		$('#testBtn').click(function(e)
		{
			e.preventDefault();
			testmem();
		});

	});
// window.addEventListener('load', dofirst, false);
