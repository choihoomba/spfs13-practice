// Bug 5
greet(); // 정상 작동

function greet() {
  console.log("안녕하세요!");
}

sayHi(); // Uncaught TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

// TODO: 왜 greet()는 되고 sayHi()는 안 될까요?
