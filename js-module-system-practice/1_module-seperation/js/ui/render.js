// js/ui/render.js
// 화면 표시(UI) 관련 함수 모듈

// TODO 1: math.js에서 formatPrice 함수를 import 하세요.
// hint: import { formatPrice } from '../utils/math.js';
import { formatPrice } from "../utils/math.js";
// TODO 2: 아래 두 함수에 export를 붙이세요.

// 상품 하나를 "노트북 - 1,200,000원" 형태의 문자열로 만드는 함수
export function renderProduct(product) {
  return `${product.name} - ${formatPrice(product.price)}`;
}

// 상품 목록을 카드 형태로 화면에 표시하는 함수
export function renderProductList(targetId, productList) {
  const el = document.getElementById(targetId);
  el.innerHTML = productList
    .map(
      (p) => `
    <div class="product-card loaded">
      <div class="name">${p.name}</div>
      <div class="price">${formatPrice(p.price)}</div>
      <div class="category">${p.category}</div>
    </div>
  `,
    )
    .join("");
}
