// 2. Arrow Function에서의 this 사용을 이해해보세요

// TODO: 아래 두 결과가 다른지 이유를 설명하세요
// 화살표 함수는 바깥 함수의 this를 그대로 사용하기 때문에 person 객체의 name을 사용할 수 있다.
const person = {
  name: "홍길동",
  greet: function () {
    // 화살표 함수 안의 this → 바깥 greet 함수의 this → person 객체
    const say = () => {
      console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    };
    say();
  },
};

person.greet(); // 안녕하세요, 저는 홍길동입니다.

const person2 = {
  name: "김철수",
  greet: () => {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  },
};
person2.greet(); // 안녕하세요, 저는 undefined입니다.
