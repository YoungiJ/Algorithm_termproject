
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



