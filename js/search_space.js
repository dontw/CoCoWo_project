//loading
$(window).load(function(){
  $("#preloader").hide();
  $("#searchspace").show();
});
// Google 地圖 start
        var info_window;
        var map;
        function initMap() {

          var TibaMe = new google.maps.LatLng(24.967781, 121.191657);
              var mapStyle = [
                    {
                      featureType: 'poi.business',
                      stylers: [{visibility: 'off'}]
                    },
                    {
                      featureType: 'transit',
                      elementType: 'labels.icon',
                      stylers: [{visibility: 'off'}]
                    }
                  ];

           
              var mapOptions = {
                  center: TibaMe,
                  scrollwheel:false,
                  zoom: 16,
                  styles: mapStyle
                    
                  // mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              map = new google.maps.Map(document.getElementById("searchMap"), mapOptions);

              info_window = new google.maps.InfoWindow({
                  content: 'loading',
                  maxWidth: 400 ,
                  maxHeight: 800
              });

          // 更改按鈕樣式開始
              google.maps.event.addListener(info_window, 'domready', function() {

                  var iwOuter = $('.gm-style-iw');
                  var iwCloseBtn = iwOuter.next();

                  iwCloseBtn.css({opacity: '1', right: '-4px', top: '-6px', border: '2px solid #666', 'border-radius': '20px',width:'20px', height:'20px'});

                  if($('.iw-content').height() < 140){
                    $('.iw-bottom-gradient').css({display: 'none'});
                  }
                  iwCloseBtn.mouseout(function(){
                    $(this).css({opacity: '1'});
                  });
              });
          // 更改按鈕樣式結束
          // 
          createLocationOnMap('Location Name 1', new google.maps.LatLng(24.965524, 121.193942), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img01.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>好凶蛋餅</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>桃園市中壢區五興路347號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 2', new google.maps.LatLng(24.970047, 121.193899), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img02.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>小木屋鬆餅</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>桃園市中壢區中大路300號號 志 希 館 前</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 3', new google.maps.LatLng(24.967017, 121.190670), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_focus_space_img03.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>摩斯漢堡中央店</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市內湖區大湖一街36號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');


          createLocationOnMap('Location Name 4', new google.maps.LatLng(25.046724, 121.514313), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img01.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>新站旅店</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>臺北市中正區忠孝西路一段72號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 5', new google.maps.LatLng(25.049183, 121.517939), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img02.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>台北京站威秀影城</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市大同區市民大道一段209號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 6', new google.maps.LatLng(25.046277, 121.518315), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_maker_space_img03.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>台北天成大飯店</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市內湖區大湖一街36號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');


          createLocationOnMap('Location Name 7', new google.maps.LatLng(25.018597, 121.534395), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img01.jpg" alt="" >'+
                        '<div class="nearby_text">'+
                            '<h3>台北真理堂</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市大安區新生南路三段86號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 8', new google.maps.LatLng(25.021108, 121.545762), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img02.jpg" alt="" >'+
                        '<div class="nearby_text">'+
                            '<h3>大安運動中心</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市大安區辛亥路三段55號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 9', new google.maps.LatLng(25.020476, 121.537713), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox" style=" overflow:hidden"><img src="img/lazy_space_img03.jpg" alt="" >'+
                        '<div class="nearby_text">'+
                            '<h3>臺灣大學醉月湖</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>台北市大安區羅斯福路四段1號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');


          createLocationOnMap('Location Name 10', new google.maps.LatLng(25.172270, 121.437441), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img01.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>淡水藝術工坊</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市淡水區中正路298號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 11', new google.maps.LatLng(25.168881, 121.443084), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img02.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>新建成餅店</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市淡水區公明街42號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 12', new google.maps.LatLng(25.173435, 121.441239), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_talking_space_img03.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>淡水國小</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市淡水區中山路160號號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');


          createLocationOnMap('Location Name 13', new google.maps.LatLng(25.023187, 121.465499), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img01.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>彼得好咖啡</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市板橋區自由路37號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 14', new google.maps.LatLng(25.021700, 121.468380), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img02.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>丹堤咖啡</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市板橋區民生路二段237號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          createLocationOnMap('Location Name 15', new google.maps.LatLng(25.023508, 121.467350), 
                      '<div id="nearby_content" style="position:relative; margin-left:18px;">'+
                
                        '<div class="nearby_imgBox"><img src="img/cocowo_nature_space_img03.jpg" alt="" ></div>'+
                        '<div class="nearby_text">'+
                            '<h3>微學館書店</h3>'+
                            '<span></span>'+
                            '<p>'+
                              'Treerful 小樹屋，我們在各地提供自助式的獨立包廂，有質感的空間、親民的價格，期盼予您一個舒適的私人環境；我們期待與您共同定義小樹屋，發掘專屬於您的空間體驗。'+
                            '</p>'+
                            '<h5>新北市板橋區民生路三段11號</h5>'+
                            '<h4>185元/天</h4>'+
                            '<div class="nearby_btn"><a class="button border_button dark-blue" href="#btn">觀看更多</a></div>'+
                        '</div>'+
                      '</div>');
          // Create the search box and link it to the UI element.
          var input = document.getElementById('pac-input');
          var searchBox = new google.maps.places.SearchBox(input);
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

          // Bias the SearchBox results towards current map's viewport.
          map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
          });

          var markers = [];
          // [START region_getplaces]
          // Listen for the event fired when the user selects a prediction and retrieve
          // more details for that place.
          searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
              return;
            }

            // Clear out the old markers.
            markers.forEach(function(marker) {
              marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
              var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
              };

              // Create a marker for each place.
              markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
              }));

              if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            map.fitBounds(bounds);
          });
          // [END region_getplaces]
        }

        function createLocationOnMap(title, position, content) { 
            var markerIcon = {
                path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                fillColor: '#e25a00',
                fillOpacity: 0.95,
                scale: 2,
                strokeColor: '#fff',
                strokeWeight: 3,
                anchor: new google.maps.Point(12, 24)
            };  

            var m = new google.maps.Marker({
                map: map,
                icon: markerIcon,
                animation: google.maps.Animation.DROP,
                title: title,
                position: position,
                html: content
            });            

            google.maps.event.addListener(m, 'click', function () {                
                info_window.setContent(this.html);
                info_window.open(map, this);
                  $('img[src="http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif"]').each(function() {
                  $(this).attr('width', 14);
                  $(this).attr('height', 13);
                  $(this).css({width: '14px',height: '13px'});
                  $(this).attr('src','http://www.google.com/intl/en_us/mapfiles/close.gif');
                });
            });
        }
    // Google 地圖 end

