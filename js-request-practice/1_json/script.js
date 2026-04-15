console.log("=== JSON 다루기 연습 ===\n");

// ==========================================
// 레벨 1: JSON.stringify() - 객체를 JSON 문자열로
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: JSON.stringify() ===");

  const user = {
    name: "홍길동",
    age: 30,
    email: "hong@example.com",
    isActive: true,
    skills: ["JavaScript", "Python", "React"],
  };

  // TODO: user 객체를 JSON 문자열로 변환하세요
  // hint: JSON.stringify()를 사용합니다
  const json = JSON.stringify(user); // <- 여기에 코드를 작성하세요

  // TODO: 변환된 JSON 문자열의 타입을 콘솔에 출력하세요
  console.log("원본 객체 타입:", typeof user);
  // 예상 출력: "object"

  // 아래 주석을 풀고 JSON 문자열의 타입을 확인하세요
  console.log("JSON 문자열 타입:", typeof json);
  // 예상 출력: "string"

  // console.log("JSON 문자열:", json);
  // 예상 출력: '{"name":"홍길동","age":30,"email":"hong@example.com","isActive":true,"skills":["JavaScript","Python","React"]}'

  // TODO: JSON.stringify()의 세 번째 인자에 2를 넣어 보기 좋게 포맷팅하세요
  // hint: JSON.stringify(객체, null, 들여쓰기칸수)
  const prettyJson = JSON.stringify(user, null, 2); // <- 여기에 코드를 작성하세요

  console.log("보기 좋은 JSON:\n", prettyJson);

  // 화면에 결과 표시 (TODO를 완성하면 자동으로 화면에 반영됩니다)
  document.getElementById("section1-object").textContent =
    `typeof: ${typeof user}\n${Object.entries(user)
      .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
      .join("\n")}`;
  document.getElementById("section1-json").textContent =
    `typeof: ${typeof json}\n${json}`;
  document.getElementById("section1-pretty").textContent = prettyJson;

  console.log("JSON.stringify() 완료");
}

// ==========================================
// 레벨 2: JSON.parse() - JSON 문자열을 객체로
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: JSON.parse() ===");

  // 서버에서 받았다고 가정하는 JSON 문자열
  const jsonString =
    '{"name":"홍길동","age":30,"email":"hong@example.com","isActive":true}';

  // TODO: jsonString을 자바스크립트 객체로 변환하세요
  // hint: JSON.parse()를 사용합니다
  const user = JSON.parse(jsonString); // <- 여기에 코드를 작성하세요

  // TODO: 변환된 객체의 타입을 확인하세요
  console.log("파싱된 객체 타입:", typeof user);
  // 예상 출력: "object"

  // TODO: 객체의 각 속성에 접근해 출력하세요
  console.log("이름:", user.name);
  // 예상 출력: "홍길동"
  console.log("나이:", user.age);
  // 예상 출력: 30
  console.log("이메일:", user.email);
  // 예상 출력: "hong@example.com"
  console.log("활성 여부:", user.isActive);
  // 예상 출력: true

  // 화면에 결과 표시
  const resultEl = document.getElementById("section2-result");
  resultEl.innerHTML = `
    <strong>이름:</strong> ${user.name || "(TODO 완성 필요)"}<br>
    <strong>나이:</strong> ${user.age || "(TODO 완성 필요)"}<br>
    <strong>이메일:</strong> ${user.email || "(TODO 완성 필요)"}<br>
    <strong>활성 여부:</strong> ${user.isActive !== undefined ? user.isActive : "(TODO 완성 필요)"}<br>
    <strong>typeof:</strong> ${typeof user}
  `;

  console.log("JSON.parse() 완료");
}

