/*
Codelion JS ch2. Javascript로 만드는 [로또 번호 추첨기]
*/
var lottoNum = []; // js의 배열은 push function 쓸 수 있음
var num = 0;

while (lottoNum.length < 6) {
  num = parseInt(Math.random() * 45 + 1); //1이상 46미만의 랜덤 수를 Int type으로 파싱
  if (lottoNum.indexOf(num) == -1) lottoNum.push(num); // .indexOf attribute를 활용하여 'num'이 중복인지 확인할 수 있음
}

// lottoNum.sort(); js는 사전순 정렬을 지원함
lottoNum.sort((a, b) => a - b); // greater 정렬

for (var i = 0; i < 6; i++) {
  document.write("<div class = 'ball ball1'>" + lottoNum[i] + "<div>");
}
