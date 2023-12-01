
const nodes = ['화리화리','호식당','복정로10술집','봉구통닭','겐코','알촌','티코스커피','태평돈가스',
  '이디야커피','다이소','뚜레쥬르', 'AI공학관','비전타워','제2학생생활관','글로벌센터',
  '공과대학1','공과대학2','예술체육대학1','예술체육대학2','전자정보도서관','중앙도서관',
  '반도체대학','산학협력관1','가천관','교육대학원'];


// 지점 이름을 인덱스로 매핑
const locationIndexMap = new Map();
nodes.forEach((location, index) => {
  locationIndexMap.set(location, index);
});



const nodeData = [
  //화리화리
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('호식당'), distance: 200, time: 3 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('복정로10술집'), distance: 824, time: 12 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('봉구통닭'), distance: 1200, time: 18 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('겐코'), distance: 935, time: 15 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('알촌'), distance: 965, time: 14 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('티코스커피'), distance: 907, time: 13 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('태평돈가스'), distance: 139, time: 2 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('이디야커피'), distance: 251, time: 4 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('다이소'), distance: 826, time: 12 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('뚜레쥬르'), distance: 923, time: 14 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('AI공학관'), distance: 1500, time: 28 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('비전타워'), distance: 349, time: 5 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('제2학생생활관'), distance: 1600 , time: 30 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('글로벌센터'), distance: 611, time: 10 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('공과대학1'), distance: 674, time: 11 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('공과대학2'), distance: 500, time: 10 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('예술체육대학1'), distance: 790, time: 12 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('예술체육대학2'), distance: 790, time: 12 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('전자정보도서관'), distance: 538, time: 8 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('중앙도서관'), distance: 1200, time: 21 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('반도체대학'), distance: 439, time: 6 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('산학협력관1'), distance: 609, time: 12 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('가천관'), distance: 652, time: 10 },
  { start: locationIndexMap.get('화리화리'), end: locationIndexMap.get('교육대학원'), distance: 927, time: 16 },

//호식당
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('화리화리'), distance: 200, time: 3 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('복정로10술집'), distance: 798, time: 12 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('봉구통닭'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('겐코'), distance: 852, time: 14 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('알촌'), distance: 860, time: 14 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('티코스커피'), distance: 824, time: 12 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('태평돈가스'), distance: 52, time: 1 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('이디야커피'), distance: 168, time: 2 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('다이소'), distance: 78, time: 1 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('뚜레쥬르'), distance: 773, time: 11 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('AI공학관'), distance: 1500, time: 28 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('비전타워'), distance: 266, time: 4 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('제2학생생활관'), distance: 1500 , time: 28 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('글로벌센터'), distance: 528, time: 7 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('공과대학1'), distance: 528, time: 11 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('공과대학2'), distance: 418, time: 9 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('예술체육대학1'), distance: 707, time: 11 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('예술체육대학2'), distance: 707, time: 11 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('전자정보도서관'), distance: 528, time: 7 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('중앙도서관'), distance: 1100, time: 20 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('반도체대학'), distance: 381, time: 6 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('산학협력관1'), distance: 526, time: 11 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('가천관'), distance: 569, time: 9 },
  { start: locationIndexMap.get('호식당'), end: locationIndexMap.get('교육대학원'), distance: 845, time: 15 },

//복정로10술집
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('화리화리'), distance: 824, time: 12 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('호식당'), distance: 798, time: 12 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('봉구통닭'), distance: 389, time: 6 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('겐코'), distance: 143, time: 2 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('알촌'), distance: 151, time: 2 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('티코스커피'), distance: 68, time: 1 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('태평돈가스'), distance: 828 , time: 13 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('이디야커피'), distance: 630, time: 10 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('다이소'), distance: 759, time: 12 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('뚜레쥬르'), distance: 51, time: 1 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('AI공학관'), distance: 684, time: 8 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('비전타워'), distance: 476, time: 8 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('제2학생생활관'), distance: 684 , time: 8 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('글로벌센터'), distance: 652, time: 9 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('공과대학1'), distance: 596, time: 11 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('공과대학2'), distance: 702, time: 12 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('예술체육대학1'), distance: 775, time: 11 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('예술체육대학2'), distance: 775, time: 11 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('전자정보도서관'), distance: 596, time: 11 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('중앙도서관'), distance: 759, time: 9 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('반도체대학'), distance: 360, time: 5 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('산학협력관1'), distance: 867, time: 15 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('가천관'), distance: 694, time: 10 },
  { start: locationIndexMap.get('복정로10술집'), end: locationIndexMap.get('교육대학원'), distance: 969, time: 16 },


