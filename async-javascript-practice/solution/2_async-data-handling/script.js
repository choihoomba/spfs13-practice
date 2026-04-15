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

  function rollDice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 6) + 1;

        if (num >= 4) {
          resolve(num);
        } else {
          reject(num);
        }
      }, 1000);
    });
  }

  rollDice()
    .then((num) => {
      addLog("log1", "🎉 성공! 숫자: " + num);
    })
    .catch((num) => {
      addLog("log1", "😢 실패! 숫자: " + num);
    });
}

// ==========================================
// 테스트 2: then()과 catch()
// ==========================================

function test2a() {
  console.log("\n=== 테스트 2-1: 성공 케이스 ===");
  clearLog("log2");
  addLog("log2", "사용자 조회 중... (ID: 123)");

  fetchUser(123)
    .then((user) => {
      addLog("log2", "이름: " + user.name);
      addLog("log2", "이메일: " + user.email);
    })
    .catch((error) => {
      addLog("log2", "에러: " + error);
    });
}

function test2b() {
  console.log("\n=== 테스트 2-2: 실패 케이스 ===");
  clearLog("log2");
  addLog("log2", "사용자 조회 중... (ID: -1)");

  fetchUser(-1)
    .then((user) => {
      addLog("log2", "이름: " + user.name);
    })
    .catch((error) => {
      addLog("log2", "❌ 에러: " + error);
    });
}

// ==========================================
// 테스트 3: async/await 기본
// ==========================================

async function test3() {
  console.log("\n=== 테스트 3: async/await 기본 ===");
  clearLog("log3");
  addLog("log3", "사용자 조회 중...");

  const user = await fetchUser(42);
  addLog("log3", "이름: " + user.name);
  addLog("log3", "이메일: " + user.email);
}

// ==========================================
// 테스트 4: 에러 처리 (try/catch/finally)
// ==========================================

async function test4(userId) {
  console.log("\n=== 테스트 4: 에러 처리 ===");
  clearLog("log4");

  const loading = document.getElementById("loading4");
  loading.classList.add("show");
  addLog("log4", "사용자 조회 중... (ID: " + userId + ")");

  try {
    const user = await fetchUser(userId);
    addLog("log4", "✅ 성공! 이름: " + user.name);
  } catch (error) {
    addLog("log4", "❌ 에러: " + error);
  } finally {
    loading.classList.remove("show");
    addLog("log4", "작업 완료 (성공이든 실패든)");
  }
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

  fetchUser(1)
    .then((user) => {
      addLog("log5", "1단계 - 사용자: " + user.name);
      return fetchOrders(user.id);
    })
    .then((orders) => {
      addLog("log5", "2단계 - 주문 수: " + orders.length);
      return fetchOrderDetail(orders[0].id);
    })
    .then((detail) => {
      addLog(
        "log5",
        "3단계 - 상품: " + detail.item + ", 상태: " + detail.status,
      );
    })
    .catch((error) => {
      addLog("log5", "에러: " + error);
    });
}

// ==========================================
// 테스트 6: async/await로 체이닝 변환
// ==========================================

async function test6() {
  console.log("\n=== 테스트 6: async/await로 변환 ===");
  clearLog("log6");
  addLog("log6", "순차 조회 시작!");

  try {
    const user = await fetchUser(1);
    addLog("log6", "1단계 - 사용자: " + user.name);

    const orders = await fetchOrders(user.id);
    addLog("log6", "2단계 - 주문 수: " + orders.length);

    const detail = await fetchOrderDetail(orders[0].id);
    addLog("log6", "3단계 - 상품: " + detail.item + ", 상태: " + detail.status);
  } catch (error) {
    addLog("log6", "에러: " + error);
  }
}

// ==========================================
// 테스트 7: Promise.all 병렬 실행
// ==========================================

async function test7() {
  console.log("\n=== 테스트 7: Promise.all 병렬 실행 ===");
  clearLog("log7");

  console.time("병렬 실행");
  addLog("log7", "3명의 사용자를 동시에 조회합니다...");

  const [user1, user2, user3] = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
  ]);

  addLog("log7", "사용자1: " + user1.name);
  addLog("log7", "사용자2: " + user2.name);
  addLog("log7", "사용자3: " + user3.name);

  updateCard("card-1", user1);
  updateCard("card-2", user2);
  updateCard("card-3", user3);

  console.timeEnd("병렬 실행");
  addLog("log7", "✅ 모든 조회 완료! (약 1초 — 동시에 실행했으니까!)");
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
