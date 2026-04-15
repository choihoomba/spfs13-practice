// 7. 함수를 반환하는 함수
function createMultiplier(multiplier) {
  // TODO: 숫자를 받아서 multiplier를 곱한 값을 반환하는 함수 반환
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 8. 조건부 함수 생성
function createGreeting(language) {
  // TODO: language에 따라 다른 인사 함수 반환
  // 'ko': '안녕하세요'
  // 'en': 'Hello'
  // 'ja': 'こんにちは'
  if (language === "ko") {
    return function (name) {
      return `안녕하세요, ${name}님`;
    };
  } else if (language === "en") {
    return function (name) {
      return `Hello, ${name}`;
    };
  } else if (language === "ja") {
    return function (name) {
      return `こんにちは, ${name}さん`;
    };
  }
}

const koreanGreet = createGreeting("ko");
const englishGreet = createGreeting("en");

console.log(koreanGreet("홍길동")); // 안녕하세요, 홍길동님
console.log(englishGreet("John")); // Hello, John