//봉구통닭
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('화리화리'), distance: 1200, time: 18 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('호식당'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('복정로10술집'), distance: 389, time: 6 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('겐코'), distance: 313, time: 4 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('알촌'), distance: 305, time: 4 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('티코스커피'), distance: 427, time: 6 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('태평돈가스'), distance: 1200 , time: 18 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('이디야커피'), distance: 966, time: 15 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('다이소'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('뚜레쥬르'), distance: 365, time: 5 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('AI공학관'), distance: 853, time: 11 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('비전타워'), distance: 869, time: 12 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('제2학생생활관'), distance: 853 , time: 11 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('글로벌센터'), distance: 989, time: 14 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('공과대학1'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('공과대학2'), distance: 1100, time: 19 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('예술체육대학1'), distance: 1200, time: 17 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('예술체육대학2'), distance: 1200, time: 17 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('전자정보도서관'), distance: 1100, time: 15 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('중앙도서관'), distance: 895, time: 11 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('반도체대학'), distance: 753, time: 11 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('산학협력관1'), distance: 1200, time: 20 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('가천관'), distance: 1000, time: 15 },
  { start: locationIndexMap.get('봉구통닭'), end: locationIndexMap.get('교육대학원'), distance: 1300, time: 20 },


//겐코
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('화리화리'), distance: 935, time: 15 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('호식당'), distance:  852, time: 14 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('복정로10술집'), distance: 143, time: 2 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('봉구통닭'), distance: 313, time: 4 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('알촌'), distance: 7, time: 1 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('티코스커피'), distance: 114, time: 1 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('태평돈가스'), distance: 882 , time: 15 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('이디야커피'), distance: 684, time: 12 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('다이소'), distance: 813, time: 13 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('뚜레쥬르'), distance: 81, time: 1 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('AI공학관'), distance: 630, time: 8 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('비전타워'), distance: 586, time: 9 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('제2학생생활관'), distance: 630 , time: 8 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('글로벌센터'), distance: 630, time: 8 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('공과대학1'), distance: 770, time: 12 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('공과대학2'), distance: 813, time: 15 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('예술체육대학1'), distance: 986, time: 14 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('예술체육대학2'), distance: 986, time: 14 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('전자정보도서관'), distance: 770, time: 12 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('중앙도서관'), distance: 700, time: 8 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('반도체대학'), distance: 471, time: 8 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('산학협력관1'), distance: 921, time: 17 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('가천관'), distance: 748, time: 12 },
  { start: locationIndexMap.get('겐코'), end: locationIndexMap.get('교육대학원'), distance: 1000, time: 18 },


//알촌
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('화리화리'), distance: 965, time: 14 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('호식당'), distance:  860, time: 14 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('복정로10술집'), distance: 151, time: 2 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('봉구통닭'), distance: 305, time: 4 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('겐코'), distance: 7, time: 1 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('티코스커피'), distance: 121, time: 1 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('태평돈가스'), distance: 889 , time: 15 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('이디야커피'), distance: 691, time: 12 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('다이소'), distance: 820, time: 14 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('뚜레쥬르'), distance: 88, time: 1 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('AI공학관'), distance: 741, time: 10 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('비전타워'), distance: 616, time: 9 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('제2학생생활관'), distance: 741 , time: 10 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('글로벌센터'), distance: 714, time: 11 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('공과대학1'), distance: 800, time: 12 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('공과대학2'), distance: 843, time: 15 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('예술체육대학1'), distance: 916, time: 13 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('예술체육대학2'), distance: 916, time: 13 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('전자정보도서관'), distance: 800, time: 12 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('중앙도서관'), distance: 735, time: 8 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('반도체대학'), distance: 500, time: 8 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('산학협력관1'), distance: 928, time: 18 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('가천관'), distance: 928, time: 18 },
  { start: locationIndexMap.get('알촌'), end: locationIndexMap.get('교육대학원'), distance: 1000, time: 18 },

//티코스커피
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('화리화리'), distance: 907, time: 13 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('호식당'), distance:  824, time: 12 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('복정로10술집'), distance: 68, time: 1 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('봉구통닭'), distance: 427, time: 6 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('겐코'), distance: 114, time: 1 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('알촌'), distance: 121, time: 1 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('태평돈가스'), distance: 992 , time: 14 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('이디야커피'), distance: 656, time: 10 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('다이소'), distance: 785, time: 12 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('뚜레쥬르'), distance: 89, time: 1 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('AI공학관'), distance: 600, time: 8 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('비전타워'), distance: 558, time: 8 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('제2학생생활관'), distance: 600 , time: 8 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('글로벌센터'), distance: 678, time: 10 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('공과대학1'), distance: 678, time: 10 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('공과대학2'), distance: 785, time: 14 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('예술체육대학1'), distance: 858, time: 12 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('예술체육대학2'), distance: 858, time: 12 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('전자정보도서관'), distance: 678, time: 10 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('중앙도서관'), distance: 680, time: 8 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('반도체대학'), distance: 443, time: 6 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('산학협력관1'), distance: 893, time: 16 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('가천관'), distance: 720, time: 11 },
  { start: locationIndexMap.get('티코스커피'), end: locationIndexMap.get('교육대학원'), distance: 995, time: 16 },