// ==========================================
// 레벨 3: 배열 JSON 변환
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 배열 JSON 변환 ===");

  const users = [
    { id: 1, name: "김철수", role: "개발자" },
    { id: 2, name: "이영희", role: "디자이너" },
    { id: 3, name: "박민수", role: "기획자" },
  ];

  // TODO: users 배열을 JSON 문자열로 변환하세요
  const json = JSON.stringify(users); // <- 여기에 코드를 작성하세요

  console.log("배열 → JSON:", json);
  // 예상 출력: '[{"id":1,"name":"김철수","role":"개발자"},{"id":2,"name":"이영희","role":"디자이너"},{"id":3,"name":"박민수","role":"기획자"}]'

  // TODO: 변환된 JSON 문자열을 다시 배열로 파싱하세요
  const parsed = JSON.parse(json); // <- 여기에 코드를 작성하세요

  console.log("JSON → 배열:", parsed);
  // 예상 출력: 원래 배열과 동일한 구조

  // TODO: 파싱된 배열의 첫 번째 요소의 name 속성을 출력하세요
  console.log("첫 번째 사용자:", parsed[0].name);
  // 예상 출력: "김철수"

  // TODO: 파싱된 배열의 길이를 출력하세요
  console.log("사용자 수:", parsed.length);
  // 예상 출력: 3

  // 화면에 사용자 카드 표시 (TODO를 완성하면 카드가 나타납니다)
  const usersEl = document.getElementById("section3-users");
  const initials = ["철", "영", "민"];
  if (parsed.length > 0 && parsed[0].name) {
    usersEl.innerHTML = parsed
      .map(
        (u, i) => `
      <div class="user-card">
        <div class="user-avatar">${initials[i] || "?"}</div>
        <div class="user-info">
          <div class="name">${u.name}</div>
          <div class="detail">ID: ${u.id} · ${u.role}</div>
        </div>
      </div>
    `,
      )
      .join("");
  } else {
    usersEl.innerHTML =
      '<p style="color: #e74c3c;">TODO를 완성하면 사용자 카드가 표시됩니다.</p>';
  }

  document.getElementById("section3-json").textContent =
    parsed.length > 0
      ? JSON.stringify(parsed, null, 2)
      : "(TODO를 완성하면 JSON이 표시됩니다)";

  console.log("배열 JSON 변환 완료");
}

// ==========================================
// 레벨 4: 중첩 객체 JSON 다루기
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 중첩 객체 JSON 다루기 ===");

  const data = {
    user: {
      name: "홍길동",
      address: {
        city: "서울",
        details: {
          street: "강남대로",
          zipcode: "12345",
        },
      },
    },
    orders: [
      { id: 1, product: "노트북", price: 1200000, category: "전자기기" },
      { id: 2, product: "마우스", price: 30000, category: "주변기기" },
      { id: 3, product: "키보드", price: 89000, category: "주변기기" },
    ],
  };

  // TODO: data 객체를 JSON 문자열로 변환한 후 다시 파싱하세요
  // (서버로 보냈다가 다시 받은 상황을 시뮬레이션)
  const json = JSON.stringify(data); // <- JSON.stringify()로 변환하세요
  const parsed = JSON.parse(json); // <- JSON.parse()로 파싱하세요

  // TODO: 파싱된 객체에서 중첩된 속성에 접근하세요
  // 도시 이름을 출력하세요
  console.log("도시:", parsed.user.address.city);
  // 예상 출력: "서울"

  // 도로명을 출력하세요
  console.log("도로:", parsed.user.address.details.street);
  // 예상 출력: "강남대로"

  // 첫 번째 주문의 상품명을 출력하세요
  console.log("첫 번째 주문:", parsed.orders[0].product);
  // 예상 출력: "노트북"

  // TODO: 전체 주문 금액 합계를 계산하세요
  // hint: reduce를 사용하거나 반복문을 사용하세요
  const totalPrice = parsed.orders.reduce((acc, order) => {
    return acc + order.price;
  }, 0);

  // <- 여기에 코드를 작성하세요
  console.log("총 주문 금액:", totalPrice.toLocaleString() + "원");
  // 예상 출력: "1,319,000원"

  // 화면에 결과 표시 (TODO를 완성하면 자동 반영됩니다)
  if (parsed.user) {
    document.getElementById("section4-order").textContent =
      `주문자: ${parsed.user.name}\n주문 수: ${parsed.orders.length}건\n총 금액: ${totalPrice.toLocaleString()}원`;

    document.getElementById("section4-address").textContent =
      `도시: ${parsed.user.address.city}\n도로: ${parsed.user.address.details.street}\n우편번호: ${parsed.user.address.details.zipcode}`;

    const productsEl = document.getElementById("section4-products");
    productsEl.innerHTML = parsed.orders
      .map(
        (o) => `
      <div class="product-item">
        <div class="product-name">${o.product}</div>
        <div class="product-price">${o.price.toLocaleString()}원</div>
        <div class="product-category">${o.category}</div>
      </div>
    `,
      )
      .join("");
  } else {
    document.getElementById("section4-order").textContent =
      "TODO를 완성하면 주문 정보가 표시됩니다.";
    document.getElementById("section4-address").textContent =
      "TODO를 완성하면 주소 정보가 표시됩니다.";
  }

  console.log("중첩 객체 JSON 다루기 완료");
}

