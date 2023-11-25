
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
// Remove the container reference from your HTML

function addWaypoint() {
  // 최대 5개의 경유지를 허용
  const maxWaypoints = 5;

  // 현재 입력된 경유지의 개수 확인
  const waypointInputs = document.querySelectorAll('.waypoint-input');
  if (waypointInputs.length >= maxWaypoints) {
    alert('최대 5개의 경유지까지만 추가할 수 있습니다.');
    return;
  }

  // 새로운 경유지 입력란 생성
  const newWaypointInput = document.createElement('input');
  newWaypointInput.type = 'text';
  newWaypointInput.placeholder = 'stopover';
  newWaypointInput.className = 'waypoint-input';

  // 경유지 입력란을 현재의 마지막 input 뒤에 추가
  const waypointsContainer = document.getElementById('waypoints-container');
  waypointsContainer.appendChild(newWaypointInput);
  waypointsContainer.scrollTop = waypointsContainer.scrollHeight;

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



function calculateCalorie() {
  // 거리와 소요 시간을 가져옵니다.
  var distance = document.getElementById("distance").innerText;
  var duration = document.getElementById("duration").innerText;

  // Parse the user weight as a number
  var weight = parseFloat(userWeight);

  // Check if the weight is a valid number
  if (isNaN(weight) || weight <= 0) {
    alert('유효한 몸무게 정보가 없습니다.');
    return;
  }

  // 칼로리를 계산합니다.
  var speed = 4; // km/h
  var calorie = (weight * 220.06) / 1000;

  // 칼로리를 출력합니다.
  document.getElementById("kcal").innerText = calorie.toFixed(2) + "kcal";
}
// 얻어온 정보를 다시 활용하려면 밑의 코드 작성
/*
document.addEventListener('DOMContentLoaded', function() {
  // LocalStorage에서 데이터 불러오기
  var gender = localStorage.getItem('gender');
  var name = localStorage.getItem('name');
  var age = localStorage.getItem('age');
  var height = localStorage.getItem('height');
  var weight = localStorage.getItem('weight');

  // HTML 요소에 데이터 설정
  document.getElementById('userGender').textContent = gender;
  document.getElementById('userName').textContent = name;
  document.getElementById('userAge').textContent = age;
  document.getElementById('userHeight').textContent = height;
  document.getElementById('userWeight').textContent = weight;
});
*/
