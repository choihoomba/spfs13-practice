// js/utils/math.js
// 계산 관련 유틸리티 함수 모듈

// 가격을 "1,200,000원" 형태로 변환하는 함수
export function formatPrice(price) {
  return price.toLocaleString() + "원";
}

// 할인 가격을 계산하는 함수 (예: 10% 할인 → percent에 10 전달)
export function calculateDiscount(price, percent) {
  return price - price * (percent / 100);
}
