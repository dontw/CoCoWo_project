// 地圖
function map(){
	var myPosition = new google.maps.LatLng(24.9708264,121.18820769999999);

	var myMap = new google.maps.Map(document.getElementById('searchMap'),{
		zoom: 14,
		center: myPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var marker = new google.maps.Marker({
		position : myPosition,
		map : myMap,
		icon: '../../images/number/dgtp.gif',
		title: '這不是資策會!'
	});
}


//預算金額
var moneys = ["100","500","1000","1200","1500","2000","2500","3000","3500","4000"]

$("#slider")
    .slider({ 
        min: 0, 
        max: moneys.length-1
        // range:true
        // values:[5]
    })
    .slider("pips", {
        rest: "label",
        labels : moneys,
        prefix: "$"
        // suffix: ".00¢"
    })
    .on("slidechange",function(e,ui){
    	$("#custom-labels-output").text("您的金額預算為" + " $" +moneys[ui.value]);
    });
    // .slider("float",{
    // 	rest:"label",
    // 	labels : moneys,
    // 	prefix:"$"

    // })


//窩種點擊確認
$('.woname').click(function () {
  $(this).toggleClass('selected');
  if ($('.woname.selected').length == 0)
    // $('.select').
    removeClass('selected');
  else
    // $('.select').
    addClass('selected');
  counter();
});


//設備點擊確認
$('label').click(function () {
  $(this).toggleClass('selected');
  if ($('label.selected').length == 0)
    // $('.select').
	removeClass('selected');
  else
    // $('.select').
	addClass('selected');
  counter();
});

//顯示詳細搜尋
$('#moreinfo').click(function(){
	$('#search').animate({left:"0"},1000);
});

//關閉詳細搜尋
$('#checkOk').click(function(){
	$('#search').animate({left:"1000px"},1000);
});

//圖片效果
$(function(){
     $(".box").hover(
        function(){
            var overlay = $(this).find('.box-overlay');
            overlay.removeClass(overlay.data('return')).addClass(overlay.data('hover'));
        },function(){
             var overlay = $(this).find('.box-overlay');
            overlay.removeClass(overlay.data('hover')).addClass(overlay.data('return'));
    });
});

window.addEventListener('load',map,false);