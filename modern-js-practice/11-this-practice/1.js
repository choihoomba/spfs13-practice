// 1. 다음 코드의 출력을 예측하세요

const user = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요, " + this.name + "님");
  },
};

user.greet(); // 출력: 안녕하세요, 홍길동님

let greet = user.greet;
greet(); // 출력: 안녕하세요, undefined님

// TODO: 왜 결과가 다른지 설명하고, 두 번째도 '홍길동'이 나오게 수정하세요
