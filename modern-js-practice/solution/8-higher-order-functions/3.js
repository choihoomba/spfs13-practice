// 3. 함수 생성 팩토리
function createValidator(minLength) {
  // TODO: 문자열 길이를 체크하는 함수 반환
  return function (str) {
    // str.length >= minLength이면 true
    return str.length >= minLength;
  };
}

const validate6 = createValidator(6);
const validate10 = createValidator(10);

console.log(validate6("hello")); // false
console.log(validate6("hello123")); // true
console.log(validate10("hello123")); // false
