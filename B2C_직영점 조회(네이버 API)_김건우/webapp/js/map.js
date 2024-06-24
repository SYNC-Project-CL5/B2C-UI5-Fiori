// 사용자의 현재 위치로 이동하는 함수 추가
function moveToCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latlng = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.panTo(latlng); // 현재 위치로 지도 이동
        }, function(error) {
            alert('위치 정보를 가져오는 데 문제가 발생했습니다.');
        });
    } else {
        alert('브라우저가 Geolocation을 지원하지 않습니다.');
    }
}

// 사용자의 현재 위치를 가져와 지도의 중심으로 설정하는 함수
function setCenterToCurrentLocation(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latlng = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(latlng); // 현재 위치로 지도 중심 설정

            // 현재 위치를 마커로 표시
            var marker = new naver.maps.Marker({
                position: latlng,
                map: map
            });
        }, function(error) {
            alert('위치 정보를 가져오는 데 문제가 발생했습니다.');
        });
    } else {
        alert('브라우저가 Geolocation을 지원하지 않습니다.');
    }
}

var map = new naver.maps.Map('map', {
  zoom: 17,
  minZoom: 8, //지도의 최소 줌 레벨
  zoomControl: true, //줌 컨트롤의 표시 여부
  zoomControlOptions: { //줌 컨트롤의 옵션
      position: naver.maps.Position.TOP_RIGHT
  }
});

// 현재 위치를 중심으로 지도의 중심 설정
setCenterToCurrentLocation(map);

// 구로점 마커 추가
var guroPosition = new naver.maps.LatLng(37.50481627211736, 126.86288136975556 ); // 구로점 위치 설정
var guroMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: guroPosition,
    map: map
});

var guroContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 구로직영점</h2>',
    '   <p>서울 구로구 경인로47길 142 | 서울특별시 구로구 고척동 43-39<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       02-2619-8255 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var guroInfowindow = new naver.maps.InfoWindow({
    content: guroContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(guroMarker, "click", function(e) {
    if (guroInfowindow.getMap()) {
        guroInfowindow.close();
    } else {
        guroInfowindow.open(map, guroMarker);
    }
});

// 대전 생산공장 마커 추가
var factoryPosition = new naver.maps.LatLng(36.450493629253046, 127.411982023056);
var factoryMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: factoryPosition,
    map: map
});

var factoryContentString = [
    '<div class="iw_inner">',
    '   <h2>대전 생산공장</h2>',
    '   <p>대전 대덕구 대덕대로1447번길 40 | 대전 대덕구 목상동 76-2<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       042-855-6932 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var factoryInfowindow = new naver.maps.InfoWindow({
    content: factoryContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "White",
    borderColor: "Orange",
    borderWidth: 2,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(factoryMarker, "click", function(e) {
    if (factoryInfowindow.getMap()) {
        factoryInfowindow.close();
    } else {
        factoryInfowindow.open(map, factoryMarker);
    }
});

// 대전 저장창고 마커 추가
var storagePosition = new naver.maps.LatLng(36.40956213773216, 127.41218944719489);
var storageMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: storagePosition,
    map: map
});

var storageContentString = [
    '<div class="iw_inner">',
        '   <h2>한국타이어 대전 저장창고</h2>',
        '   <p>대전 유성구 엑스포로 624 | 대전 유성구 탑립동 442-1<br />',
        '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
        '       042-855-7744 | <br />',
        '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
        '   </p>',
        '</div>'            
].join('');

var storageInfowindow = new naver.maps.InfoWindow({
    content: storageContentString,
    maxWidth: 200,
    height: 50,
    backgroundColor: "White",
    borderColor: "Orange",
    borderWidth: 2,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(storageMarker, "click", function(e) {
    if (storageInfowindow.getMap()) {
        storageInfowindow.close();
    } else {
        storageInfowindow.open(map, storageMarker);
    }
});

// 평택 직영점 마커 추가
var PyeongtaekPosition = new naver.maps.LatLng(36.98980375896131, 126.86241566501465); // 평택점 위치 설정
var PyeongtaekMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: PyeongtaekPosition,
    map: map
});

var PyeongtaekContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 평택직영점</h2>',
    '   <p>경기 평택시 포승읍 포승향남로 194-4 | 경기 평택시 포승읍 도곡리 138<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       031-681-5521 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var PyeongtaekInfowindow = new naver.maps.InfoWindow({
    content: PyeongtaekContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(PyeongtaekMarker, "click", function(e) {
    if (PyeongtaekInfowindow.getMap()) {
        PyeongtaekInfowindow.close();
    } else {
        PyeongtaekInfowindow.open(map, PyeongtaekMarker);
    }
});


// 종로 직영점 마커 추가
var JongroPosition = new naver.maps.LatLng( 37.564427210907326, 127.00215904092173 ); // 종로점 위치 설정
var JongroMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: JongroPosition,
    map: map
});

var JongroContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 종로직영점</h2>',
    '   <p>서울 중구 동호로 337 | 서울 중구 오장동 206-46<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       031-681-5521 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var JongroInfowindow = new naver.maps.InfoWindow({
    content: JongroContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(JongroMarker, "click", function(e) {
    if (JongroInfowindow.getMap()) {
        JongroInfowindow.close();
    } else {
        JongroInfowindow.open(map, JongroMarker);
    }
});


// 인천 직영점 마커 추가
var IncheonPosition = new naver.maps.LatLng(37.44430856162661, 126.76411197993752 ); // 인천점 위치 설정
var IncheonMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: IncheonPosition,
    map: map
});

var IncheonContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 인천직영점</h2>',
    '   <p>인천 남동구 수인로 3566 티스테이션 인천대공원점 | 인천 남동구 운연동 22-9<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       032-576-5870 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var IncheonInfowindow = new naver.maps.InfoWindow({
    content: IncheonContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(IncheonMarker, "click", function(e) {
    if (IncheonInfowindow.getMap()) {
        IncheonInfowindow.close();
    } else {
        IncheonInfowindow.open(map, IncheonMarker);
    }
});        

// 오산 직영점 마커 추가
var OsanPosition = new naver.maps.LatLng(37.14409922355329, 127.07020778536315); // 오산점 위치 설정
var OsanMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: OsanPosition,
    map: map
});

var OsanContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 오산직영점</h2>',
    '   <p>경기 오산시 오산로190번길 15 | 경기 오산시 원동 774-18<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       031-681-5521 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var OsanInfowindow = new naver.maps.InfoWindow({
    content: OsanContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(OsanMarker, "click", function(e) {
    if (OsanInfowindow.getMap()) {
        OsanInfowindow.close();
    } else {
        OsanInfowindow.open(map, OsanMarker);
    }
});             

// 대구 직영점 마커 추가
var DaeguPosition = new naver.maps.LatLng(35.88585595420617, 128.53062407045834); // 대구점 위치 설정
var DaeguMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: DaeguPosition,
    map: map
});

var DaeguContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 대구직영점</h2>',
    '   <p>대구 북구 서재로 540 | 대구 북구 금호동 609-5<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       053-524-8272 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var DaeguInfowindow = new naver.maps.InfoWindow({
    content: DaeguContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(DaeguMarker, "click", function(e) {
    if (DaeguInfowindow.getMap()) {
        DaeguInfowindow.close();
    } else {
        DaeguInfowindow.open(map, DaeguMarker);
    }
});          

// 대전 직영점 마커 추가
var DaejeonPosition = new naver.maps.LatLng(36.378606724393926, 127.3376317301431); // 대전점 위치 설정
var DaejeonMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: DaejeonPosition,
    map: map
});

var DaejeonContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 대전직영점</h2>',
    '   <p>대전 유성구 유성대로 935번길 50 | 대전 유성구 죽동 664<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       042-724-1000 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var DaejeonInfowindow = new naver.maps.InfoWindow({
    content: DaejeonContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(DaejeonMarker, "click", function(e) {
    if (DaejeonInfowindow.getMap()) {
        DaejeonInfowindow.close();
    } else {
        DaejeonInfowindow.open(map, DaejeonMarker);
    }
});          

// 부천 직영점 마커 추가
var BucheonPosition = new naver.maps.LatLng(37.55060985081828, 126.76677060873176 ); // 부천점 위치 설정
var BucheonMarker = new naver.maps.Marker({
    icon: {
        url: "./icon/heart-icon.png",
        scaledSize: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0),
    },
    position: BucheonPosition,
    map: map
});

var BucheonContentString = [
    '<div class="iw_inner">',
    '   <h2>한국타이어 부천직영점</h2>',
    '   <p>경기 부천시 오정구 벌말로 215 | 경기 부천시 대장동 551<br />',
    '       <img src="https://lh3.google.com/u/0/d/1ZnirTdb-aHCrde1wGttBOVUUr8aqIltE=w1370-h904-iv1" width="140.5" height="41.5" class="thumb" /><br />',
    '       032-676-1194 | <br />',
    '       <a href="https://www.hankooktire.com/kr/ko/home.html" target="_blank">www.hankooktire.com/</a>',
    '   </p>',
    '</div>'
].join('');

var BucheonInfowindow = new naver.maps.InfoWindow({
    content: BucheonContentString,
    maxWidth: 300,
    height: 50,
    backgroundColor: "#eee",
    borderColor: "Orange",
    borderWidth: 5,
    disableAnchor: true,
    textAlign: "center",
    margin: "auto",
    pixelOffset: new naver.maps.Point(0, -5)
});

naver.maps.Event.addListener(BucheonMarker, "click", function(e) {
    if (BucheonInfowindow.getMap()) {
        BucheonInfowindow.close();
    } else {
        BucheonInfowindow.open(map, BucheonMarker);
    }
});          

// 버튼 클릭 시 지도 이동 이벤트 추가
document.getElementById('to_guro').onclick = function() {
    map.panTo(guroPosition);
};

document.getElementById('to_Pyeongtaek').onclick = function() {
    map.panTo(PyeongtaekPosition);
};

document.getElementById('to_Jongro').onclick = function() {
    map.panTo(JongroPosition);
};

document.getElementById('to_Incheon').onclick = function() {
    map.panTo(IncheonPosition);
};

document.getElementById('to_Osan').onclick = function() {
    map.panTo(OsanPosition);
};

document.getElementById('to_Daegu').onclick = function() {
    map.panTo(DaeguPosition);
};

document.getElementById('to_Daejeon2').onclick = function() {
    map.panTo(DaejeonPosition);
};

document.getElementById('to_Bucheon').onclick = function() {
    map.panTo(BucheonPosition);
};

document.getElementById('to_daejeon_factory').onclick = function() {
    map.panTo(factoryPosition);
};

document.getElementById('to_daejeon_storage').onclick = function() {
    map.panTo(storagePosition);
};
