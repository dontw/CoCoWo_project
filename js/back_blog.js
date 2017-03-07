
function preview(input)
{
	// 若有選取檔案
    if (input.files && input.files[0]) {

        // 建立一個物件，使用 Web APIs 的檔案讀取器(FileReader 物件) 來讀取使用者選取電腦中的檔案
        var reader = new FileReader();

        // 事先定義好，當讀取成功後會觸發的事情
        reader.onload = function (e) {

            console.log(e);

            // 這裡看到的 e.target.result 物件，是使用者的檔案被 FileReader 轉換成 base64 的字串格式，
            // 在這裡我們選取圖檔，所以轉換出來的，會是如 『data:image/jpeg;base64,.....』這樣的字串樣式。
            // 我們用它當作圖片路徑就對了。
            $('.preview').attr('src', e.target.result);

        }

        // 因為上面定義好讀取成功的事情，所以這裡可以放心讀取檔案
        reader.readAsDataURL(input.files[0]);
	}
}

function loadfileBtn()
{
	$("body").on("change", ".upl", function ()
	{
		console.log(this);
    	preview(this);
    });
}




function getblogInfoContext(blogno)
{
	$.ajax(
	{
		url:"back_blog_context_JSON.php",
		data:
		{
			blogno:blogno
		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

				var context = JSON.parse(msg);
				document.getElementById('memContextDetail').innerHTML = context;
				loadBtn();

		},
		error:function(xhr, ajaxOption, thrownError)
		{
			alert(xhr.status);
			alert(thrownError);
		}
	});
}

function getblogInfo()
{
	$.ajax(
	{
		url:"back_blog_list_JSON.php",
		data:
		{

		},
		type:"GET",
		dataType:'html',

		success:function(msg)
		{

			//EMPTY存在的話

				var member = JSON.parse(msg);
				document.getElementById('blogAll').innerHTML = member;
				loadTab();
				loadBtn();
				loadfileBtn();

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
	var spaceBtn = $('.change'),
	overlayOpacity = 0.7,
	fadeTime = 500;

	spaceBtn.on('click', function(e){
		e.preventDefault();

		var getblogno = $(this).parent().parent().children('.blogNo').text();
		var blogno = parseInt(getblogno);
		// alert(blogno);
		getblogInfoContext(blogno);
		var wdHeight = $(window).height();

		$('#memOverlay,#memWindow').css({display:'block',opacity:'0'});
		$('#memOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#memWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#memOverlay').css({height:adjHeight});
		});

		$('#memOverlay,.memClose').on('click',function(){
			$('#memWindow,#memOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#memOverlay,#memWindow').css({display:'none'});
			});
		});
	});


	$('.add_blog').on('click',function(e)
	{
		e.preventDefault();

		var wdHeight = $(window).height();

		$('#insertOverlay,#insertWindow').css({display:'block',opacity:'0'});
		$('#insertOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#insertWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#insertOverlay').css({height:adjHeight});
		});

		$('#insertOverlay,.insertClose').on('click',function(){
			$('#insertWindow,#insertOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#insertOverlay,#insertWindow').css({display:'none'});
			});
		});


	});
	// $('.notPass').on('click',function(e)
	// {
	// 	e.preventDefault();
	// 	var getspaceno = $(this).parent().parent().children('.spaceNo').text();
	// 	var spaceno = parseInt(getspaceno);
	// 	// alert(spaceno);
	// 	doNotPassSpace(spaceno);
	// });
}

$(function(){
	getblogInfo();
	loadTab();
	loadBtn();
});
