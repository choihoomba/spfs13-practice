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
// greet 함수는 함수 선언문으로 정의되어 호이스팅 시 함수내용도 포함되어 호출가능하지만
// sayHi 함수는 함수 표현식으로 정의되어 호이스팅 시 함수내용은 포함되지 않아 호출불가능합니다.
