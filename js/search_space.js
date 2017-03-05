//loading
$(window).load(function(){
  $("#preloader").hide();
  $("#searchspace").show();
});

// 地圖
function map(){
	var myPosition = {lat: 25.008748, lng: 121.302337};

	var myMap = new google.maps.Map(document.getElementById('searchMap'),{
		zoom: 16,
		center: myPosition,
		// mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#3b5998"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#3b5998"
            },
            {
                "saturation": -22
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f7f7f7"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 76
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f7f7f7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#8b9dc3"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#3b5998"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#8b9dc3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#8b9dc3"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": false
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 0.43
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#8b9dc3"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#3b5998"
            }
        ]
    }
]
	});

	var marker = new google.maps.Marker({
		position : myPosition,
		map : myMap,
		title: '這不是資策會!'
	});

    var info = new SnazzyInfoWindow({
        marker: marker,
        content: '<h4>KoHub工作空間</h4>' +
                 '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at quaerat enim sunt iste ea, velit accusantium illum veritatis repellendus omnis fugit dignissimos recusandae culpa nihil corporis similique. Maiores, voluptatibus.</p>' +
                 '<hr>' +
                 '<em>歡迎來使用<em>',
        closeOnMapClick : false
    });

    info.open();
}

//日期設定
// $('#rangedate').DatePicker({
//         type : 'rangedate',
//         startDate : moment().subtract(1,'week'),
//         endDate : moment(),
//         ranges : [{
//                 label: "昨天",
//                 startDate: moment().subtract(1, 'day'),
//                 endDate: moment().subtract(1, 'day')
//             }, {
//                 label: '星期天',
//                 startDate: moment().startOf('week'),
//                 endDate: moment()
//             }, {
//                 label: '2个星期',
//                 startDate: moment().startOf('week').subtract(1, 'week'),
//                 endDate: moment()
//             }, {
//                 label: '这个月',
//                 startDate: moment().startOf('month'),
//                 endDate: moment()
//             }, {
//                 label: '下个月',
//                 startDate: moment().startOf('month').subtract(1, 'month'),
//                 endDate: moment().startOf('month')
//             }, {
//                 label: '今年',
//                 startDate: moment().startOf('year'),
//                 endDate: moment().startOf('moth')
//             }]

// });


//預算金額
var moneys = ["100","500","1000","1200","1500","2000","2500","3000","3500","4000"];

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
    	$("#custom-labels-output span").text(moneys[ui.value]);
    });
    // .slider("float",{
    // 	rest:"label",
    // 	labels : moneys,
    // 	prefix:"$"

    // })


//窩種點擊確認
$('.woname').click(function () {
  // $(this).toggleClass('selected');
  // if($('.woname.selected').length == 0){
  //   $(this).removeClass('selected');
  // }else{
  //   addClass('selected');
  // }
  // counter();
  $('.woname').removeClass('selected');
  $(this).addClass('selected');
});


//設備點擊確認
$('label').click(function () {
  $(this).toggleClass('selected');
  if ($('label.selected').length == 0)
	$(this).removeClass('selected');
  else
	$(this).addClass('selected');
});

//顯示詳細搜尋
$('#moreinfo').click(function(){
	$('#search').animate({left:"0"},1000);
    $('#searchspace #info').addClass('infoadd');
});

  // $('#moreinfo').click(function(){
  //       $('#search').toggle(function(){
  //           $(this).animate({left:0},500);
  //       },function(){
  //           $(this).animate({left:"1000px"},500);
  //       });
  // });


