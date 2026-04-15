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
// test1 함수는 name 출력 시 var 로 선언된 변수를 참조할 수 있지만, test2 함수는 let 로 선언된 변수를 참조할 수 없습니다.
// TODO: 각각 어떻게 동작하나요?
// test1 은 undefined 를 출력하고, test2 는 ReferenceError 를 출력합니다.