// ==========================================
// 레벨 5: JSON 변환 주의사항
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: JSON 변환 주의사항 ===");

  // 주의사항 1: Date 객체
  const dataWithDate = { createdAt: new Date() };

  // TODO: dataWithDate를 JSON.stringify() 후 JSON.parse()로 변환하세요
  const parsedDate = JSON.parse(JSON.stringify(dataWithDate)); // <- 여기에 코드를 작성하세요

  // TODO: 원본과 변환 후의 createdAt 타입을 비교하세요
  console.log("원본 Date 타입:", typeof dataWithDate.createdAt);
  // 예상 출력: "object" (Date 객체)
  console.log("변환 후 타입:", typeof parsedDate.createdAt);
  // 예상 출력: "string" ← Date가 문자열이 됨!

  // 주의사항 2: 함수
  const dataWithFunc = {
    name: "홍길동",
    greet: function () {
      return "안녕하세요!";
    },
  };

  // TODO: dataWithFunc를 JSON.stringify() 후 JSON.parse()로 변환하세요
  const parsedFunc = JSON.parse(JSON.stringify(dataWithFunc)); // <- 여기에 코드를 작성하세요
  // TODO: 함수가 변환 후 어떻게 되는지 확인하세요
  console.log("원본 greet:", typeof dataWithFunc.greet);
  // 예상 출력: "function"
  console.log("변환 후 greet:", parsedFunc.greet);
  // 예상 출력: undefined ← 함수가 사라짐!

  // 주의사항 3: undefined
  const dataWithUndef = { name: "홍길동", age: undefined };

  // TODO: dataWithUndef를 JSON.stringify() 후 JSON.parse()로 변환하세요
  const parsedUndef = JSON.parse(JSON.stringify(dataWithUndef)); // <- 여기에 코드를 작성하세요

  // TODO: undefined 속성이 변환 후 어떻게 되는지 확인하세요
  console.log("원본 속성들:", Object.keys(dataWithUndef));
  // 예상 출력: ["name", "age"]
  console.log("변환 후 속성들:", Object.keys(parsedUndef));
  // 예상 출력: ["name"] ← age 속성 자체가 사라짐!

  // 화면에 결과 표시
  const beforeEl = document.getElementById("section5-before");
  beforeEl.textContent = [
    `[Date] typeof createdAt: ${typeof dataWithDate.createdAt}`,
    `  값: ${dataWithDate.createdAt}`,
    "",
    `[함수] typeof greet: ${typeof dataWithFunc.greet}`,
    `  실행 결과: ${dataWithFunc.greet()}`,
    "",
    `[undefined] 속성 목록: ${Object.keys(dataWithUndef).join(", ")}`,
    `  age 값: ${dataWithUndef.age}`,
  ].join("\n");

  const afterEl = document.getElementById("section5-after");
  if (parsedDate.createdAt) {
    afterEl.textContent = [
      `[Date] typeof createdAt: ${typeof parsedDate.createdAt}`,
      `  값: ${parsedDate.createdAt}`,
      "",
      `[함수] greet: ${parsedFunc.greet}`,
      `  ← 함수가 사라졌습니다!`,
      "",
      `[undefined] 속성 목록: ${Object.keys(parsedUndef).join(", ")}`,
      `  ← age 속성이 제거되었습니다!`,
    ].join("\n");
  } else {
    afterEl.textContent = "TODO를 완성하면 변환 후 결과가 표시됩니다.";
  }

  console.log("JSON 변환 주의사항 확인 완료");
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
  console.log("버튼 개수:", document.getElementsByTagName("button").length);
  console.log("\n각 테스트 버튼을 클릭하여 JSON 다루기를 연습하세요!\n");
});
