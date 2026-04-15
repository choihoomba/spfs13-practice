console.log("=== 데이터 생성/수정/삭제 연습 ===\n");

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
// 레벨 1: POST - 게시물 생성
// ==========================================

async function test1() {
  log("log1", "⏳ 새 게시물 생성 중...\n");

  const newPost = {
    title: "나의 첫 게시물",
    body: "fetch로 POST 요청을 보내 게시물을 생성했습니다!",
    userId: 1,
  };

  try {
    // TODO: fetch의 두 번째 인자에 옵션 객체를 완성하세요
    // hint: POST /posts
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST", // HTTP 메서드
      headers: {
        "Content-Type": "application/json", // JSON 형식임을 알리는 헤더
      },
      body: JSON.stringify(newPost), // newPost를 JSON 문자열로 변환
    });

    const data = await response.json();

    log("log1", `✅ 게시물 생성 성공!`);
    log("log1", `  id: ${data.id}`);
    log("log1", `  title: ${data.title}`);
    log("log1", `  body: ${data.body}`);
    log("log1", `  userId: ${data.userId}`);

    const card = document.getElementById("section1-card");
    card.classList.add("created");
    card.querySelector(".post-title").textContent = data.title;
    card.querySelector(".post-body").textContent = data.body;
    card.querySelector(".post-meta").textContent =
      `id: ${data.id} · userId: ${data.userId} · ✅ 생성됨`;
  } catch (error) {
    log("log1", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 2: POST - 사용자 생성 + 에러 처리
// ==========================================

async function test2() {
  const loading = document.getElementById("loading2");
  loading.classList.add("show");

  log("log2", "⏳ 새 사용자 생성 중...\n");

  const userData = {
    name: "홍길동",
    username: "hong",
    email: "hong@example.com",
    phone: "010-1234-5678",
  };

  try {
    // TODO: POST 요청으로 사용자를 생성하세요
    // hint: POST /users
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Content-Type 헤더의 키를 채우세요
      },
      body: JSON.stringify(userData), // userData를 JSON 문자열로 변환
    });

    // TODO: response.ok를 확인하세요
    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const newUser = await response.json();

    log("log2", `✅ 사용자 생성 성공!`);
    log("log2", `  id: ${newUser.id}`);
    log("log2", `  이름: ${newUser.name}`);
    log("log2", `  이메일: ${newUser.email}`);

    const resultEl = document.getElementById("section2-result");
    resultEl.innerHTML = `
      <strong>ID:</strong> ${newUser.id}<br>
      <strong>이름:</strong> ${newUser.name}<br>
      <strong>유저명:</strong> ${newUser.username}<br>
      <strong>이메일:</strong> ${newUser.email}<br>
      <strong>전화:</strong> ${newUser.phone}
    `;
  } catch (error) {
    log("log2", `❌ 에러: ${error.message}`);
  } finally {
    loading.classList.remove("show");
    log("log2", `\n🏁 요청 완료`);
  }
}

// ==========================================
// 레벨 3: PUT - 게시물 전체 수정
// ==========================================

async function test3() {
  log("log3", "⏳ 게시물 전체 수정 중... (PUT)\n");

  const updatedPost = {
    id: 1,
    title: "수정된 제목입니다",
    body: "PUT 요청으로 게시물 전체를 교체했습니다. 모든 필드를 보내야 합니다.",
    userId: 1,
  };

  try {
    // TODO: PUT 요청으로 게시물을 수정하세요
    // hint: PUT /posts/1
    const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost), // updatedPost를 JSON 문자열로 변환
    });

    const data = await response.json();

    log("log3", `✅ 게시물 수정 성공! (PUT)`);
    log("log3", `  id: ${data.id}`);
    log("log3", `  title: ${data.title}`);
    log("log3", `  body: ${data.body}`);
    log("log3", `  userId: ${data.userId}`);

    const card = document.getElementById("section3-card");
    card.classList.add("updated");
    card.querySelector(".post-title").textContent = data.title;
    card.querySelector(".post-body").textContent = data.body;
    card.querySelector(".post-meta").textContent =
      `id: ${data.id} · userId: ${data.userId} · ✏️ PUT으로 수정됨`;
  } catch (error) {
    log("log3", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 4: PATCH - 일부 수정 + PUT vs PATCH 비교
// ==========================================

async function test4() {
  log("log4", "⏳ PUT vs PATCH 비교 중...\n");

  try {
    // PUT: 전체 교체 (title만 보냄 → 나머지 필드 없이 교체됨)
    // hint: PUT /posts/1
    const putResponse = await fetch(`${BASE_URL}/posts/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "PUT으로 수정한 제목" }),
    });
    const putData = await putResponse.json();

    log("log4", `=== PUT 결과 ===`);
    log("log4", `  title: ${putData.title}`);
    log("log4", `  body: ${putData.body ?? "(없음 - 보내지 않았으므로)"}`);
    log("log4", `  userId: ${putData.userId ?? "(없음)"}`);
    log("log4", "");

    document.getElementById("section4-put").textContent = JSON.stringify(
      putData,
      null,
      2,
    );

    // TODO: PATCH 요청으로 title만 수정하세요
    // hint: PATCH /posts/1
    const patchResponse = await fetch(`${BASE_URL}/posts/1`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "PATCH로 수정한 제목" }), // { title: "PATCH로 수정한 제목" } 을 JSON 문자열로
    });
    const patchData = await patchResponse.json();

    log("log4", `=== PATCH 결과 ===`);
    log("log4", `  title: ${patchData.title}`);
    log("log4", `  body: ${patchData.body ?? "(없음)"}`);
    log("log4", `  userId: ${patchData.userId ?? "(없음)"}`);

    document.getElementById("section4-patch").textContent = JSON.stringify(
      patchData,
      null,
      2,
    );

    log("log4", `\n💡 PATCH는 보내지 않은 필드(body, userId)를 유지합니다!`);
  } catch (error) {
    log("log4", `❌ 에러: ${error.message}`);
  }
}

// ==========================================
// 레벨 5: DELETE - 게시물 삭제
// ==========================================

async function test5() {
  log("log5", "⏳ 게시물 삭제 중...\n");

  try {
    // TODO: DELETE 요청으로 게시물을 삭제하세요
    // hint: DELETE /posts/1
    // (DELETE는 body가 필요 없습니다!)
    const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "DELETE",
    });

    // TODO: response.ok로 삭제 성공 여부를 확인하세요
    if (response.ok) {
      log("log5", `✅ 게시물 삭제 성공!`);
      log("log5", `  상태 코드: ${response.status}`);

      const card = document.getElementById("section5-card");
      card.classList.add("deleted");
      card.querySelector(".post-meta").textContent = "🗑️ 삭제됨";
    } else {
      log("log5", `❌ 삭제 실패 (상태: ${response.status})`);
    }
  } catch (error) {
    log("log5", `❌ 에러: ${error.message}`);
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
    "\n각 테스트 버튼을 클릭하여 POST/PUT/PATCH/DELETE를 연습하세요!\n",
  );
});