//태평돈가스
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('화리화리'), distance: 139, time: 2 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('호식당'), distance:  52, time: 1 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('복정로10술집'), distance: 828, time: 13 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('봉구통닭'), distance: 1200, time: 18 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('겐코'), distance: 882, time: 15 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('알촌'), distance: 889, time: 15 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('티코스커피'), distance: 992 , time: 14 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('이디야커피'), distance: 198, time: 3 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('다이소'), distance: 69, time: 1 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('뚜레쥬르'), distance: 803, time: 12 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('AI공학관'), distance: 1498, time: 28 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('비전타워'), distance: 238, time: 3 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('제2학생생활관'), distance: 1400 , time: 27 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('글로벌센터'), distance: 558, time: 9 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('공과대학1'), distance: 501, time: 7 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('공과대학2'), distance: 390, time: 8 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('예술체육대학1'), distance: 680, time: 10 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('예술체육대학2'), distance: 680, time: 10 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('전자정보도서관'), distance: 501, time: 7 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('중앙도서관'), distance: 1000, time: 17 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('반도체대학'), distance: 354, time: 5 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('산학협력관1'), distance: 354, time: 5 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('가천관'), distance: 599, time: 10 },
  { start: locationIndexMap.get('태평돈가스'), end: locationIndexMap.get('교육대학원'), distance: 874, time: 15 },

//이디야커피
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('화리화리'), distance: 251, time: 4 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('호식당'), distance:  168, time: 2 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('복정로10술집'), distance: 630, time: 10 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('봉구통닭'), distance: 966, time: 15 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('겐코'), distance: 684, time: 12 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('알촌'), distance: 691, time: 12 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('티코스커피'), distance: 656 , time: 10 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('태평돈가스'), distance: 198, time: 3 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('다이소'), distance: 129, time: 1 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('뚜레쥬르'), distance: 605, time: 8 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('AI공학관'), distance: 1297, time: 23 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('비전타워'), distance: 98, time: 1 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('제2학생생활관'), distance: 1300 , time: 25 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('글로벌센터'), distance: 360, time: 5 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('공과대학1'), distance: 360, time: 5 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('공과대학2'), distance: 250, time: 6 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('예술체육대학1'), distance: 539, time: 8 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('예술체육대학2'), distance: 539, time: 8 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('전자정보도서관'), distance: 360, time: 5 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('중앙도서관'), distance: 879, time: 15 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('반도체대학'), distance: 213, time: 3 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('산학협력관1'), distance: 358, time: 8 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('가천관'), distance: 401, time: 6 },
  { start: locationIndexMap.get('이디야커피'), end: locationIndexMap.get('교육대학원'), distance: 676, time: 12 },

//다이소
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('화리화리'), distance: 826, time: 12 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('호식당'), distance:  78, time: 1 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('복정로10술집'), distance: 759, time: 12 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('봉구통닭'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('겐코'), distance: 813, time: 13 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('알촌'), distance: 820, time: 14 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('티코스커피'), distance: 785 , time: 12 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('태평돈가스'), distance: 69, time: 1 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('이디야커피'), distance: 129, time: 1 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('뚜레쥬르'), distance: 733, time: 11 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('AI공학관'), distance: 1600, time: 29 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('비전타워'), distance: 227, time: 3 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('제2학생생활관'), distance: 1400 , time: 27 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('글로벌센터'), distance: 489, time: 7 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('공과대학1'), distance: 489, time: 7 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('공과대학2'), distance: 378, time: 8 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('예술체육대학1'), distance: 668, time: 10 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('예술체육대학2'), distance: 668, time: 10 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('전자정보도서관'), distance: 489, time: 7 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('중앙도서관'), distance: 1000, time: 17 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('반도체대학'), distance: 342, time: 5 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('산학협력관1'), distance:  487, time: 10 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('가천관'), distance: 530, time: 8 },
  { start: locationIndexMap.get('다이소'), end: locationIndexMap.get('교육대학원'), distance: 805, time: 13 },

