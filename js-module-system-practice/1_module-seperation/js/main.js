// js/main.js
// 메인 실행 파일 — 여기서 다른 모듈들을 import 하여 사용합니다.

// TODO 1: utils/math.js에서 formatPrice, calculateDiscount를 import 하세요.
// hint: import { 함수1, 함수2 } from './경로/파일.js';
import { formatPrice, calculateDiscount } from "./utils/math.js";
// TODO 2: data/products.js에서 products를 import 하세요.
import { products } from "./data/products.js";
// TODO 3: ui/render.js에서 renderProduct, renderProductList를 import 하세요.
import { renderProduct, renderProductList } from "./ui/render.js";
// ==========================================
// 유틸: 로그 출력 헬퍼 (수정하지 마세요)
// ==========================================

function log(areaId, message) {
  const el = document.getElementById(areaId);
  if (el.textContent === "테스트 버튼을 눌러 결과를 확인하세요.") {
    el.textContent = "";
  }
  el.textContent += message + "\n";
}

function clearLog(areaId) {
  document.getElementById(areaId).textContent =
    "테스트 버튼을 눌러 결과를 확인하세요.";
}

// ==========================================
// 테스트 함수들 (수정하지 마세요)
// ==========================================

// 섹션 1: math.js export + import 확인
function test1() {
  try {
    log("log1", "formatPrice(1200000) 호출 중...");
    const result = formatPrice(1200000);
    log("log1", `결과: ${result}`);

    log("log1", "\ncalculateDiscount(100000, 10) 호출 중...");
    const discounted = calculateDiscount(100000, 10);
    log("log1", `결과: ${discounted}`);

    log("log1", "\n할인 가격 포맷팅:");
    log(
      "log1",
      `  89,000원의 20% 할인 → ${formatPrice(calculateDiscount(89000, 20))}`,
    );

    log("log1", "\nmath.js export + import 성공!");
  } catch (e) {
    log("log1", `오류: ${e.message}`);
    log(
      "log1",
      "\nhint: math.js에 export를 붙이고, main.js에서 import 했는지 확인하세요.",
    );
  }
}

// 섹션 2: products.js 확인
function test2() {
  try {
    log("log2", "products 데이터 확인 중...");
    log("log2", `  상품 개수: ${products.length}개`);
    log("log2", `  첫 번째 상품: ${products[0].name}`);
    log("log2", `  마지막 상품: ${products[products.length - 1].name}`);
    log("log2", "\n전체 상품 목록:");
    products.forEach((p) => {
      log("log2", `  ${p.id}. ${p.name} (${p.category})`);
    });

    log("log2", "\nproducts.js export + import 성공!");
  } catch (e) {
    log("log2", `오류: ${e.message}`);
    log(
      "log2",
      "\nhint: products.js에서 export를 붙이고, main.js에서 import 했는지 확인하세요.",
    );
  }
}

// 섹션 3: render.js 확인
function test3() {
  try {
    log("log3", "renderProduct 테스트...");
    const text = renderProduct(products[0]);
    log("log3", `  결과: ${text}`);

    log("log3", "\nrenderProductList로 카드 표시 중...");
    renderProductList("product-grid", products);
    log("log3", "  카드가 위에 표시되었나요?");

    log("log3", "\nrender.js export + import 성공!");
  } catch (e) {
    log("log3", `오류: ${e.message}`);
    log(
      "log3",
      "\nhint: render.js에서 math.js를 import하고, 함수에 export를 붙였는지 확인하세요.",
    );
    log(
      "log3",
      "그리고 main.js에서 render.js의 함수를 import 했는지도 확인하세요.",
    );
  }
}

// 함수들을 전역에 등록 (HTML 버튼에서 호출할 수 있도록)
window.test1 = test1;
window.test2 = test2;
window.test3 = test3;
window.clearLog = clearLog;
