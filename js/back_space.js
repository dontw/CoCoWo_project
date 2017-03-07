function doNotPassSpace(spaceno)
{
	$.ajax(
	{
		url:"back_space_info_notPass_JSON.php",
		data:
		{
			spano:spaceno
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

			alert("設定成功!");
			window.location.reload();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}


function doPassSpace(spaceno)
{
	$.ajax(
	{
		url:"back_space_info_pass_JSON.php",
		data:
		{
			spano:spaceno
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

			alert("設定成功!");
			window.location.reload();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getspaceInfoContext(spaceno)
{
	$.ajax(
	{
		url:"back_space_info_detail_JSON.php",
		data:
		{
			spano:spaceno
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

				var context = JSON.parse(msg);
				document.getElementById('backContextDetail').innerHTML = context;
				loadBtn();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getspaceInfo()
{
	$.ajax(
	{
		url:"back_space_info_JSON.php",
		data:
		{

		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

				var member = JSON.parse(msg);
				document.getElementById('backspaceInfo').innerHTML = member;
				loadTab();
				loadBtn();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}


function loadTab()
{
	// 預設顯示第一個 Tab
				var _showTab = 0;
				$('.abgne_tab').each(function(){
					// 目前的頁籤區塊
					var $tab = $(this);

					var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
					$($defaultLi.find('a').attr('href')).siblings().hide();

					// 當 li 頁籤被點擊時...
					// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
					$('ul.tabs li', $tab).click(function() {
						// 找出 li 中的超連結 href(#id)
						var $this = $(this),
							_clickTab = $this.find('a').attr('href');
						// 把目前點擊到的 li 頁籤加上 .active
						// 並把兄弟元素中有 .active 的都移除 class
						$this.addClass('active').siblings('.active').removeClass('active');
						// 淡入相對應的內容並隱藏兄弟元素
						$(_clickTab).stop(false, true).slideDown(500).siblings().hide();

						return false;
					}).find('a').focus(function(){
						this.blur();
					});
				});
}

function loadBtn()
{
	var spaceBtn = $('.detail'),
	overlayOpacity = 0.7,
	fadeTime = 500;

	spaceBtn.on('click', function(e){
		e.preventDefault();

		var getspaceno = $(this).parent().parent().children('.spaceNo').text();
		var spaceno = parseInt(getspaceno);
		// alert(spaceno);
		getspaceInfoContext(spaceno);
		var wdHeight = $(window).height();

		$('#backOverlay,#backWindow').css({display:'block',opacity:'0'});
		$('#backOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#backWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#backOverlay').css({height:adjHeight});
		});

		$('#backOverlay,.backClose').on('click',function(){
			$('#backWindow,#backOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#backOverlay,#backWindow').css({display:'none'});
			});
		});
	});


	$('.pass').on('click',function(e)
	{
		e.preventDefault();
		var getspaceno = $(this).parent().parent().children('.spaceNo').text();
		var spaceno = parseInt(getspaceno);
		// alert(spaceno);
		doPassSpace(spaceno);
	});
	$('.notPass').on('click',function(e)
	{
		e.preventDefault();
		var getspaceno = $(this).parent().parent().children('.spaceNo').text();
		var spaceno = parseInt(getspaceno);
		// alert(spaceno);
		doNotPassSpace(spaceno);
	});
}

$(function(){
	getspaceInfo();
	loadTab();
	loadBtn();
});