//뚜레쥬르
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('화리화리'), distance: 923, time: 14 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('호식당'), distance:  773, time: 11 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('복정로10술집'), distance: 51, time: 1 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('봉구통닭'), distance: 365, time: 5 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('겐코'), distance: 81, time: 1 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('알촌'), distance: 88, time: 1 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('티코스커피'), distance: 89 , time: 1 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('태평돈가스'), distance: 803, time: 12 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('이디야커피'), distance: 605, time: 8 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('다이소'), distance: 733, time: 11 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('AI공학관'), distance: 865, time: 12 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('비전타워'), distance: 575, time: 8 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('제2학생생활관'), distance: 734 , time: 10 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('글로벌센터'), distance: 627, time: 9 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('공과대학1'), distance: 695, time: 10 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('공과대학2'), distance: 690, time: 10 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('예술체육대학1'), distance: 874, time: 13 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('예술체육대학2'), distance: 874, time: 13 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('전자정보도서관'), distance: 695, time: 6 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('중앙도서관'), distance: 1200, time: 20 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('반도체대학'), distance: 459, time: 6 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('산학협력관1'), distance:  842, time: 15 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('가천관'), distance: 668, time: 10 },
  { start: locationIndexMap.get('뚜레쥬르'), end: locationIndexMap.get('교육대학원'), distance: 944, time: 15 },





// AI공학관
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('화리화리'), distance: 1500, time: 29 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('복정로10술집'), distance: 684, time: 8 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('봉구통닭'), distance: 853, time: 11 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('겐코'), distance: 630, time: 8 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('알촌'), distance: 741, time: 10 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('티코스커피'), distance: 600, time: 8 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('태평돈가스'), distance: 1498, time: 28 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('이디야커피'), distance: 1297, time: 23 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('다이소'), distance: 1600, time: 29 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('뚜레쥬르'), distance: 865, time: 12 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('비전타워'), distance:1200, time: 23 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('제2학생생활관'), distance: 100, time: 1 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('글로벌센터'), distance: 969, time: 18 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('공과대학1'), distance: 960, time: 18 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('공과대학2'), distance: 913, time: 16 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('예술체육대학1'), distance: 903, time: 18 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('예술체육대학2'), distance: 850, time: 17 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('전자정보도서관'), distance: 989, time: 20 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('중앙도서관'), distance: 406, time: 9 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('반도체대학'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('산학협력관1'), distance: 1150, time: 21 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('가천관'), distance: 613, time: 9 },
  { start: locationIndexMap.get('AI공학관'), end: locationIndexMap.get('교육대학원'), distance: 1142, time: 20 },



