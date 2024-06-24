sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/HTML"
], function (Controller, HTML) {
    "use strict";

    return Controller.extend("sync.ea.findstore.controller.Map", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("factory").attachPatternMatched(this.onFactoryMatched, this);
            this.getOwnerComponent().getRouter().getRoute("storage").attachPatternMatched(this.onStorageMatched, this);
        },

        /**
         * @override
         */
        onAfterRendering: function () {
            console.log("지도 라이브러리 로드 시작");
            this.loadMapScript();
            
        },

        onFactoryMatched: function () {
            console.log("Factory"); // 함수가 호출되었는지 확인
            this.setMapCenter({ lat: 36.450493629253046, lng: 127.411982023056 });
        },

        onStorageMatched: function () {
            console.log("Storage route matched!"); // 함수가 호출되었는지 확인
            this.setMapCenter({ lat: 36.40956213773216, lng: 127.41218944719489 });
        },


        loadMapScript: function () {
            if (!this.mapScriptLoaded) {
                var script = document.createElement("script");
                script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=a9hrwuzcq9";
                script.onload = function () {
                    
                    console.log("지도 라이브러리 로드 완료");
                    this.mapScriptLoaded = true;
                    
                    // document.dispatchEvent(new Event('naverMapScriptLoaded'));

                    // if (this.mapScriptLoaded) {
                        this.initializeMap();
                    // } else {
                        // var that = this;
                        // document.addEventListener('naverMapScriptLoaded', function () {
                            // that.initializeMap();
                        // });
                    // }
                }.bind(this);
                document.head.appendChild(script);
            }
        },

        initializeMap: function () {

            console.log("맵 정보 초기화");
            var mapOptions = {
                zoom: 15,
                minZoom: 6,
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.TOP_RIGHT
                }
            };
            var divMap = document.getElementById('map');
            this.map = new naver.maps.Map(divMap, mapOptions);

            this.setCenterToCurrentLocation();
            this.addMarkers();
            // this.onNavItemSelect();
        },

        setCenterToCurrentLocation: function () {
            console.log("현재 위치를 지도의 중앙으로 표시");
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latlng = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    this.map.setCenter(latlng);

                    new naver.maps.Marker({
                        position: latlng,
                        map: this.map
                    });
                }.bind(this), function (error) {
                    alert('위치 정보를 가져오는 데 문제가 발생했습니다.');
                });
            } else {
                alert('브라우저가 Geolocation을 지원하지 않습니다.');
            }
        },

        setMapCenter: function (coords) {
            var latlng = new naver.maps.LatLng(coords.lat, coords.lng);
            this.map.setCenter(latlng);
        },

        addMarkers: function () {
            var locations = [
                { title: "한국타이어 구로직영점", lat: 37.50481627211736, lng: 126.86288136975556 },
                { title: "대전 생산공장", lat: 36.450493629253046, lng: 127.411982023056 },
                { title: "대전 저장창고", lat: 36.40956213773216, lng: 127.41218944719489 },
                { title: "평택직영점", lat: 36.98980375896131, lng: 126.86241566501465 },
                { title: "종로직영점", lat: 37.564427210907326, lng: 127.00215904092173 },
                { title: "인천직영점", lat: 37.44430856162661, lng: 126.76411197993752 },
                { title: "오산직영점", lat: 37.14409922355329, lng: 127.07020778536315 },
                { title: "대구직영점", lat: 35.88585595420617, lng: 128.53062407045834 },
                { title: "대전직영점", lat: 36.378606724393926, lng: 127.3376317301431 }
            ];

            this.locations = locations;

            locations.forEach(function (location) {
                var marker = new naver.maps.Marker({
                    position: new naver.maps.LatLng(location.lat, location.lng),
                    map: this.map,
                    icon: {
                        url: "./icon/heart-icon.png",
                        scaledSize: new naver.maps.Size(30, 37),
                        origin: new naver.maps.Point(0, 0),
                    },
                    title: location.title
                });

                var infowindowContent = [
                    '<div class="iw_inner">',
                    '   <h2>' + location.title + '</h2>',
                    // '   <p>' + location.lat + ', ' + location.lng + '<br />',
                    '       <img src="https://ifh.cc/g/Om8Yzy.png" width="100"  class="thumb" /><br />',
                    '       <a href="https://edu.bgis.co.kr:8443/sap/bc/ui2/flp#synceacompany1-display&/" target="_blank">www.ISOT.com/</a>',
                    '   </p>',
                    '</div>'
                ].join('');

                var infowindow = new naver.maps.InfoWindow({
                    content: infowindowContent,
                    maxWidth: 200,
                    height: 50,
                    backgroundColor: "#eee",
                    borderColor: "Orange",
                    borderWidth: 5,
                    disableAnchor: true,
                    textAlign: "center",
                    margin: "auto",
                    pixelOffset: new naver.maps.Point(0, -5)
                });

                naver.maps.Event.addListener(marker, 'click', function() {
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        infowindow.open(this.map, marker);
                    }
                }.bind(this));
            }.bind(this));
        },
        
    });
});
