// js/utils/math.js
// 계산 관련 유틸리티 함수 모듈

// TODO: 아래 두 함수에 export를 붙여서 다른 파일에서 사용할 수 있게 만드세요.
// hint: 함수 선언 앞에 export 키워드를 추가하면 됩니다.
// 예시: export function 함수이름(매개변수) { ... }

// 가격을 "1,200,000원" 형태로 변환하는 함수
export function formatPrice(price) {
  return price.toLocaleString() + "원";
}

// 할인 가격을 계산하는 함수 (예: 10% 할인 → percent에 10 전달)
export function calculateDiscount(price, percent) {
  return price - price * (percent / 100);
}
