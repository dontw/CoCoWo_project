$(document).ready(function(){
  $('.space_content_slider').slick({
    slide: '.slider_content',
    centerMode:true,
    centerPadding: '10%',
    slidesToShow: 1,
    infinite: true

  });
});

// 當window load完所需的結構檔案後執行init google map
// google.maps.event.addDomListener(window, 'load', init);
//
//   // 以下為範例的init function
//   function init() {
//
//       var mapOptions = {
//         // 預設地圖的放大級數
//         zoom: 11,
//
//         // 地圖中心的經緯度
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York
//
//         // style地圖的地方
//         // Snazzy Maps 的範例config code貼在這
//         styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
//       };
//
//     // 拿地圖的html div
//     var mapElement = document.getElementById('map');
//
//     // 將上面對地圖的設定套用在選定的div地圖上
//     var map = new google.maps.Map(mapElement, mapOptions);
//
//     // marker小圖標得設定寫在這!
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(40.6700, -73.9400),
//       map: map,
//       title: 'Prototype Hacker Demo'
//     });
//   }
