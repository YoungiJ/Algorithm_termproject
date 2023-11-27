const searchWords = ["화리화리","쩡이네포차", '화로상회','봉구통닭','겐코','버거스캔들','티코쓰','베스킨 라빈스',
  '메가커피','모퉁','다이소','pc방','비전타워','기숙사2','글로벌 센터','공과대학1','공과대학2','예체대1','예체대2',
  '전자정보도서관','중앙도서관','반도체대학','산학협력관','교육대학원',"가천관", "ai관"]; // 검색 가능한 단어 목록

// LCS 알고리즘을 사용하여 가장 긴 공통 부분 문자열을 찾는 함수
function findLCS(str1, str2) {
  const dp = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0));
  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i;
        }
      }
    }
  }
  return str1.substring(endIndex - maxLength, endIndex);
}

// 자동완성 제안을 생성하는 함수
function autocomplete(input) {
  const suggestions = [];

  for (const word of searchWords) {
    const commonSubstring = findLCS(input, word); // 함수 이름을 정의된 이름으로 변경
    if (commonSubstring && commonSubstring === input) {
      suggestions.push(word);
    }
  }
  return suggestions;
}

// 자동완성 제안을 처리하는 함수를 정의합니다.
function applyAutocomplete(inputElement, autocompleteListId) {
  inputElement.addEventListener('input', function() {
    const inputText = this.value;
    const suggestions = autocomplete(inputText);

    // 해당하는 자동완성 목록 엘리먼트를 찾습니다.
    const autocompleteListElement = document.getElementById(autocompleteListId); // 변수 이름 수정
    autocompleteListElement.innerHTML = ''; // 올바른 변수 이름으로 변경

    // 새로운 제안 목록을 만듭니다.
    suggestions.forEach(function(suggestion) {
      const listItem = document.createElement('li');
      listItem.textContent = suggestion;
      listItem.onclick = function() {
        inputElement.value = suggestion; // 클릭된 제안으로 입력란의 값을 업데이트합니다.
        autocompleteListElement.innerHTML = ''; // 올바른 변수 이름으로 변경
      };
      autocompleteListElement.appendChild(listItem); // 목록에 항목을 추가합니다.
    });
  });
}


// 각 입력 필드에 자동완성 기능 적용
applyAutocomplete(document.getElementById('start'), 'start-autocomplete-list');
applyAutocomplete(document.querySelector('.waypoint-input'), 'waypoint-autocomplete-list');
applyAutocomplete(document.getElementById('destination'), 'destination-autocomplete-list');