//비전타워
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('화리화리'), distance: 349, time: 5 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('호식당'), distance: 266, time: 4 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('복정로10술집'), distance: 476, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('봉구통닭'), distance: 869, time: 12 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('겐코'), distance: 586, time: 9 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('알촌'), distance: 616, time: 9 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('티코스커피'), distance: 558, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('태평돈가스'), distance: 238, time: 3 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('이디야커피'), distance: 98, time: 1 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('다이소'), distance: 227, time: 3 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('뚜레쥬르'), distance: 575, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('AI공학관'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('제2학생생활관'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('글로벌센터'), distance: 262, time: 4 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('공과대학1'), distance: 326, time: 5 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('공과대학2'), distance: 226, time: 6 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('예술체육대학1'), distance: 441, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('예술체육대학2'), distance: 441, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('전자정보도서관'), distance: 189, time: 3 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('중앙도서관'), distance: 879, time: 17 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('반도체대학'), distance: 115, time: 1 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('산학협력관1'), distance: 335, time: 8 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('가천관'), distance: 304, time: 6 },
  { start: locationIndexMap.get('비전타워'), end: locationIndexMap.get('교육대학원'), distance: 579, time: 11 },


//제2학생생활관

  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('화리화리'), distance: 1600, time: 27 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('호식당'), distance: 1500, time: 28 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('복정로10술집'), distance: 684, time: 8 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('봉구통닭'), distance: 853, time: 11 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('겐코'), distance: 630, time: 8 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('알촌'), distance: 741, time: 10 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('티코스커피'), distance: 600, time: 8 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('태평돈가스'), distance: 1400, time: 27 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('이디야커피'), distance: 1300, time: 25 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('다이소'), distance: 1400, time: 27 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('뚜레쥬르'), distance: 734, time: 10 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('AI공학관'), distance: 100, time: 1 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('비전타워'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('글로벌센터'), distance: 988, time: 19 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('공과대학1'), distance: 500, time: 10 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('공과대학2'), distance: 813, time: 15 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('예술체육대학1'), distance: 830, time: 17 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('예술체육대학2'), distance: 800, time: 16 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('전자정보도서관'), distance: 1000, time: 20 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('중앙도서관'), distance: 426, time: 10 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('반도체대학'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('산학협력관1'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('가천관'), distance: 1000, time:20  },
  { start: locationIndexMap.get('제2학생생활관'), end: locationIndexMap.get('교육대학원'), distance: 544, time: 11 },

//글로벌센터

  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('화리화리'), distance: 611, time: 9 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('호식당'), distance: 528, time: 8 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('복정로10술집'), distance: 652, time: 9 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('봉구통닭'), distance: 989, time: 14 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('겐코'), distance: 630, time: 8 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('알촌'), distance: 714, time: 11 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('티코스커피'), distance: 678, time: 10 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('태평돈가스'), distance: 558, time: 9 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('이디야커피'), distance: 360, time: 5 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('다이소'), distance: 489, time: 7 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('뚜레쥬르'), distance: 627, time: 9 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('AI공학관'), distance: 969, time: 18 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('비전타워'), distance: 4, time: 262 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('제2학생생활관'), distance: 988, time: 19 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('공과대학1'), distance: 133, time: 2 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('공과대학2'), distance: 400, time: 7 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('예술체육대학1'), distance: 128, time: 2 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('예술체육대학2'), distance: 158, time: 3 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('전자정보도서관'), distance: 195, time: 3 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('중앙도서관'), distance: 669, time: 13 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('반도체대학'), distance: 235, time: 3 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('산학협력관1'), distance: 484, time: 9 },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('가천관'), distance: 286, time:5  },
  { start: locationIndexMap.get('글로벌센터'), end: locationIndexMap.get('교육대학원'), distance: 407, time: 9 },


//공과대학1

  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('화리화리'), distance: 674, time: 10 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('호식당'), distance: 528, time: 7 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('복정로10술집'), distance: 596, time: 11 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('봉구통닭'), distance: 1100, time: 17 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('겐코'), distance: 770, time: 12 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('알촌'), distance: 800, time: 12 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('티코스커피'), distance: 678, time: 10 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('태평돈가스'), distance: 501, time: 7 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('이디야커피'), distance: 360, time: 5 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('다이소'), distance: 489, time: 7 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('뚜레쥬르'), distance: 695, time: 10 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('AI공학관'), distance: 960, time: 18 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('비전타워'), distance: 5, time: 326 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('제2학생생활관'), distance: 500, time: 10 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('글로벌센터'), distance: 133, time: 2 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('공과대학2'), distance: 375, time: 6 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('예술체육대학1'), distance: 260, time: 5 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('예술체육대학2'), distance: 249, time: 5 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('전자정보도서관'), distance: 195, time: 1 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('중앙도서관'), distance: 669, time: 12 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('반도체대학'), distance: 439, time: 3 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('산학협력관1'), distance: 484, time: 8 },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('가천관'), distance: 231, time:3  },
  { start: locationIndexMap.get('공과대학1'), end: locationIndexMap.get('교육대학원'), distance: 407, time: 7 },

//공과대학2

  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('화리화리'), distance: 500, time: 10 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('호식당'), distance: 418, time: 9 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('복정로10술집'), distance: 702, time: 12 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('봉구통닭'), distance: 1100, time: 19 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('겐코'), distance: 813, time: 15 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('알촌'), distance: 843, time: 15 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('티코스커피'), distance: 785, time: 14 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('태평돈가스'), distance: 390, time: 8 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('이디야커피'), distance: 250, time: 6 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('다이소'), distance: 378, time: 8 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('뚜레쥬르'), distance: 690, time: 10 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('AI공학관'), distance: 1200, time: 24 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('비전타워'), distance: 226, time: 6 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('제2학생생활관'), distance: 813, time: 15 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('글로벌센터'), distance: 400, time: 7 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('공과대학1'), distance: 375, time: 6 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('예술체육대학1'), distance: 570, time: 11 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('예술체육대학2'), distance: 555, time: 10 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('전자정보도서관'), distance: 440, time: 9 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('중앙도서관'), distance: 918, time: 18 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('반도체대학'), distance: 342, time: 7 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('산학협력관1'), distance: 32, time: 1 },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('가천관'), distance: 143, time:2  },
  { start: locationIndexMap.get('공과대학2'), end: locationIndexMap.get('교육대학원'), distance: 618, time: 12 },

