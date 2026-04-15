console.log("=== 타이머 함수와 콜백 ===\n");

// ==========================================
// 테스트 1: 콜백 함수 기초
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 콜백 함수 기초 ===");

  const result1 = document.getElementById("result1");

  // processOrder 함수는 주문을 처리한 뒤, 전달받은 콜백 함수를 실행합니다.
  // TODO: callback 매개변수를 받아서, 메시지를 출력한 뒤 callback()을 호출하도록 완성하세요
  function processOrder(item, callback) {
    const message = item + " 주문이 접수되었습니다!";
    console.log(message);
    result1.textContent = message;

    // TODO: 여기서 callback을 호출하세요
    callback();
  }

  // TODO: processOrder를 호출하세요
  // 첫 번째 인자: "아메리카노"
  // 두 번째 인자: 콜백 함수 (화살표 함수로 작성)
  //   - 콘솔에 "주문 완료 후 알림: 음료가 곧 준비됩니다!"를 출력
  //   - result1.textContent에 위 문자열을 추가 ("\n" + 문자열)
  processOrder("아메리카노", () => {
    console.log("주문 완료 후 알림: 음료가 곧 준비됩니다!");
    result1.innerHTML += "<br>주문 완료 후 알림: 음료가 곧 준비됩니다!";
  });
  // 예상 출력:
  // 아메리카노 주문이 접수되었습니다!
  // 주문 완료 후 알림: 음료가 곧 준비됩니다!
}

// ==========================================
// 테스트 2: setTimeout 기본
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: setTimeout 기본 ===");

  const result2 = document.getElementById("result2");
  result2.textContent = "⏳ 2초를 기다리는 중...";

  // TODO: setTimeout을 사용하여 2초(2000ms) 후에 아래 동작을 실행하세요
  //   - result2.textContent를 "✅ 2초가 지났습니다!"로 변경
  //   - 콘솔에 "2초 후 실행됨"을 출력
  setTimeout(() => {
    result2.textContent = "✅ 2초가 지났습니다!";
    console.log("2초 후 실행됨");
  }, 2000);
  console.log("setTimeout 등록 완료 (이 메시지가 먼저 출력됩니다)");

  // 예상 출력 (순서 주의!):
  // setTimeout 등록 완료 (이 메시지가 먼저 출력됩니다)
  // (2초 후)
  // 2초 후 실행됨
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

  // 아래 코드의 실행 순서를 예측해보세요!
  // TODO: 각 빈칸(__)에 실행 순서 번호(1~5)를 채워 넣으세요

  addLog3("1 번째: 시작!"); // 동기

  setTimeout(() => {
    addLog3("4 번째: 0초 타이머"); // 비동기 (0ms)
  }, 0);

  addLog3("2 번째: 중간 작업"); // 동기

  setTimeout(() => {
    addLog3("5 번째: 1초 타이머"); // 비동기 (1000ms)
  }, 1000);

  addLog3("3 번째: 끝!"); // 동기

  // 예상 출력 순서:
  // 1 번째: 시작!
  // 2 번째: 중간 작업
  // 3 번째: 끝!
  // 4 번째: 0초 타이머    ← 0ms여도 비동기라 동기 코드 이후에 실행!
  // 5 번째: 1초 타이머
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

  // TODO: setInterval을 사용하여 1초(1000ms)마다 아래 동작을 반복하세요
  //   1. count를 1 감소시킵니다
  //   2. timerDisplay.textContent를 count 값으로 업데이트합니다
  //   3. count가 0이 되면:
  //      - clearInterval로 반복을 멈춥니다
  //      - timerDisplay.textContent를 "🎉 완료!"로 변경합니다
  //      - 콘솔에 "카운트다운 종료!"를 출력합니다
  //      - btnCountdown.disabled를 false로 변경합니다
  // hint: setInterval의 반환값을 countdownId에 저장하세요
  countdownId = setInterval(() => {
    count -= 1;
    timerDisplay.textContent = count;

    if (count === 0) {
      clearInterval(countdownId);
      timerDisplay.textContent = "🎉 완료!";
      console.log("카운트다운 종료!");
      btnCountdown.disabled = false;
    }
  }, 1000);
  // 예상 동작: 10 → 9 → 8 → ... → 1 → 0 → "🎉 완료!"
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
    progressBar.style.width = `${percent}%`;
    progressBar.textContent = `${percent}%`;
    if (percent >= 100) {
      clearInterval(progressId);
      progressBar.textContent = "완료! 🎉";
      console.log("프로그레스 100% 완료!");
      btnProgress.disabled = false;
    }
  }, 100);
  // TODO: setInterval을 사용하여 100ms마다 아래 동작을 반복하세요
  //   1. percent를 2씩 증가시킵니다
  //   2. progressBar.style.width를 percent + "%"로 설정합니다
  //   3. progressBar.textContent를 percent + "%"로 설정합니다
  //   4. percent가 100 이상이 되면:
  //      - clearInterval로 반복을 멈춥니다
  //      - progressBar.textContent를 "완료! 🎉"로 변경합니다
  //      - 콘솔에 "프로그레스 100% 완료!"를 출력합니다
  //      - btnProgress.disabled를 false로 변경합니다
  // hint: setInterval의 반환값을 progressId에 저장하세요
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

  // TODO: step1 함수를 완성하세요
  // 1초 후에 "1단계: 데이터 수집 완료"를 addLog6으로 출력하고, callback을 호출합니다
  function step1(callback) {
    addLog6("1단계: 데이터 수집 중...");
    setTimeout(() => {
      // TODO: 여기를 완성하세요
      addLog6("1단계: 데이터 수집 완료");
      setTimeout(() => {
        callback();
      }, 1000);
    }, 1000);
  }

  // TODO: step2 함수를 완성하세요
  // 1초 후에 "2단계: 데이터 분석 완료"를 addLog6으로 출력하고, callback을 호출합니다
  function step2(callback) {
    addLog6("2단계: 데이터 분석 중...");
    setTimeout(() => {
      // TODO: 여기를 완성하세요
      addLog6("2단계: 데이터 분석 완료");
      setTimeout(() => {
        callback();
      }, 1000);
    }, 1000);
  }

  // TODO: step3 함수를 완성하세요
  // 1초 후에 "3단계: 보고서 생성 완료"를 addLog6으로 출력합니다 (마지막이라 callback 없음)
  function step3() {
    addLog6("3단계: 보고서 생성 중...");
    setTimeout(() => {
      // TODO: 여기를 완성하세요
      addLog6("3단계: 보고서 생성 완료");
    }, 1000);
  }

  // TODO: step1, step2, step3를 콜백으로 연결하여 순서대로 실행하세요
  // hint: step1(() => { step2(() => { step3(); }); });
  step1(() => {
    step2(() => {
      step3();
    });
  });

  // 예상 출력 (각 1초 간격):
  // 1단계: 데이터 수집 중...
  // 1단계: 데이터 수집 완료
  // 2단계: 데이터 분석 중...
  // 2단계: 데이터 분석 완료
  // 3단계: 보고서 생성 중...
  // 3단계: 보고서 생성 완료
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

