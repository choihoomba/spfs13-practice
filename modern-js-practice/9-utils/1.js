// 1. 인사 메시지 생성
function createGreeting(name = "게스트", greeting = "안녕하세요") {
  // TODO: "${greeting}, ${name}님!" 반환
}

console.log(createGreeting()); // 안녕하세요, 게스트님!
console.log(createGreeting("홍길동")); // 안녕하세요, 홍길동님!
console.log(createGreeting("홍길동", "Hello")); // Hello, 홍길동님!
