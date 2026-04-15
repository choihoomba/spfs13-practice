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

// TODO: var 를 let으로 바꾸면 어떻게 되나요?