// 아래 함수는 이미 완성되어 있습니다. 수정하지 마세요!
// 1초 후에 사용자 정보 객체를 콜백에 전달하는 함수
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

  // TODO: fetchUser를 호출하세요
  // 첫 번째 인자: 123 (사용자 ID)
  // 두 번째 인자: 콜백 함수 - (user) => { ... }
  //   콜백 안에서:
  //   - addLog7("사용자 이름: " + user.name) 을 호출하세요
  //   - addLog7("이메일: " + user.email) 을 호출하세요

  fetchUser(123, (user) => {
    clearLog7();
    addLog7(`사용자 이름: ${user.name}`);
    addLog7(`이메일: ${user.email}`);
  });
  // 예상 출력 (1초 후):
  // 사용자 이름: 홍길동
  // 이메일: hong@example.com
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

  // 아래 함수는 이미 완성되어 있습니다. 수정하지 마세요!
  // lightId의 불을 color로 켜고, duration(ms) 후에 callback을 호출합니다.
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
  // TODO: turnOnLight를 콜백으로 연결하여 빨강 → 노랑 → 초록 순서로 점등하세요
  //
  // 1) 빨간불: turnOnLight("light-red", "#e74c3c", "🔴 빨간불", 3000, 콜백)
  // 2) 노란불: turnOnLight("light-yellow", "#f39c12", "🟡 노란불", 1000, 콜백)
  // 3) 초록불: turnOnLight("light-green", "#2ecc71", "🟢 초록불", 3000, 콜백)
  //
  // 마지막 콜백에서:
  //   - resetAllLights()를 호출하세요
  //   - addLog8("🚦 신호 사이클 종료!")를 호출하세요
  //   - document.getElementById("btn-traffic").disabled = false 로 버튼을 다시 활성화하세요
  //
  // hint: turnOnLight("light-red", "#e74c3c", "🔴 빨간불", 3000, () => {
  //          turnOnLight("light-yellow", ..., () => {
  //            turnOnLight("light-green", ..., () => { ... });
  //          });
  //        });

  // 예상 출력 (시간 간격):
  // 🔴 빨간불 점등! (3초)
  // (3초 후) 🟡 노란불 점등! (1초)
  // (1초 후) 🟢 초록불 점등! (3초)
  // (3초 후) 🚦 신호 사이클 종료!
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