//예술체육대학1

  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('화리화리'), distance: 790, time: 12 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('호식당'), distance: 707, time: 11 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('복정로10술집'), distance: 775, time: 11 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('봉구통닭'), distance: 1200, time: 17 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('겐코'), distance: 986, time: 14 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('알촌'), distance: 916, time: 13 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('티코스커피'), distance: 858, time: 12 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('태평돈가스'), distance: 680, time: 10 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('이디야커피'), distance: 539, time: 8 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('다이소'), distance: 668, time: 10 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('뚜레쥬르'), distance: 874, time: 13 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('AI공학관'), distance: 903, time: 18 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('비전타워'), distance: 441, time: 8 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('제2학생생활관'), distance: 830, time: 17 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('글로벌센터'), distance: 128, time: 2 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('공과대학1'), distance: 260, time: 5 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('공과대학2'), distance: 570, time: 11 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('예술체육대학2'), distance: 30, time: 1 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('전자정보도서관'), distance: 375, time: 7 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('중앙도서관'), distance: 497, time: 9 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('반도체대학'), distance: 413, time: 6 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('산학협력관1'), distance: 661, time: 12 },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('가천관'), distance: 114, time:2  },
  { start: locationIndexMap.get('예술체육대학1'), end: locationIndexMap.get('교육대학원'), distance: 196, time: 4 },


//예술체육대학2

  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('화리화리'), distance: 790, time: 12 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('호식당'), distance: 707, time: 11 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('복정로10술집'), distance: 775, time: 11 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('봉구통닭'), distance: 1200, time: 17 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('겐코'), distance: 986, time: 14 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('알촌'), distance: 916, time: 13 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('티코스커피'), distance: 858, time: 12 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('태평돈가스'), distance: 680, time: 10 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('이디야커피'), distance: 539, time: 8 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('다이소'), distance: 668, time: 10 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('뚜레쥬르'), distance: 874, time: 13 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('AI공학관'), distance: 850, time: 17 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('비전타워'), distance: 441, time: 8 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('제2학생생활관'), distance: 800, time: 16 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('글로벌센터'), distance: 158, time: 3 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('공과대학1'), distance: 249, time: 5 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('공과대학2'), distance: 555, time: 10 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('예술체육대학1'), distance: 30, time: 1 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('전자정보도서관'), distance: 375, time: 7 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('중앙도서관'), distance: 497, time: 9 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('반도체대학'), distance: 413, time: 6 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('산학협력관1'), distance: 661, time: 12 },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('가천관'), distance: 114, time:2  },
  { start: locationIndexMap.get('예술체육대학2'), end: locationIndexMap.get('교육대학원'), distance: 196, time: 4 },


//전자정보도서관

  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('화리화리'), distance: 538, time: 8 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('호식당'), distance: 528, time: 7 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('복정로10술집'), distance: 596, time: 11 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('봉구통닭'), distance: 1100, time: 15 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('겐코'), distance: 770, time: 12 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('알촌'), distance: 800, time: 12 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('티코스커피'), distance: 678, time: 10 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('태평돈가스'), distance: 501, time: 7 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('이디야커피'), distance: 360, time: 5 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('다이소'), distance: 489, time: 7 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('뚜레쥬르'), distance: 695, time: 6 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('AI공학관'), distance: 989, time: 20 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('비전타워'), distance: 189, time: 3 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('제2학생생활관'), distance: 1000, time: 20 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('글로벌센터'), distance: 195, time: 3 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('공과대학1'), distance: 195, time: 1 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('공과대학2'), distance: 440, time: 9 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('예술체육대학1'), distance: 375, time: 7 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('예술체육대학2'), distance: 375, time: 7 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('중앙도서관'), distance: 669, time: 13 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('반도체대학'), distance: 439, time: 4 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('산학협력관1'), distance: 337, time: 6 },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('가천관'), distance: 231, time: 3  },
  { start: locationIndexMap.get('전자정보도서관'), end: locationIndexMap.get('교육대학원'), distance: 407, time: 7 },


//중앙도서관

  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('화리화리'), distance: 1200, time: 21 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('호식당'), distance: 1100, time: 20 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('복정로10술집'), distance: 759, time: 9 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('봉구통닭'), distance: 895, time: 11 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('겐코'), distance: 700, time: 8 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('알촌'), distance: 735, time: 8 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('티코스커피'), distance: 680, time: 8 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('태평돈가스'), distance: 1000, time: 17 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('이디야커피'), distance: 879, time: 15 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('다이소'), distance: 1000, time: 17 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('뚜레쥬르'), distance: 1200, time: 20 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('AI공학관'), distance: 406, time: 9 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('비전타워'), distance: 879, time: 17 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('제2학생생활관'), distance: 426, time: 10 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('글로벌센터'), distance: 669, time: 13 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('공과대학1'), distance: 669, time: 12 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('공과대학2'), distance: 918, time: 18 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('예술체육대학1'), distance: 497, time: 9 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('예술체육대학2'), distance: 497, time: 9 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('전자정보도서관'), distance: 669, time: 13 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('반도체대학'), distance: 852, time: 17 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('산학협력관1'), distance: 1000, time: 20 },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('가천관'), distance: 231, time: 3  },
  { start: locationIndexMap.get('중앙도서관'), end: locationIndexMap.get('교육대학원'), distance: 226, time: 4 },

