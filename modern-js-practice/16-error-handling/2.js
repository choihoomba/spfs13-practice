// 2. 안전한 나눗셈
function safeDivide(a, b) {
  // TODO: 0으로 나누기 체크
  // 0으로 나누면 에러 던지기
  // try-catch로 처리

  return a / b;
}

console.log(safeDivide(10, 2)); // 5

console.log(safeDivide(10, 0));
// 에러 발생: 0으로 나눌 수 없습니다.
// null
