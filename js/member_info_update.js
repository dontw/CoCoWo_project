var storage = sessionStorage;

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

function getDetail(userno)
{
	$.ajax(
	{
		url:"../member_info_update_JSON.php",
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
			
			document.getElementById("memInfo").innerHTML += member;
			
			loadfileBtn();
			
			
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