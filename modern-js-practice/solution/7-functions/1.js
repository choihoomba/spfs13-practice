// 1. 이름을 받아서 인사하는 함수 (함수 선언문)
function greetUser(name) {
  // TODO: "안녕하세요, [name]님!" 반환
  return `안녕하세요, ${name}님!`;
}

console.log(greetUser("홍길동")); // 안녕하세요, 홍길동님!

// 2. 두 숫자 중 큰 수를 반환하는 함수 (함수 표현식)
const getMax = function (a, b) {
  // TODO: 큰 수 반환
  return Math.max(a, b);
};

console.log(getMax(10, 20)); // 20

// 3. 숫자가 짝수인지 확인하는 함수
function isEven(num) {
  // TODO: 짝수면 true, 홀수면 false
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
