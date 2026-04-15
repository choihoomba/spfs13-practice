console.log("=== API 클라이언트 만들기 연습 ===\n");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ==========================================
// 유틸: 로그 출력 / 스텝 표시
// ==========================================

function log(areaId, message) {
  const el = document.getElementById(areaId);
  if (el.textContent === "결과가 여기에 표시됩니다.") {
    el.textContent = "";
  }
  el.textContent += message + "\n";
}

function clearLog(areaId) {
  document.getElementById(areaId).textContent = "결과가 여기에 표시됩니다.";
}

function setStep(stepId, state) {
  const el = document.getElementById(stepId);
  el.className = "step";
  if (state) el.classList.add(state);
}

function resetSteps(groupId) {
  document.querySelectorAll(`#${groupId} .step`).forEach((el) => {
    el.className = "step";
  });
}

// ==========================================
// 레벨 1: 반복의 불편함 느끼기
// ==========================================

async function test1() {
  log("log1", "⏳ 반복 fetch 3연발 시작...\n");

  try {
    const response1 = await fetch(`${BASE_URL}/posts?_limit=3`);
    if (!response1.ok) throw new Error("에러 발생!");
    const posts = await response1.json();
    log("log1", `📋 게시글: ${posts.length}개 조회`);

    const response2 = await fetch(`${BASE_URL}/users/1`);
    if (!response2.ok) throw new Error("에러 발생!");
    const user = await response2.json();
    log("log1", `👤 사용자: ${user.name}`);

    const response3 = await fetch(`${BASE_URL}/comments?_limit=3`);
    if (!response3.ok) throw new Error("에러 발생!");
    const comments = await response3.json();
    log("log1", `💬 댓글: ${comments.length}개 조회`);

    log("log1", `\n😩 같은 패턴을 3번이나 반복했습니다...`);
    log("log1", `   fetch → ok 체크 → json 파싱`);
    log("log1", `   바뀌는 건 URL뿐인데 9줄이나 썼습니다!`);
  } catch (error) {
    log("log1", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 2: GET 함수 만들기
// ==========================================

async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP 에러! 상태: ${response.status}`);
  }
  return response.json();
}

async function test2() {
  log("log2", "⏳ get() 함수로 조회 시작...\n");

  try {
    const posts = await get("/posts?_limit=3");
    log("log2", `📋 게시글: ${posts.length}개 조회`);

    const user = await get("/users/1");
    log("log2", `👤 사용자: ${user.name}`);

    const comments = await get("/comments?_limit=3");
    log("log2", `💬 댓글: ${comments.length}개 조회`);

    log("log2", `\n✨ 9줄 → 3줄로 줄었습니다!`);
  } catch (error) {
    log("log2", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 3: CRUD api 객체 만들기
// ==========================================

const api = {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`GET 실패: ${response.status}`);
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`POST 실패: ${response.status}`);
    return response.json();
  },

  async put(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`PUT 실패: ${response.status}`);
    return response.json();
  },

  async delete(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`DELETE 실패: ${response.status}`);
    return response.ok;
  },
};

async function test3() {
  log("log3", "⏳ api 객체로 CRUD 실행...\n");

  try {
    setStep("step3-get", "active");
    const users = await api.get("/users?_limit=3");
    log("log3", `✅ GET: 사용자 ${users.length}명 조회`);
    setStep("step3-get", "done");

    setStep("step3-post", "active");
    const created = await api.post("/posts", {
      title: "api.post로 생성",
      body: "CRUD 객체 테스트",
      userId: 1,
    });
    log("log3", `✅ POST: 게시물 생성 (id: ${created.id})`);
    setStep("step3-post", "done");

    setStep("step3-put", "active");
    const updated = await api.put("/posts/1", {
      id: 1,
      title: "api.put으로 수정",
      body: "전체 교체",
      userId: 1,
    });
    log("log3", `✅ PUT: 게시물 수정 (title: ${updated.title})`);
    setStep("step3-put", "done");

    setStep("step3-delete", "active");
    await api.delete("/posts/1");
    log("log3", `✅ DELETE: 게시물 삭제 완료`);
    setStep("step3-delete", "done");

    log("log3", `\n🎉 api.동사(URL) 패턴으로 CRUD 완료!`);
  } catch (error) {
    log("log3", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 4: 공통 request 함수로 리팩터링
// ==========================================

async function request(endpoint, options = {}) {
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new Error(`HTTP 에러! 상태: ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
}

const api2 = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  put: (endpoint, data) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),
};

