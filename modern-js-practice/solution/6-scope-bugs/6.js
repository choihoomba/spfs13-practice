// Bug 6
var x = 1;

function outer() {
  console.log(x); // undefined (왜 1이 아닐까?)

  if (false) {
    var x = 2;
  }
}

outer();

// TODO: if문이 실행되지 않는데 왜 x가 undefined일까요?
// var 는 함수 스코프이기 때문에 outer 함수 내에 선언된 x 변수를 참조할 수 있지만,
// 호이스팅 시 if 문안에 선언된 x 변수의 초기값이 undefined 로 설정되어 있어 undefined 를 출력합니다.
// TODO: var를 let으로 바꾸면 어떻게 될까요?
// let 은 블록스코프이기 때문에 if 문 내에서만 호이스팅이 발생하고 외부에서는 호이스팅이 발생하지 않아 전역변수 x를 참조하여 1을 출력합니다.
