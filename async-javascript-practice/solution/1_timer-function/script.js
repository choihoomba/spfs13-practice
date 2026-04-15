console.log("=== 타이머 함수와 콜백 ===\n");

// ==========================================
// 테스트 1: 콜백 함수 기초
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 콜백 함수 기초 ===");

  const result1 = document.getElementById("result1");

  function processOrder(item, callback) {
    const message = item + " 주문이 접수되었습니다!";
    console.log(message);
    result1.textContent = message;

    callback();
  }

  processOrder("아메리카노", () => {
    console.log("주문 완료 후 알림: 음료가 곧 준비됩니다!");
    result1.textContent += "\n주문 완료 후 알림: 음료가 곧 준비됩니다!";
  });
}

// ==========================================
// 테스트 2: setTimeout 기본
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: setTimeout 기본 ===");

  const result2 = document.getElementById("result2");
  result2.textContent = "⏳ 2초를 기다리는 중...";

  setTimeout(() => {
    result2.textContent = "✅ 2초가 지났습니다!";
    console.log("2초 후 실행됨");
  }, 2000);

  console.log("setTimeout 등록 완료 (이 메시지가 먼저 출력됩니다)");
}

// ==========================================
// 테스트 3: 실행 순서 이해
// ==========================================

function addLog3(message) {
  const log3 = document.getElementById("log3");
  const timestamp = new Date().toLocaleTimeString();
  log3.textContent += "[" + timestamp + "] " + message + "\n";
  console.log(message);
}

function clearLog3() {
  document.getElementById("log3").textContent = "";
}

function test3() {
  console.log("\n=== 테스트 3: 실행 순서 이해 ===");
  clearLog3();

  addLog3("1 번째: 시작!");

  setTimeout(() => {
    addLog3("4 번째: 0초 타이머");
  }, 0);

  addLog3("2 번째: 중간 작업");

  setTimeout(() => {
    addLog3("5 번째: 1초 타이머");
  }, 1000);

  addLog3("3 번째: 끝!");
}

// ==========================================
// 테스트 4: 카운트다운 타이머 (setInterval)
// ==========================================

let countdownId = null;

function test4() {
  console.log("\n=== 테스트 4: 카운트다운 타이머 ===");

  if (countdownId !== null) return;

  const timerDisplay = document.getElementById("timer4");
  const btnCountdown = document.getElementById("btn-countdown");
  btnCountdown.disabled = true;

  let count = 10;
  timerDisplay.textContent = count;

  countdownId = setInterval(() => {
    count--;
    timerDisplay.textContent = count;

    if (count === 0) {
      clearInterval(countdownId);
      countdownId = null;
      timerDisplay.textContent = "🎉 완료!";
      console.log("카운트다운 종료!");
      btnCountdown.disabled = false;
    }
  }, 1000);
}

function resetTimer4() {
  if (countdownId !== null) {
    clearInterval(countdownId);
    countdownId = null;
  }
  document.getElementById("timer4").textContent = "10";
  document.getElementById("btn-countdown").disabled = false;
}

// ==========================================
// 테스트 5: 프로그레스 바 (setInterval + clearInterval)
// ==========================================

let progressId = null;

function test5() {
  console.log("\n=== 테스트 5: 프로그레스 바 ===");

  if (progressId !== null) return;

  const progressBar = document.getElementById("progress-bar");
  const btnProgress = document.getElementById("btn-progress");
  btnProgress.disabled = true;

  let percent = 0;

  progressId = setInterval(() => {
    percent += 2;
    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";

    if (percent >= 100) {
      clearInterval(progressId);
      progressId = null;
      progressBar.textContent = "완료! 🎉";
      console.log("프로그레스 100% 완료!");
      btnProgress.disabled = false;
    }
  }, 100);
}

function resetProgress() {
  if (progressId !== null) {
    clearInterval(progressId);
    progressId = null;
  }
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
  document.getElementById("btn-progress").disabled = false;
}

