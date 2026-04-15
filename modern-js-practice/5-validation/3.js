// 레벨3
// 운전 가능 여부 판단
function canDrive(age, hasLicense, hasVision) {
  // TODO: 조건
  // 1. 18세 이상
  // 2. 면허 있음
  // 3. 시력 검사 통과
  // 모두 만족해야 운전 가능
  // AND 연산자 활용
}
console.log("=== 운전 가능 ===");
console.log(canDrive(20, true, true)); // true
console.log(canDrive(17, true, true)); // false
console.log(canDrive(20, false, true)); // false

// 할인 적용 여부
function getDiscount(age, isMember, isHoliday) {
  // TODO: 조건 (하나라도 만족하면 할인)
  // 1. 65세 이상
  // 2. 멤버십 회원
  // 3. 공휴일
  // OR 연산자 활용
}

console.log("=== 할인 적용 ===");
console.log(getDiscount(70, false, false)); // true
console.log(getDiscount(30, true, false)); // true
console.log(getDiscount(30, false, false)); // false

// 예상 출력
// === 운전 가능 ===
// true
// false
// false
// === 할인 적용 ===
// true
// true
// false
