// 3. 조건에 따라 다른 콜백 실행
function processNumber(num, isEvenCallback, isOddCallback) {
  // TODO: 짝수면 isEvenCallback, 홀수면 isOddCallback
  if (num % 2 === 0) {
    isEvenCallback(num);
  } else {
    isOddCallback(num);
  }
}

processNumber(
  4,
  function (n) {
    console.log(n + "은 짝수");
  },
  function (n) {
    console.log(n + "은 홀수");
  },
);
// 4은 짝수