async function test4() {
  log("log4", "⏳ request 함수 기반 api2로 테스트...\n");

  try {
    const user = await api2.get("/users/1");
    log("log4", `✅ GET: ${user.name}`);

    const post = await api2.post("/posts", {
      title: "request 함수 테스트",
      body: "공통 함수를 재사용합니다",
      userId: 1,
    });
    log("log4", `✅ POST: id ${post.id} 생성`);

    await api2.delete("/posts/1");
    log("log4", `✅ DELETE: 삭제 완료`);

    log("log4", `\n💡 사용법은 동일! 내부만 깔끔해졌습니다.`);

    document.getElementById("section4-before").textContent =
      "api.get() 안에서:\n  fetch() → ok 체크 → json()\n\napi.post() 안에서:\n  fetch() → ok 체크 → json()\n\napi.delete() 안에서:\n  fetch() → ok 체크\n\n→ 같은 로직이 3번 반복!";
    document.getElementById("section4-after").textContent =
      "request() 안에서:\n  fetch() → ok 체크 → json()\n\napi2.get()  → request()\napi2.post() → request()\napi2.delete() → request()\n\n→ 로직은 1곳에만!";
  } catch (error) {
    log("log4", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 5: fetch 에러 처리의 함정
// ==========================================

async function test5() {
  log("log5", "⏳ fetch 에러 처리 비교...\n");

  log("log5", "=== response.ok 체크 없이 ===");
  try {
    const response = await fetch(`${BASE_URL}/users/9999`);
    const data = await response.json();
    log("log5", `  catch에 안 잡힘! data: ${JSON.stringify(data)}`);
    log("log5", `  status는 ${response.status}인데 에러로 안 잡힘`);

    document.getElementById("section5-without").textContent =
      `status: ${response.status}\ncatch에 안 잡힘!\ndata: ${JSON.stringify(data)}\n\n→ 404인데 정상 처리됨 😱`;
  } catch (error) {
    log("log5", `  catch 진입: ${error.message}`);
  }

  log("log5", "");

  log("log5", "=== response.ok 체크 있음 ===");
  try {
    const response = await fetch(`${BASE_URL}/users/9999`);

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const data = await response.json();
    log("log5", `  성공: ${data.name}`);
  } catch (error) {
    log("log5", `  ✅ catch에 잡힘: ${error.message}`);

    document.getElementById("section5-with").textContent =
      `response.ok 체크!\n→ throw new Error(...)\n→ catch에서 잡힘\n\n메시지: "${error.message}" ✅`;
  }
}

// ==========================================
// 레벨 6: 상태코드별 메시지 + 타임아웃
// ==========================================

function getErrorMessage(status) {
  const messages = {
    400: "잘못된 요청입니다",
    401: "로그인이 필요합니다",
    403: "접근 권한이 없습니다",
    404: "요청한 데이터를 찾을 수 없습니다",
    500: "서버에 문제가 발생했습니다",
  };
  return messages[status] || `알 수 없는 에러: ${status}`;
}

async function test6a() {
  log("log6", "⏳ 상태코드별 메시지 테스트...\n");

  const resultEl = document.getElementById("section6-result");

  try {
    const response = await fetch(`${BASE_URL}/users/9999`);

    if (!response.ok) {
      const message = getErrorMessage(response.status);
      throw new Error(message);
    }

    const data = await response.json();
    log("log6", `✅ 성공: ${data.name}`);
  } catch (error) {
    log("log6", `❌ ${error.message}`);
    resultEl.innerHTML = `<strong style="color: #e74c3c;">${error.message}</strong>`;
  }
}

async function test6b() {
  const loading = document.getElementById("loading6");
  loading.classList.add("show");
  const resultEl = document.getElementById("section6-result");

  log("log6", "⏳ 타임아웃 테스트 (3초 제한)...\n");
  log("log6", "  존재하지 않는 서버에 요청을 보냅니다...");

  try {
    const response = await fetch("https://httpstat.us/200?sleep=10000", {
      signal: AbortSignal.timeout(3000),
    });

    const data = await response.text();
    log("log6", `✅ 응답: ${data}`);
  } catch (error) {
    if (error.name === "TimeoutError") {
      log("log6", `⏰ 타임아웃! 서버 응답이 3초를 초과했습니다.`);
      resultEl.innerHTML = `<strong style="color: #f39c12;">⏰ 타임아웃: 서버 응답이 너무 느립니다</strong>`;
    } else if (error.name === "AbortError") {
      log("log6", `🚫 요청이 취소되었습니다.`);
      resultEl.innerHTML = `<strong style="color: #e74c3c;">🚫 요청 취소됨</strong>`;
    } else {
      log("log6", `❌ 에러: ${error.message}`);
      resultEl.innerHTML = `<strong style="color: #e74c3c;">${error.message}</strong>`;
    }
  } finally {
    loading.classList.remove("show");
  }
}

// ==========================================
// 레벨 7: 종합 실습 - 완성된 API 클라이언트
// ==========================================

async function finalRequest(endpoint, options = {}) {
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new Error(getErrorMessage(response.status));
  }

  if (response.status === 204) return null;
  return response.json();
}

const finalApi = {
  get: (endpoint) => finalRequest(endpoint),
  post: (endpoint, data) =>
    finalRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  put: (endpoint, data) =>
    finalRequest(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (endpoint) =>
    finalRequest(endpoint, { method: "DELETE" }),
};

async function test7() {
  const loading = document.getElementById("loading7");
  loading.classList.add("show");

  log("log7", "⏳ 완성된 API 클라이언트 종합 테스트...\n");

  try {
    setStep("step7-get", "active");
    const users = await finalApi.get("/users?_limit=5");
    log("log7", `✅ GET: 사용자 ${users.length}명 조회`);
    users.forEach((u) => log("log7", `  ${u.id}. ${u.name} (${u.email})`));
    setStep("step7-get", "done");

    const gridEl = document.getElementById("user-grid");
    gridEl.innerHTML = users
      .map(
        (u) => `
        <div class="user-card loaded">
          <div class="name">${u.name}</div>
          <div class="email">${u.email}</div>
          <div class="detail">📍 ${u.address.city}</div>
        </div>
      `,
      )
      .join("");
    log("log7", "");

    setStep("step7-post", "active");
    const newUser = await finalApi.post("/users", {
      name: "홍길동",
      email: "hong@example.com",
      username: "hong",
    });
    log("log7", `✅ POST: "${newUser.name}" 생성 (id: ${newUser.id})`);
    setStep("step7-post", "done");
    log("log7", "");

    setStep("step7-put", "active");
    const updated = await finalApi.put("/users/1", {
      name: "김철수",
      email: "kim@example.com",
      username: "kimcs",
    });
    log("log7", `✅ PUT: 사용자 1 → "${updated.name}"으로 수정`);
    setStep("step7-put", "done");
    log("log7", "");

    setStep("step7-del", "active");
    await finalApi.delete("/users/1");
    log("log7", `✅ DELETE: 사용자 1 삭제 완료`);
    setStep("step7-del", "done");
    log("log7", "");

    setStep("step7-err", "active");
    log("log7", `--- 에러 처리 테스트 ---`);
    try {
      await finalApi.get("/users/9999");
    } catch (error) {
      log("log7", `✅ 에러 잡힘: "${error.message}"`);
    }
    setStep("step7-err", "done");

    log("log7", `\n🎉 API 클라이언트 종합 테스트 완료!`);
  } catch (error) {
    log("log7", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
  }
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");
  console.log("API 기본 URL:", BASE_URL);
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
  console.log(
    "\n각 테스트 버튼을 클릭하여 API 클라이언트 만들기를 연습하세요!\n",
  );
});
