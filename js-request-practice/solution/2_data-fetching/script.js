console.log("=== 데이터 가져오기 (fetch GET) 연습 ===\n");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ==========================================
// 유틸: 로그 출력 헬퍼
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

// ==========================================
// 레벨 1: fetch 기본 - then/catch
// ==========================================

function test1() {
  log("log1", "⏳ 사용자 데이터 요청 중...");

  fetch(`${BASE_URL}/users/1`)
    .then((response) => {
      log("log1", `✅ 응답 받음! (status: ${response.status})`);
      return response.json();
    })
    .then((data) => {
      log("log1", `\n📋 사용자 정보:`);
      log("log1", `  이름: ${data.name}`);
      log("log1", `  이메일: ${data.email}`);
      log("log1", `  전화: ${data.phone}`);
      log("log1", `  회사: ${data.company.name}`);
      log("log1", `  도시: ${data.address.city}`);
    })
    .catch((error) => {
      log("log1", `❌ 에러 발생: ${error.message}`);
    });
}

// ==========================================
// 레벨 2: Response 객체 살펴보기
// ==========================================

function test2() {
  log("log2", "⏳ Response 객체 비교 중...\n");

  fetch(`${BASE_URL}/users/1`)
    .then((response) => {
      log("log2", "=== 성공 응답 (ID: 1) ===");
      log("log2", `  status: ${response.status}`);
      log("log2", `  statusText: ${response.statusText}`);
      log("log2", `  ok: ${response.ok}`);
      log("log2", `  url: ${response.url}`);
      log("log2", "");

      document.getElementById("section2-success").textContent =
        `status: ${response.status}\nstatusText: "${response.statusText}"\nok: ${response.ok}\nurl: ${response.url}`;
    });

  fetch(`${BASE_URL}/users/9999`)
    .then((response) => {
      log("log2", "=== 실패 응답 (ID: 9999) ===");
      log("log2", `  status: ${response.status}`);
      log("log2", `  statusText: ${response.statusText}`);
      log("log2", `  ok: ${response.ok}`);
      log("log2", `  url: ${response.url}`);

      document.getElementById("section2-fail").textContent =
        `status: ${response.status}\nstatusText: "${response.statusText}"\nok: ${response.ok}\nurl: ${response.url}`;
    });
}

// ==========================================
// 레벨 3: async/await로 데이터 가져오기
// ==========================================

async function test3() {
  log("log3", "⏳ async/await로 사용자 조회 중...\n");

  const response = await fetch(`${BASE_URL}/users/2`);
  const data = await response.json();

  log("log3", `✅ 데이터 수신 완료!`);
  log("log3", `\n📋 사용자 정보:`);
  log("log3", `  이름: ${data.name}`);
  log("log3", `  이메일: ${data.email}`);
  log("log3", `  전화: ${data.phone}`);
  log("log3", `  회사: ${data.company.name}`);
  log("log3", `  도시: ${data.address.city}`);

  const resultEl = document.getElementById("section3-result");
  resultEl.innerHTML = `
    <strong>이름:</strong> ${data.name}<br>
    <strong>이메일:</strong> ${data.email}<br>
    <strong>전화:</strong> ${data.phone}<br>
    <strong>회사:</strong> ${data.company.name}<br>
    <strong>도시:</strong> ${data.address.city}
  `;
}

// ==========================================
// 레벨 4: 에러 처리 - try/catch + response.ok
// ==========================================

