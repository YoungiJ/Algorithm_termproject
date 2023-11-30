
//지도 설정
const mapContainer = document.getElementById('map'),
  mapOption = {
    center: new kakao.maps.LatLng( 37.450912562335695, 127.12783483379583),	// 지도의 중심 좌표(임의 설정)
    level: 3 // 지도의 확대 레벨(임의 설정)
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

function addWaypoint() {
  // 최대 5개의 경유지를 허용
  const maxWaypoints = 5;
  const waypointsContainer = document.getElementById('waypoints-container');
  const waypointInputs = waypointsContainer.querySelectorAll('.waypoint-input');

  if (waypointInputs.length >= maxWaypoints) {
    alert('최대 5개의 경유지까지만 추가할 수 있습니다.');
    return;
  }

  // 새로운 경유지 입력란 생성
  const newWaypointInput = document.createElement('input');
  newWaypointInput.type = 'text';
  newWaypointInput.placeholder = 'stopover';
  newWaypointInput.className = 'waypoint-input';

  // 새로운 자동완성 목록 엘리먼트 생성
  const newAutocompleteList = document.createElement('ul');
  newAutocompleteList.className = 'autocomplete-list';
  newAutocompleteList.id = 'waypoint-autocomplete-list-' + waypointInputs.length; // 고유한 ID

  // 경유지 입력란과 자동완성 목록 엘리먼트를 컨테이너에 추가
  waypointsContainer.appendChild(newWaypointInput);
  waypointsContainer.appendChild(newAutocompleteList);

  // 새로운 경유지 입력란에 자동완성 기능 적용
  applyAutocomplete(newWaypointInput, newAutocompleteList.id);
}


function removeWaypoint() {
  // Get all waypoint input elements
  const waypointInputs = document.querySelectorAll('.waypoint-input');

  // Check if there is at least one waypoint
  if (waypointInputs.length > 0) {
    // Remove the last waypoint input
    const lastWaypointInput = waypointInputs[waypointInputs.length - 1];
    lastWaypointInput.parentNode.removeChild(lastWaypointInput);
  }
}



// 칼로리 식 바꾸기
// function calculateCalorie() {
//   // 거리와 소요 시간을 가져옵니다.
//   var distanceText = document.getElementById("distance").innerText;
//   var duration = document.getElementById("duration").innerText;
//
//   // 거리 텍스트에서 숫자만 추출 (예: '10 km' -> 10)
//   var distance = parseFloat(distanceText);
//
//   // 사용자의 몸무게를 숫자로 변환
//   var weight = parseFloat(localStorage.getItem('weight'));
//
//   // 몸무게와 거리가 유효한지 확인
//   if (isNaN(weight) || weight <= 0 || isNaN(distance) || distance <= 0) {
//     alert('유효한 몸무게 또는 거리 정보가 없습니다.');
//     return;
//   }
//
//   // 칼로리 계산
//   var calorie = (weight * 0.035) + (distance * 0.04 * weight);
//
//   var calorieResultElement = document.getElementById("calorieResult");
//   calorieResultElement.innerText = calorie.toFixed(2) + "kcal";
// }

// 얻어온 정보를 다시 활용하려면 밑의 코드 작성






