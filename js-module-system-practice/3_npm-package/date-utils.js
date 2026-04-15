// date-utils.js
// 날짜 유틸리티 모듈 — dayjs 패키지를 사용합니다.

// TODO 1: dayjs 패키지를 import 하세요.
// hint: 설치한 패키지는 경로(./) 없이 이름만 씁니다.
// 예시: import dayjs from 'dayjs';

// 오늘 날짜를 "2025년 07월 15일" 형태로 반환하는 함수
// TODO 2: 아래 함수에 export를 붙이세요. (named export)
function getToday() {
  return dayjs().format("YYYY년 MM월 DD일");
}

// N일 뒤의 날짜를 "2025-07-15" 형태로 반환하는 함수
// TODO 3: 아래 함수에 export를 붙이세요. (named export)
function getDateAfter(days) {
  return dayjs().add(days, "day").format("YYYY-MM-DD");
}

// N일 전의 날짜를 "2025-07-15" 형태로 반환하는 함수
// TODO 4: 아래 함수에 export를 붙이세요. (named export)
function getDateBefore(days) {
  return dayjs().subtract(days, "day").format("YYYY-MM-DD");
}