async function test4a() {
  const loading = document.getElementById("loading4");
  loading.classList.add("show");

  log("log4", "⏳ [성공 테스트] 사용자 ID: 1 요청 중...\n");

  try {
    const response = await fetch(`${BASE_URL}/users/1`);

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const data = await response.json();
    log("log4", `✅ 성공! 사용자: ${data.name}`);
    log("log4", `  이메일: ${data.email}`);
    log("log4", `  도시: ${data.address.city}`);
  } catch (error) {
    log("log4", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
    log("log4", `\n🏁 요청 완료 (finally 실행됨)`);
  }
}

async function test4b() {
  const loading = document.getElementById("loading4");
  loading.classList.add("show");

  log("log4", "⏳ [실패 테스트] 사용자 ID: 9999 요청 중...\n");

  try {
    const response = await fetch(`${BASE_URL}/users/9999`);

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const data = await response.json();
    log("log4", `✅ 성공! 사용자: ${data.name}`);
  } catch (error) {
    log("log4", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
    log("log4", `\n🏁 요청 완료 (finally 실행됨)`);
  }
}

// ==========================================
// 레벨 5: 목록 데이터 가져오기
// ==========================================

async function test5() {
  const loading = document.getElementById("loading5");
  loading.classList.add("show");

  log("log5", "⏳ 전체 사용자 목록 요청 중...\n");

  try {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();

    log("log5", `✅ 총 사용자 수: ${users.length}명\n`);
    users.forEach((user) => {
      log("log5", `  ${user.id}: ${user.name} (${user.email})`);
    });

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
  } catch (error) {
    log("log5", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
  }
}

// ==========================================
// 레벨 6: 쿼리 파라미터로 필터링
// ==========================================

async function test6a() {
  const loading = document.getElementById("loading6");
  loading.classList.add("show");

  log("log6", "⏳ [방법 1] 사용자 1의 게시물 요청 중...\n");

  try {
    const response = await fetch(`${BASE_URL}/posts?userId=1`);
    const posts = await response.json();

    log("log6", `✅ 게시물 수: ${posts.length}개\n`);
    posts.forEach((post) => {
      log("log6", `  ${post.id}. ${post.title}`);
    });

    const listEl = document.getElementById("post-list");
    listEl.innerHTML = posts
      .map(
        (p) => `
        <div class="post-item loaded">
          <div class="post-title">${p.id}. ${p.title}</div>
          <div class="post-body">${p.body.substring(0, 80)}...</div>
        </div>
      `,
      )
      .join("");
  } catch (error) {
    log("log6", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
  }
}

async function test6b() {
  const loading = document.getElementById("loading6");
  loading.classList.add("show");

  log("log6", "⏳ [방법 2] URLSearchParams 활용...\n");

  try {
    const params = new URLSearchParams({ userId: 1, _limit: 3 });
    const url = `${BASE_URL}/posts?${params}`;

    log("log6", `📎 완성된 URL: ${url}\n`);

    const response = await fetch(url);
    const posts = await response.json();

    log("log6", `✅ 게시물 수: ${posts.length}개 (limit: 3)\n`);
    posts.forEach((post) => {
      log("log6", `  ${post.id}. ${post.title}`);
    });

    const listEl = document.getElementById("post-list");
    listEl.innerHTML = posts
      .map(
        (p) => `
        <div class="post-item loaded">
          <div class="post-title">${p.id}. ${p.title}</div>
          <div class="post-body">${p.body.substring(0, 80)}...</div>
        </div>
      `,
      )
      .join("");
  } catch (error) {
    log("log6", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
  }
}

// ==========================================
// 레벨 7: 종합 실습 - 게시물 + 댓글 조합
// ==========================================

async function test7() {
  const loading = document.getElementById("loading7");
  loading.classList.add("show");

  log("log7", "⏳ 종합 실습: 게시물 + 댓글 조합 시작...\n");

  try {
    const postsResponse = await fetch(`${BASE_URL}/posts?userId=1`);
    if (!postsResponse.ok) {
      throw new Error(`게시물 요청 실패! 상태: ${postsResponse.status}`);
    }
    const posts = await postsResponse.json();

    log("log7", `✅ 사용자 1의 게시물: ${posts.length}개`);
    log("log7", `📌 첫 번째 게시물: "${posts[0].title}"\n`);

    const commentsResponse = await fetch(
      `${BASE_URL}/comments?postId=${posts[0].id}`,
    );
    if (!commentsResponse.ok) {
      throw new Error(`댓글 요청 실패! 상태: ${commentsResponse.status}`);
    }
    const comments = await commentsResponse.json();

    log("log7", `💬 댓글 수: ${comments.length}개\n`);
    comments.forEach((c) => {
      log("log7", `  • ${c.name}`);
      log("log7", `    ✉️ ${c.email}`);
    });

    const resultEl = document.getElementById("section7-result");
    resultEl.innerHTML = `
      <strong>📝 사용자 1의 게시물:</strong> ${posts.length}개<br>
      <strong>📌 첫 번째 게시물:</strong> ${posts[0].title}<br>
      <strong>💬 댓글 수:</strong> ${comments.length}개<br>
      <hr style="margin: 8px 0;">
      <strong>댓글 목록:</strong><br>
      ${comments.map((c) => `• ${c.name} (${c.email})`).join("<br>")}
    `;
  } catch (error) {
    log("log7", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
    log("log7", `\n🏁 종합 실습 완료!`);
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
    "\n각 테스트 버튼을 클릭하여 fetch 연습을 시작하세요!\n",
  );
});
