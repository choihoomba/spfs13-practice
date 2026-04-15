// 1. 다음 코드의 출력을 예측하세요

const user = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요, " + this.name + "님");
  },
};

user.greet(); // 출력: ?

let greet = user.greet;
greet(); // 출력: ?

// TODO: 왜 결과가 다른지 설명하고, 두 번째도 '홍길동'이 나오게 수정하세요
// this는 함수가 호출된 위치에 따라 결정된다.
// 두 번째 greet 함수는 전역 스코프에서 호출되었기 때문에 this는 전역 객체를 가리킨다.
// 전역 객체는 브라우저에서는 window, Node.js에서는 global을 가리킨다.
// 두 번째 greet 함수를 수정하려면 다음과 같이 수정하면 된다.
// greet = user.greet.bind(user);
// greet(); // 출력: 안녕하세요, 홍길동님
