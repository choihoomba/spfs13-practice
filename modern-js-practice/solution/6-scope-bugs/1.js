// Bug 1
function calculateTotal() {
  if (true) {
    var discount = 0.1;
  }

  let price = 1000;
  let total = price - price * discount;

  return total;
}
console.log(calculateTotal());
// TODO: 왜 이 코드가 작동하나요?
// var 는 함수 스코프이기 때문에 if 문 안에서 선언된 변수가 함수 스코프 안에서 선언된 변수이기 때문에 함수 스코프 안에서 선언된 변수를 사용할 수 있습니다.
// TODO: var 를 let으로 바꾸면 어떻게 되나요?
// let 는 블록 스코프이기 때문에 total 계산 시 사용된 discount 변수를 찾을 수 없어 reference error 가 발생합니다.
