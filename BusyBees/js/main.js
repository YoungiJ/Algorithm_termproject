
//지도 설정
const mapContainer = document.getElementById('map'),
  mapOption = {
    center: new kakao.maps.LatLng( 37.450912562335695, 127.12783483379583),	// 지도의 중심 좌표(임의 설정)
    level: 3					// 지도의 확대 레벨(임의 설정)
  };

//설정한 지도 생성
const map = new kakao.maps.Map(mapContainer, mapOption);

//마커 초기화(초기화 시 지도에 미리 지정 가능 : 카카오맵 API 문서 참조)
const marker = new kakao.maps.Marker();

//카카오맵 클릭 이벤트 추가
kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
  //클릭한 위도, 경도 정보 불러오기
  const latlng = mouseEvent.latLng;
  //마커 위치를 클릭한 위치로 이동
  marker.setPosition(latlng);
  marker.setMap(map);

  alert(`위도 : ${latlng.getLat()}, 경도 : ${latlng.getLng()}`);
});


// index.html에서 입력한 정보 저장하고, 다음 페이지로 넘어가는 동작
function saveDataAndRedirect(e) {
  e.preventDefault(); // 기본 폼 제출 동작 방지

  // 데이터 추출
  var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  // LocalStorage에 저장
  localStorage.setItem('gender', gender);
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('height', height);
  localStorage.setItem('weight', weight);

  // next.html 페이지로 이동
  window.location.href = 'html/next.html';
}