//반도체대학

  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('화리화리'), distance: 439, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('호식당'), distance: 381, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('복정로10술집'), distance: 360, time: 5 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('봉구통닭'), distance: 753, time: 11 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('겐코'), distance: 471, time: 8 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('알촌'), distance: 500, time: 8 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('티코스커피'), distance: 443, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('태평돈가스'), distance: 354, time: 5 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('이디야커피'), distance: 213, time: 3 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('다이소'), distance: 342, time: 5 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('뚜레쥬르'), distance: 459, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('AI공학관'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('비전타워'), distance: 115, time: 1 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('제2학생생활관'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('글로벌센터'), distance: 235, time: 3 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('공과대학1'), distance: 439, time: 3 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('공과대학2'), distance: 342, time: 7 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('예술체육대학1'), distance: 413, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('예술체육대학2'), distance: 413, time: 6 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('전자정보도서관'), distance: 439, time: 4 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('중앙도서관'), distance: 852, time: 17 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('산학협력관1'), distance: 450, time: 8 },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('가천관'), distance: 277, time: 6  },
  { start: locationIndexMap.get('반도체대학'), end: locationIndexMap.get('교육대학원'), distance: 552, time: 11 },

//산학협력관1

  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('화리화리'), distance: 609, time: 12 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('호식당'), distance: 526, time: 11 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('복정로10술집'), distance: 867, time: 15 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('봉구통닭'), distance: 1200, time: 20},
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('겐코'), distance: 921, time: 17 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('알촌'), distance: 928, time: 18 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('티코스커피'), distance: 893, time: 16 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('태평돈가스'), distance: 354, time: 5 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('이디야커피'), distance: 358, time: 8 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('다이소'), distance: 487, time: 10 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('뚜레쥬르'), distance: 842, time: 15 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('AI공학관'), distance: 1150, time: 21 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('비전타워'), distance: 335, time: 8 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('제2학생생활관'), distance: 1200, time: 23 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('글로벌센터'), distance: 484, time: 9 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('공과대학1'), distance: 484, time: 8 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('공과대학2'), distance: 32, time: 1 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('예술체육대학1'), distance: 661, time: 12 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('예술체육대학2'), distance: 661, time: 12 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('전자정보도서관'), distance: 337, time: 6 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('중앙도서관'), distance: 1000, time: 20 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('반도체대학'), distance: 450, time: 8 },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('가천관'), distance: 451, time: 9  },
  { start: locationIndexMap.get('산학협력관1'), end: locationIndexMap.get('교육대학원'), distance: 726, time: 15 },

//가천관

  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('화리화리'), distance: 652, time: 10 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('호식당'), distance: 569, time: 9 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('복정로10술집'), distance: 694, time: 10 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('봉구통닭'), distance: 1000, time: 15},
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('겐코'), distance: 748, time: 12 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('알촌'), distance: 928, time: 18 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('티코스커피'), distance: 720, time: 11 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('태평돈가스'), distance: 599, time: 10 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('이디야커피'), distance: 401, time: 6 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('다이소'), distance: 530, time: 8 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('뚜레쥬르'), distance: 668, time: 10 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('AI공학관'), distance: 613, time: 9 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('비전타워'), distance: 304, time: 6 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('제2학생생활관'), distance: 1000, time: 20 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('글로벌센터'), distance: 286, time: 5 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('공과대학1'), distance: 231, time: 3 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('공과대학2'), distance: 143, time: 2 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('예술체육대학1'), distance: 114, time: 2 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('예술체육대학2'), distance: 114, time: 2 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('전자정보도서관'), distance: 231, time: 3 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('중앙도서관'), distance: 231, time: 3 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('반도체대학'), distance: 277, time: 6 },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('산학협력관1'), distance: 451, time: 9  },
  { start: locationIndexMap.get('가천관'), end: locationIndexMap.get('교육대학원'), distance: 129, time: 3 },
//교육대학원

  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('화리화리'), distance: 927, time: 16 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('호식당'), distance: 845, time: 15 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('복정로10술집'), distance: 969, time: 16 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('봉구통닭'), distance: 1300, time: 20},
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('겐코'), distance: 1000, time: 18 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('알촌'), distance: 1000, time: 18 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('티코스커피'), distance: 995, time: 16 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('태평돈가스'), distance: 874, time: 15 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('이디야커피'), distance: 676, time: 12 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('다이소'), distance: 805, time: 13 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('뚜레쥬르'), distance: 944, time: 15 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('AI공학관'), distance: 1142, time: 20 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('비전타워'), distance: 579, time: 11 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('제2학생생활관'), distance: 544, time: 11 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('글로벌센터'), distance: 407, time: 9 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('공과대학1'), distance: 407, time: 7 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('공과대학2'), distance: 618, time: 12 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('예술체육대학1'), distance: 196, time: 4 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('예술체육대학2'), distance: 196, time: 4 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('전자정보도서관'), distance: 407, time: 7 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('중앙도서관'), distance: 226, time: 4 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('반도체대학'), distance: 552, time: 11 },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('산학협력관1'), distance: 726, time: 15  },
  { start: locationIndexMap.get('교육대학원'), end: locationIndexMap.get('가천관'), distance: 129, time: 3 }
]



