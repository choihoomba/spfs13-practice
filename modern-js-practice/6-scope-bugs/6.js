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

// TODO: var를 let으로 바꾸면 어떻게 될까요?
