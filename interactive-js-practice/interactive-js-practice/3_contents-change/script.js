console.log("=== 콘텐츠 변경 연습 ===\n");

// ==========================================
// 레벨 1: textContent 읽기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: textContent 읽기 ===");

  const greeting = document.getElementById("greeting");

  // TODO: greeting 요소의 textContent를 콘솔에 출력하세요
  // console.log("greeting textContent:", );
  // 예상 출력: "안녕하세요 코드잇 여러분!"
  // (HTML 태그(<strong>)는 제외되고 순수 텍스트만 나옵니다)

  const hiddenText = document.getElementById("hidden-text");

  // TODO: hiddenText 요소의 textContent를 콘솔에 출력하세요
  // console.log("hiddenText textContent:", );
  // 예상 출력: 숨겨진 텍스트(display: none)도 포함되어 출력됩니다

  // TODO: hiddenText 요소의 innerText를 콘솔에 출력하고, textContent와 비교해보세요
  // console.log("hiddenText innerText:", );
  // 예상 출력: innerText는 화면에 보이는 텍스트만 출력합니다

  console.log("textContent 읽기 완료");
}

// ==========================================
// 레벨 2: textContent 쓰기
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: textContent 쓰기 ===");

  // TODO: #avatar 요소의 textContent를 "J"로 변경하세요
  // const avatar = document.getElementById("avatar");

  // TODO: #user-name 요소의 textContent를 "김코딩"으로 변경하세요
  // const userName = document.getElementById("user-name");

  // TODO: #user-bio 요소의 textContent를 "JavaScript를 열심히 배우고 있습니다!"로 변경하세요
  // const userBio = document.getElementById("user-bio");

  // TODO: #counter 요소의 textContent를 "현재 카운트: 42"로 변경하세요
  // const counter = document.getElementById("counter");

  // 아래 줄의 주석을 풀어 결과를 확인하세요
  // console.log("이름:", userName.textContent);
  // console.log("소개:", userBio.textContent);

  console.log("textContent 쓰기 완료");
}

// ==========================================
// 레벨 3: innerHTML 읽기
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: innerHTML 읽기 ===");

  const noticeContent = document.getElementById("notice-content");

  // TODO: noticeContent 요소의 innerHTML을 콘솔에 출력하세요
  // console.log("innerHTML:", );
  // 예상 출력: HTML 태그(<p>, <strong>, <em>)가 포함된 문자열이 출력됩니다

  // TODO: noticeContent 요소의 textContent도 출력하고, innerHTML과 비교해보세요
  // console.log("textContent:", );
  // 예상 출력: HTML 태그 없이 순수 텍스트만 출력됩니다

  console.log("innerHTML 읽기 완료");
}

// ==========================================
// 레벨 4: innerHTML 쓰기
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: innerHTML 쓰기 ===");

  const productList = document.getElementById("product-list");

  // TODO: productList의 innerHTML을 아래 상품 3개로 교체하세요
  // 상품 1: 이름 "노트북", 가격 "1,200,000원", 설명 "고성능 노트북"
  // 상품 2: 이름 "키보드", 가격 "89,000원", 설명 "기계식 키보드"
  // 상품 3: 이름 "마우스", 가격 "45,000원", 설명 "무선 마우스"
  //
  // hint: 아래와 같은 HTML 구조를 사용하세요 (템플릿 리터럴 `` 활용)
  // <div class="product">
  //   <div class="product-name">상품이름</div>
  //   <div class="product-price">가격</div>
  //   <div class="product-desc">설명</div>
  // </div>

  console.log("innerHTML 쓰기 완료");
}

// ==========================================
// 레벨 5: textContent vs innerHTML 차이 비교
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: textContent vs innerHTML 비교 ===");

  const resultText = document.getElementById("result-text");
  const resultHtml = document.getElementById("result-html");

  const htmlString = "<strong>굵은 글씨</strong>와 <em>기울임 글씨</em>";

  // TODO: resultText 요소에 htmlString을 textContent로 설정
  // (HTML 태그가 문자 그대로 화면에 보여야 합니다)

  // TODO: resultHtml 요소에 htmlString을 innerHTML로 설정
  // (HTML 태그가 해석되어 굵은 글씨, 기울임 글씨로 보여야 합니다)

  // 아래 주석을 풀어 두 결과를 비교해보세요
  // console.log("textContent 결과:", resultText.textContent);
  // console.log("innerHTML 결과:", resultHtml.innerHTML);

  console.log("비교 완료");
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");
  console.log(
    "greeting textContent:",
    document.getElementById("greeting").textContent,
  );
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
  console.log("버튼 개수:", document.getElementsByTagName("button").length);
});