$('#close').click(function(){
    //window.alert("確定放棄尋找?");
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


//人數+&-動畫設定
var burst = new mojs.Burst({
    radius: {0:100}, //釋放的範圍
    count:6, //六顆
    degree:100, //角度
    children:{
        fill : { 'cyan' :  'steelblue'}, //顏色
        duration : 1000 //速度
    }
});
var burst3 = new mojs.Burst({
    radius:   { 0: 100 },
    count:    7,
    angle:    { 0: 90 },
    opacity:  { 1: 0 },
});
$('#plus').click(function(e){
    var coords = {
        x: e.pageX-800,
        y: e.pageY-400

    }
    burst
    .tune(coords)
    .replay();

    burst3
    .tune(coords)
    .replay();

    // var peopluse = document.getElementById('peocount').innerText();
    var peopluse = $('#peocount').text();
    peopluse++;
    $('#peocount').text(peopluse);

});
var burst2 = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    radius:     20,
    angle:      { 360: 0 },
    duration:   2000
  }
});
$('#minus').click(function(e){
    var coords = {
        x: e.pageX-820,
        y: e.pageY-400
    }

    burst2
    .tune(coords)
    .replay();

    var peominus = $('#peocount').text();
    if(peominus>0){
        peominus--;
    }else{
        alert('你來亂的嗎?');
    }
    $('#peocount').text(peominus);
});

//重置
$("#resetfrom").click(function(){
    // $("#spaceform")[0].reset();
    $('.woname').removeClass('selected');
    $('label').removeClass('selected');
});