// ==========================================
// 테스트 6: 콜백으로 순서 제어
// ==========================================

function addLog6(message) {
  const log6 = document.getElementById("log6");
  const timestamp = new Date().toLocaleTimeString();
  log6.textContent += "[" + timestamp + "] " + message + "\n";
  console.log(message);
}

function clearLog6() {
  document.getElementById("log6").textContent = "";
}

function test6() {
  console.log("\n=== 테스트 6: 콜백으로 순서 제어 ===");
  clearLog6();

  function step1(callback) {
    addLog6("1단계: 데이터 수집 중...");
    setTimeout(() => {
      addLog6("1단계: 데이터 수집 완료");
      callback();
    }, 1000);
  }

  function step2(callback) {
    addLog6("2단계: 데이터 분석 중...");
    setTimeout(() => {
      addLog6("2단계: 데이터 분석 완료");
      callback();
    }, 1000);
  }

  function step3() {
    addLog6("3단계: 보고서 생성 중...");
    setTimeout(() => {
      addLog6("3단계: 보고서 생성 완료");
    }, 1000);
  }

  step1(() => {
    step2(() => {
      step3();
    });
  });
}

// ==========================================
// 테스트 7: 콜백에 인자 전달
// ==========================================

function addLog7(message) {
  const log7 = document.getElementById("log7");
  const timestamp = new Date().toLocaleTimeString();
  log7.textContent += "[" + timestamp + "] " + message + "\n";
  console.log(message);
}

function clearLog7() {
  document.getElementById("log7").textContent = "";
}

function fetchUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "홍길동", email: "hong@example.com" };
    callback(user);
  }, 1000);
}

function test7() {
  console.log("\n=== 테스트 7: 콜백에 인자 전달 ===");
  clearLog7();
  addLog7("사용자 정보 요청 중...");

  fetchUser(123, (user) => {
    addLog7("사용자 이름: " + user.name);
    addLog7("이메일: " + user.email);
  });
}

// ==========================================
// 테스트 8: 신호등 (종합 실습)
// ==========================================

function addLog8(message) {
  const log8 = document.getElementById("log8");
  const timestamp = new Date().toLocaleTimeString();
  log8.textContent += "[" + timestamp + "] " + message + "\n";
  console.log(message);
}

function resetAllLights() {
  document.getElementById("light-red").style.backgroundColor = "#333";
  document.getElementById("light-yellow").style.backgroundColor = "#333";
  document.getElementById("light-green").style.backgroundColor = "#333";
}

function test8() {
  console.log("\n=== 테스트 8: 신호등 ===");
  document.getElementById("log8").textContent = "";
  document.getElementById("btn-traffic").disabled = true;
  resetAllLights();

  function turnOnLight(lightId, color, name, duration, callback) {
    resetAllLights();
    addLog8(name + " 점등! (" + duration / 1000 + "초)");

    document.getElementById(lightId).style.backgroundColor = color;

    setTimeout(() => {
      callback();
    }, duration);
  }

  turnOnLight("light-red", "#e74c3c", "🔴 빨간불", 3000, () => {
    turnOnLight("light-yellow", "#f39c12", "🟡 노란불", 1000, () => {
      turnOnLight("light-green", "#2ecc71", "🟢 초록불", 3000, () => {
        resetAllLights();
        addLog8("🚦 신호 사이클 종료!");
        document.getElementById("btn-traffic").disabled = false;
      });
    });
  });
}

function resetTraffic() {
  document.getElementById("log8").textContent =
    "신호등 로그가 여기에 표시됩니다.";
  document.getElementById("btn-traffic").disabled = false;
  resetAllLights();
}

// ==========================================
// 초기 정보 출력
// ==========================================
console.log("섹션 개수:", document.querySelectorAll(".section").length);
console.log("준비 완료! 각 테스트 버튼을 클릭하여 실습을 진행하세요.\n");