// 地圖
// function map(){
// 	var myPosition = {lat: 25.008748, lng: 121.302337};

// 	var myMap = new google.maps.Map(document.getElementById('searchMap'),{
// 		zoom: 16,
// 		center: myPosition,
// 		// mapTypeId: google.maps.MapTypeId.ROADMAP,
//         styles: [
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#3b5998"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.province",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "hue": "#3b5998"
//             },
//             {
//                 "saturation": -22
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#f7f7f7"
//             },
//             {
//                 "saturation": 10
//             },
//             {
//                 "lightness": 76
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.natural",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#f7f7f7"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#8b9dc3"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.country",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "color": "#3b5998"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#8b9dc3"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "color": "#8b9dc3"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.line",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "invert_lightness": false
//             },
//             {
//                 "color": "#ffffff"
//             },
//             {
//                 "weight": 0.43
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#8b9dc3"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#3b5998"
//             }
//         ]
//     }
// ]
// 	});

// 	var marker = new google.maps.Marker({
// 		position : myPosition,
// 		map : myMap,
// 		title: '這不是資策會!'
// 	});

//     var info = new SnazzyInfoWindow({
//         marker: marker,
//         content: '<h4>KoHub工作空間</h4>' +
//                  '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at quaerat enim sunt iste ea, velit accusantium illum veritatis repellendus omnis fugit dignissimos recusandae culpa nihil corporis similique. Maiores, voluptatibus.</p>' +
//                  '<hr>' +
//                  '<em>歡迎來使用<em>',
//         closeOnMapClick : false
//     });

//     info.open();
// }

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