function floydWarshall(nodes, numVertices) {
  // 거리와 시간을 저장할 2차원 배열 초기화
  let distance = Array.from(Array(numVertices), () => Array(numVertices).fill(Infinity));
  let time = Array.from(Array(numVertices), () => Array(numVertices).fill(Infinity));

  // 각 노드에 대한 자기 자신까지의 거리와 시간은 0으로 설정
  for (let i = 0; i < numVertices; i++) {
    distance[i][i] = 0;
    time[i][i] = 0;
  }

  // 주어진 노드 간 거리와 시간으로 배열을 채움
  nodes.forEach(node => {
    let start = node.start;
    let end = node.end;
    distance[start][end] = parseInt(node.distance);
    time[start][end] = parseInt(node.time);
  });

  // 플로이드-워셜 알고리즘을 적용하여 모든 쌍의 최단 거리와 최소 시간을 계산
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (distance[i][k] + distance[k][j] < distance[i][j]) {
          distance[i][j] = distance[i][k] + distance[k][j];
        }
        if (time[i][k] + time[k][j] < time[i][j]) {
          time[i][j] = time[i][k] + time[k][j];
        }
      }
    }
  }
  return { distance, time };
}


// 플로이드-워셜 알고리즘을 실행하여 모든 쌍의 최단 거리와 최소 시간 계산
const { distance, time } = floydWarshall(nodeData, locationIndexMap.size);

function generatePermutations(elements) {
  if (elements.length === 0) return [[]];
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    const rest = generatePermutations(elements.slice(0, i).concat(elements.slice(i + 1)));
    for (let j = 0; j < rest.length; j++) {
      result.push([elements[i]].concat(rest[j]));
    }
  }

  return result;
}

function calculateTotalDistance(path, distance) {
  let totalDistance = 0;
  for (let i = 0; i < path.length - 1; i++) {
    totalDistance += distance[path[i]][path[i + 1]];
  }
  return totalDistance;
}

function calculateTotalTime(path, time) {
  let totalTime = 0;
  for (let i = 0; i < path.length - 1; i++) {
    totalTime += time[path[i]][path[i + 1]];
  }
  return totalTime;
}

function findShortestPath(startIndex, endIndex, waypointIndices, distance, time) {
  const allPaths = generatePermutations(waypointIndices);
  let shortestDistance = Infinity;
  let shortestTime = Infinity;
  let bestPath = [];

  allPaths.forEach(waypoints => {
    const fullPath = [startIndex, ...waypoints, endIndex];
    const totalDistance = calculateTotalDistance(fullPath, distance);
    const totalTime = calculateTotalTime(fullPath, time);

    if (totalDistance < shortestDistance) {
      shortestDistance = totalDistance;
      shortestTime = totalTime;
      bestPath = fullPath;
    }
  });

  return { shortestPath: bestPath, shortestDistance, shortestTime };
}

// 폼 제출 이벤트 리스너
document.getElementById('form-container').addEventListener('submit', function(event) {
  event.preventDefault();

  const startLocation = document.getElementById('start').value;
  const endLocation = document.getElementById('destination').value;
  const waypoints = Array.from(document.getElementsByClassName('waypoint-input'))
    .map(input => input.value)
    .filter(value => value !== '' && locationIndexMap.has(value));

  const startIndex = locationIndexMap.get(startLocation);
  const endIndex = locationIndexMap.get(endLocation);
  const waypointIndices = waypoints.map(waypoint => locationIndexMap.get(waypoint));

  const { shortestPath, shortestDistance, shortestTime } = findShortestPath(startIndex, endIndex, waypointIndices, distance, time);
  localStorage.setItem('shortestDistance', shortestDistance);

  const pathNames = shortestPath.map(index => nodes[index]);
  document.getElementById('distance').innerText = `DISTANCE: ${shortestDistance} m`;
  document.getElementById('duration').innerText = `🚶‍♂️PATH: ${pathNames.join(' -> ')}`;
  document.getElementById('time').innerText = `TIME: ${shortestTime} minutes`; // 추가된 시간 표시



});


