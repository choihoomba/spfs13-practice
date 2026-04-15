// main.js
// 메인 실행 파일 — 직접 만든 모듈과 외부 패키지를 함께 사용합니다.
// 실행 방법: 터미널에서 node main.js

// TODO 1: date-utils.js에서 getToday, getDateAfter, getDateBefore를 import 하세요.
// hint: 우리가 만든 모듈이므로 경로(./)가 필요합니다!
// 예시: import { 함수1, 함수2 } from './파일.js';

// TODO 2: fake-data.js에서 createFakeUser, createFakeProduct, createFakeUsers를 import 하세요.
// hint: import { 함수1, 함수2, 함수3 } from './fake-data.js';

// ==========================================
// 테스트 코드 (수정하지 마세요)
// ==========================================

// 섹션 3: dayjs 테스트
console.log("=== dayjs 테스트 ===");
console.log(`오늘 날짜: ${getToday()}`);
console.log(`100일 뒤: ${getDateAfter(100)}`);
console.log(`7일 전: ${getDateBefore(7)}`);

console.log("");

// 섹션 4: faker 테스트
console.log("=== faker 테스트 ===");

console.log("--- 가짜 유저 1명 ---");
const user = createFakeUser();
console.log(`  이름: ${user.name}`);
console.log(`  이메일: ${user.email}`);
console.log(`  전화번호: ${user.phone}`);
console.log(`  아바타: ${user.avatar}`);

console.log("");

console.log("--- 가짜 상품 1개 ---");
const product = createFakeProduct();
console.log(`  상품명: ${product.name}`);
console.log(`  가격: ${product.price}원`);
console.log(`  카테고리: ${product.category}`);
console.log(`  설명: ${product.description}`);

console.log("");

// 섹션 5: 모듈 조합 테스트
console.log("=== 모듈 조합 테스트 ===");
console.log("가짜 유저 3명의 가입일을 생성합니다:");

const users = createFakeUsers(3);
users.forEach((u, i) => {
  console.log(`  ${i + 1}. ${u.name} (${u.email}) — 가입일: ${getToday()}`);
});

console.log("");
console.log("전체 테스트 완료!");
