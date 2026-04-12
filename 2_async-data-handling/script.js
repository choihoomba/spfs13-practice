console.log("=== 비동기 데이터 처리 ===\n");

// ==========================================
// 🔧 가짜 API 함수 (수정하지 마세요!)
// ==========================================

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject("잘못된 사용자 ID: " + userId);
        return;
      }
      resolve({
        id: userId,
        name: "홍길동" + userId,
        email: "user" + userId + "@example.com",
      });
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject("주문을 찾을 수 없습니다");
        return;
      }
      resolve([
        { id: 501, item: "노트북", price: 1200000 },
        { id: 502, item: "마우스", price: 35000 },
        { id: 503, item: "키보드", price: 89000 },
      ]);
    }, 1000);
  });
}

function fetchOrderDetail(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: orderId,
        item: "노트북",
        price: 1200000,
        status: "배송완료",
        date: "2025-01-15",
      });
    }, 500);
  });
}

// ==========================================
// 🔧 공통 유틸 함수
// ==========================================

function addLog(logId, message) {
  const logEl = document.getElementById(logId);
  const timestamp = new Date().toLocaleTimeString();
  logEl.textContent += "[" + timestamp + "] " + message + "\n";
  console.log(message);
}

function clearLog(logId) {
  document.getElementById(logId).textContent = "";
}

// ==========================================
// 테스트 1: Promise 만들기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: Promise 만들기 ===");
  clearLog("log1");
  addLog("log1", "🎲 주사위를 던집니다...");

  // TODO: rollDice 함수를 완성하세요
  // Promise를 반환하며, 1초 후에:
  //   - 1~6 사이의 랜덤 숫자를 생성합니다 (Math.floor(Math.random() * 6) + 1)
  //   - 4 이상이면 resolve(숫자)
  //   - 3 이하이면 reject(숫자)
  function rollDice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 6) + 1;

        // TODO: num이 4 이상이면 resolve, 아니면 reject 하세요
      }, 1000);
    });
  }

  // TODO: rollDice()를 호출하고 .then()과 .catch()로 결과를 처리하세요
  //   .then: addLog("log1", "🎉 성공! 숫자: " + num)
  //   .catch: addLog("log1", "😢 실패! 숫자: " + num)

  // 예상 출력 (1초 후, 랜덤):
  // 🎉 성공! 숫자: 5   (4, 5, 6 중 하나)
  // 또는
  // 😢 실패! 숫자: 2   (1, 2, 3 중 하나)
}

// ==========================================
// 테스트 2: then()과 catch()
// ==========================================

function test2a() {
  console.log("\n=== 테스트 2-1: 성공 케이스 ===");
  clearLog("log2");
  addLog("log2", "사용자 조회 중... (ID: 123)");

  // TODO: fetchUser(123)을 호출하고
  //   .then(): addLog("log2", "이름: " + user.name) 과 addLog("log2", "이메일: " + user.email) 출력
  //   .catch(): addLog("log2", "에러: " + error) 출력

  // 예상 출력 (1초 후):
  // 이름: 홍길동123
  // 이메일: user123@example.com
}

function test2b() {
  console.log("\n=== 테스트 2-2: 실패 케이스 ===");
  clearLog("log2");
  addLog("log2", "사용자 조회 중... (ID: -1)");

  // TODO: fetchUser(-1)을 호출하고
  //   .then(): addLog("log2", "이름: " + user.name) 출력
  //   .catch(): addLog("log2", "❌ 에러: " + error) 출력

  // 예상 출력 (1초 후):
  // ❌ 에러: 잘못된 사용자 ID: -1
}

// ==========================================
// 테스트 3: async/await 기본
// ==========================================

// TODO: test3 함수를 async 함수로 만들고, await를 사용하세요

function test3() {
  console.log("\n=== 테스트 3: async/await 기본 ===");
  clearLog("log3");
  addLog("log3", "사용자 조회 중...");

  // TODO: 아래에 await를 사용하여 fetchUser(42)의 결과를 받으세요
  // hint: 이 함수 자체를 async로 바꿔야 합니다!

  // addLog("log3", "이름: " + user.name) 출력
  // addLog("log3", "이메일: " + user.email) 출력

  // 예상 출력 (1초 후):
  // 이름: 홍길동42
  // 이메일: user42@example.com
}

// ==========================================
// 테스트 4: 에러 처리 (try/catch/finally)
// ==========================================

// TODO: test4 함수를 async 함수로 만들고, try/catch/finally를 사용하세요
function test4(userId) {
  console.log("\n=== 테스트 4: 에러 처리 ===");
  clearLog("log4");

  const loading = document.getElementById("loading4");
  loading.classList.add("show");
  addLog("log4", "사용자 조회 중... (ID: " + userId + ")");

  // TODO: try/catch/finally를 작성하세요
  // try:
  //   - const user = await fetchUser(userId)
  //   - addLog("log4", "✅ 성공! 이름: " + user.name)
  // catch:
  //   - addLog("log4", "❌ 에러: " + error)
  // finally:
  //   - loading.classList.remove("show")
  //   - addLog("log4", "작업 완료 (성공이든 실패든)")

  // 예상 출력 (성공 시):
  // ✅ 성공! 이름: 홍길동5
  // 작업 완료 (성공이든 실패든)

  // 예상 출력 (실패 시):
  // ❌ 에러: 잘못된 사용자 ID: -1
  // 작업 완료 (성공이든 실패든)
}

