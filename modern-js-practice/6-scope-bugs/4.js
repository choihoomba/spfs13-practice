// Bug 4
function test1() {
  console.log(name); // undefined
  var name = "홍길동";
}

function test2() {
  console.log(name); // ReferenceError
  let name = "홍길동";
}

console.log("test1", test1());
console.log("test2", test2());
// TODO: 왜 결과가 다를까요?

// TODO: 각각 어떻게 동작하나요?
