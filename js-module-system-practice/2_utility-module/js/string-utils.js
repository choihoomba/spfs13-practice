// js/string-utils.js
// 문자열 유틸리티 모듈 — 대표 함수는 default, 나머지는 named export 하세요.

// TODO 1: formatName 함수를 export default 하세요. (이 파일의 "메인 보컬")
// hint: export default function formatName(...) { ... }

// TODO 2: 나머지 두 함수에 export를 붙이세요. (named export)
// hint: export function toUpperCase(...) { ... }

// 대표 함수: 성과 이름을 합쳐서 "홍길동" 형태로 만드는 함수
function formatName(firstName, lastName) {
  return `${lastName}${firstName}`;
}

// 보조 함수: 문자열을 대문자로 변환
function toUpperCase(str) {
  return str.toUpperCase();
}

// 보조 함수: 문자열 끝에 느낌표를 추가
function addExclamation(str) {
  return str + "!";
}