function test4a() {
  test4(5);
}
function test4b() {
  test4(-1);
}

// ==========================================
// 테스트 5: Promise 체이닝 (.then 연결)
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: Promise 체이닝 ===");
  clearLog("log5");
  addLog("log5", "체이닝 시작!");

  // TODO: fetchUser → fetchOrders → fetchOrderDetail 순서로 .then() 체이닝하세요
  //
  // 1단계: fetchUser(1) 호출
  //   → then 콜백의 매개변수: user
  //   → addLog("log5", "1단계 - 사용자: " + user.name)
  //   → return fetchOrders(user.id) 로 다음 Promise를 반환!
  //
  // 2단계: 이어서 .then()
  //   → 콜백 매개변수: orders
  //   → addLog("log5", "2단계 - 주문 수: " + orders.length)
  //   → return fetchOrderDetail(orders[0].id)
  //
  // 3단계: 이어서 .then()
  //   → 콜백 매개변수: detail
  //   → addLog("log5", "3단계 - 상품: " + detail.item + ", 상태: " + detail.status)
  //
  // 마지막: .catch()로 에러 처리
  //   → addLog("log5", "에러: " + error)

  // 예상 출력 (약 2.5초에 걸쳐):
  // 1단계 - 사용자: 홍길동1
  // 2단계 - 주문 수: 3
  // 3단계 - 상품: 노트북, 상태: 배송완료
}

// ==========================================
// 테스트 6: async/await로 체이닝 변환
// ==========================================

// TODO: 아래 .then() 체이닝 코드를 async/await + try/catch로 변환하세요
//
// [변환 전 코드 - 섹션 5에서 작성한 .then() 체이닝]
// fetchUser(1)
//   .then(user => {
//     addLog("log6", "1단계 - 사용자: " + user.name);
//     return fetchOrders(user.id);
//   })
//   .then(orders => {
//     addLog("log6", "2단계 - 주문 수: " + orders.length);
//     return fetchOrderDetail(orders[0].id);
//   })
//   .then(detail => {
//     addLog("log6", "3단계 - 상품: " + detail.item + ", 상태: " + detail.status);
//   })
//   .catch(error => {
//     addLog("log6", "에러: " + error);
//   });
//
// hint: function → async function, .then() → await, .catch() → try/catch
function test6() {
  console.log("\n=== 테스트 6: async/await로 변환 ===");
  clearLog("log6");
  addLog("log6", "순차 조회 시작!");

  // 예상 출력 (섹션 5와 동일):
  // 1단계 - 사용자: 홍길동1
  // 2단계 - 주문 수: 3
  // 3단계 - 상품: 노트북, 상태: 배송완료
}

// ==========================================
// 테스트 7: Promise.all 병렬 실행
// ==========================================

// TODO: test7을 async 함수로 만드세요
function test7() {
  console.log("\n=== 테스트 7: Promise.all 병렬 실행 ===");
  clearLog("log7");

  console.time("병렬 실행");
  addLog("log7", "3명의 사용자를 동시에 조회합니다...");

  // TODO: Promise.all을 사용하여 3명을 동시에 조회하세요
  //
  // Promise.all 문법: const results = await Promise.all([ promise1, promise2, ... ])
  // 구조분해 할당으로 받으면: const [a, b, c] = await Promise.all([ ... ])
  //
  // 동시에 실행할 Promise 3개: fetchUser(1), fetchUser(2), fetchUser(3)
  //
  // 결과를 받은 뒤 아래 코드를 그대로 사용하세요:
  //
  // addLog("log7", "사용자1: " + user1.name);
  // addLog("log7", "사용자2: " + user2.name);
  // addLog("log7", "사용자3: " + user3.name);
  // updateCard("card-1", user1);
  // updateCard("card-2", user2);
  // updateCard("card-3", user3);
  // console.timeEnd("병렬 실행");
  // addLog("log7", "✅ 모든 조회 완료! (약 1초 — 동시에 실행했으니까!)");

  // 예상 출력 (약 1초 후, 3개 동시):
  // 사용자1: 홍길동1
  // 사용자2: 홍길동2
  // 사용자3: 홍길동3
  // ✅ 모든 조회 완료! (약 1초 — 동시에 실행했으니까!)
}

function updateCard(cardId, user) {
  const card = document.getElementById(cardId);
  card.classList.add("loaded");
  card.innerHTML =
    '<div class="name">' +
    user.name +
    "</div>" +
    '<div class="email">' +
    user.email +
    "</div>";
}

function resetCards() {
  clearLog("log7");
  ["card-1", "card-2", "card-3"].forEach((id, i) => {
    const card = document.getElementById(id);
    card.classList.remove("loaded");
    card.innerHTML = '<span class="placeholder">사용자 ' + (i + 1) + "</span>";
  });
}