//Ajax
$(function(){


    // $.ajax({
    //     type: 'get',                    // post/get
    //     url: 'getMore_JSON.php',        // url位置
    //     dataType:'json',
    //     error: function (xhr) {
    //         // return false;
    //         alert(xhr.status);  //載入時有出現幾百的數字代表錯誤
    //     },      // 錯誤後執行的函數
    //     success: function (response) {
    //         // return true;

    //         // alert(response); //測試有無成功
    //      }// 成功後要執行的函數
    // });

    //取得窩種類型
    $.getJSON('wotype_JSON.php',function(data){
        for(var i=0;i<data.length;i++){
            $('.woname:eq('+ i +') p').text(data[i].wot_name);
        }

    });

    //取得設備類型
    $.getJSON('device_JSON.php',function(data){
        for(var i=0;i<data.length;i++){
            $('.devdata:eq('+ i +') p').text(data[i].dev_name);
            $('.devdata:eq('+ i +') p').text(data[i].dev_name);
            $('.devdata:eq('+ i +') p').text(data[i].dev_name);
            $('.devdata:eq('+ i +') p').text(data[i].dev_name);
            $('.devdata:eq('+ i +') p').text(data[i].dev_name);
        }
    });

    //計算卡牌數量變數
    var count=0;

    //預設卡牌
    $.getJSON('defaultSpace_JSON.php',function(e){

        var star1 = "";
        var star0 = "";
        for(var i=0;i<e.length;i++){

            //實星
            star1 = ""; //重置
            for(var y=0;y<e[i].spa_allscore;y++){
                star1 = star1 + '<img src="img/star1.png">';
            }
            //空星
            star0 = ""; //重置
            for(var z=0;z<5-e[i].spa_allscore;z++){
                star0 = star0 + '<img src="img/star0.png">';
            }

            $('.spares').append(
                '  <div class="col-xs-12 col-lg-4">'
                + '<a id="spacea" href="space_content.php?spa_no='+ e[i].spa_no + '">'
                + ' <div class="spaceitem">'
                + '   <img class="img-responsive spaceimg" src="' + e[i].pho_name + '"' + ' alt="cowork">'
                + '   <div class="spacecontent">'
                + '     <h5 class="card-title">' + e[i].spa_name + '</h5>'
                + '     <ul class="star">' + '<li>' + star1 + star0 + '</li>' + '<li>(' + e[i].spa_cpnum + ')</li></ul>'
                + '     <p class="card-text">' + e[i].spa_addr + '</p>'
                + '     <p class="card-text">' + e[i].spa_price + '元/天</p>'
                + '   </div>'//card-block
                + '   <div class="clear"></div>'
                + ' </div>'//spaceitem
                + '</a>'
                + '</div>'); //col

            count++;

        }
        $('#count span').text(count);
    });



    //基本條件篩選
    $('#speedsearch').click(function(){
        var count = 0;

        $.ajax({
            type:'get',
            url:'speedsearch_JSON.php',
            data : {
                work : $('#work').val(),
                people : $('#people').val(),
                address : $('#address').val()
            },
            dataType:'json',
            error:function(xhr){
                alert(xhr.status);
            },
            success:function(e){
                var star1 = "";
                var star0 = "";

                // $('.spares').html("<div></div>");

                //清空預設卡牌內容
                $('.spares').empty();

                for(var i=0;i<e.length;i++){

                    star1 = "";
                    for(var y=0;y<e[i].spa_allscore;y++){
                        star1 = star1 + '<img src="img/star1.png">';
                    }

                    star0 = "";
                    for(var z=0;z<5-e[i].spa_allscore;z++){
                        star0 = star0 + '<img src="img/star0.png">';
                    }

                    // $('.spares').html(
                    var show = '  <div class="col-xs-12 col-lg-4">'
                    + '<a id="spacea" href="space_content.php?spa_no='+ e[i].spa_no + '">'
                    + ' <div class="spaceitem">'
                    + '   <img class="img-responsive spaceimg" src="' + e[i].pho_name + '"' + ' alt="cowork">'
                    + '   <div class="spacecontent">'
                    + '     <h5 class="card-title">' + e[i].spa_name + '</h5>'
                    + '     <ul class="star">' + '<li>' + star1 + star0 + '</li>' + '<li>(' + e[i].spa_cpnum + ')</li></ul>'
                    + '     <p class="card-text">' + e[i].spa_addr + '</p>'
                    + '     <p class="card-text">' + e[i].spa_price + '元/天</p>'
                    + '   </div>'//card-block
                    + '   <div class="clear"></div>'
                    + ' </div>'//spaceitem
                    + '</a>'
                    + '</div>'; //col


                    $('.spares').append(show);
                    //$('.spares').removeClass("spaceitem").append(show);

                    count++;
                }
                $('#count span').text(count);
                // console.log(e);
            }
        });
    });


    //詳細條件篩選
    $('#checkOk').click(function(){

        var count = 0;

        //CHECKBOX將所有的被checked的值存進陣列
        var devarr = new Array();
        $('input:checkbox:checked[name="device[]"]').each(function(i){
            devarr[i] = this.value;
        });

        //console.log(devarr);

        $.ajax({
            type:'get',
            url:'slowsearch_JSON.php',
            data:{
                wotype : $('input[name="wo"]:checked').val(),
                peocount : $('#peocount').val(),
                custom : $('#custom-labels-output span').val(),
                device : devarr
            },
            dataType:'json',
            error:function(xhr){
                console.log(xhr.responseText);
            },
            success:function(e){
                var star1 = "";
                var star0 = "";
                $('.spares').empty();

                for(var i=0;i<e.length;i++){

                    star1 = "";
                    for(var y=0;y<e[i].spa_allscore;y++){
                        star1 = star1 + '<img src="img/star1.png">';
                    }

                    star0 = "";
                    for(var z=0;z<5-e[i].spa_allscore;z++){
                        star0 = star0 + '<img src="img/star0.png">';
                    }

                    // $('.spares').html(
                    var show = '  <div class="col-xs-12 col-lg-4">'
                    + '<a id="spacea" href="space_content.php?spaNo='+ e[i].spa_no + '">'
                    + ' <div class="spaceitem">'
                    + '   <img class="img-responsive spaceimg" src="' + e[i].pho_name + '"' + ' alt="cowork">'
                    + '   <div class="spacecontent">'
                    + '     <h5 class="card-title">' + e[i].spa_name + '</h5>'
                    + '     <ul class="star">' + '<li>' + star1 + star0 + '</li>' + '<li>(' + e[i].spa_cpnum + ')</li></ul>'
                    + '     <p class="card-text">' + e[i].spa_addr + '</p>'
                    + '     <p class="card-text">' + e[i].spa_price + '元/天</p>'
                    + '   </div>'//card-block
                    + '   <div class="clear"></div>'
                    + ' </div>'//spaceitem
                    + '</a>'
                    + '</div>'; //col

                    count++;

                }

                $('#count span').text(count);
                console.log(e);

                //關閉詳細搜尋
                $('#search').animate({left:"1000px"},1000);

                $('#searchspace #info').stop().addClass('infolev');
                $('.spares').append(show);
            }
        });


    });


});


window.addEventListener('load',map,false);
