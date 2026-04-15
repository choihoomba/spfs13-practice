// 1. 배열 Destructuring
const colors = ["red", "green", "blue", "yellow"];

// TODO: 첫 번째와 세 번째 색만 추출
const [first, , third] = colors;

console.log(first, third); // red blue

// 2. 객체 Destructuring
const user = {
  id: 1,
  name: "홍길동",
  email: "hong@example.com",
  age: 25,
};

// TODO: name과 age만 추출
const { name, age } = user;

console.log(name, age); // 홍길동 25

// 3. 변수명 변경
// TODO: name을 userName으로, age를 userAge로
const { name: userName, age: userAge } = user;

console.log(userName, userAge); // 홍길동 25
