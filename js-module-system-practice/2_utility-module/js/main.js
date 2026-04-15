// js/main.js
// 메인 실행 파일 — 여기서 다른 모듈들을 import 하여 사용합니다.

// TODO 1: greet.js에서 greet 함수를 import 하세요. (default export)
// hint: import 함수이름 from './파일.js'; (중괄호 없이!)

// TODO 2: config.js에서 설정 객체를 import 하세요. (default export)
// hint: default export는 이름을 자유롭게 정할 수 있어요.
//       여기서는 siteConfig라는 이름으로 가져오세요.

// TODO 3: math-utils.js에서 add, subtract, multiply, PI를 import 하세요. (named export)
// hint: import { 이름1, 이름2 } from './파일.js'; (중괄호 필요!)

// TODO 4: string-utils.js에서 formatName(default)과 toUpperCase, addExclamation(named)을 import 하세요.
// hint: import 기본이름, { 이름1, 이름2 } from './파일.js';
//       default가 앞에, named가 뒤에!

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

// 섹션 1: default export 확인 — greet.js
function test1() {
  try {
    log("log1", "greet('홍길동') 호출 중...");
    const result = greet("홍길동");
    log("log1", `결과: ${result}`);

    log("log1", "\ngreet('철수') 호출 중...");
    log("log1", `결과: ${greet("철수")}`);

    log("log1", "\ndefault export + import 성공!");
  } catch (e) {
    log("log1", `오류: ${e.message}`);
    log(
      "log1",
      "\nhint: greet.js에 export default를 붙이고, main.js에서 중괄호 없이 import 했는지 확인하세요.",
    );
  }
}

// 섹션 2: 객체 default export 확인 — config.js
function test2() {
  try {
    log("log2", "siteConfig 객체 확인 중...");
    log("log2", `  사이트 이름: ${siteConfig.siteName}`);
    log("log2", `  최대 게시글: ${siteConfig.maxPosts}개`);
    log("log2", `  테마: ${siteConfig.theme}`);
    log("log2", `  언어: ${siteConfig.language}`);

    log("log2", "\n객체 default export + import 성공!");
    log(
      "log2",
      "(config.js에서 내보낸 객체를 siteConfig라는 이름으로 가져왔어요!)",
    );
  } catch (e) {
    log("log2", `오류: ${e.message}`);
    log(
      "log2",
      "\nhint: config.js에 export default를 붙이고, main.js에서 siteConfig라는 이름으로 import 했는지 확인하세요.",
    );
  }
}

// 섹션 3: named export 확인 — math-utils.js
function test3() {
  try {
    log("log3", "add(10, 20) 호출 중...");
    log("log3", `결과: ${add(10, 20)}`);

    log("log3", "\nsubtract(50, 18) 호출 중...");
    log("log3", `결과: ${subtract(50, 18)}`);

    log("log3", "\nmultiply(7, 8) 호출 중...");
    log("log3", `결과: ${multiply(7, 8)}`);

    log("log3", `\nPI 값: ${PI}`);

    log(
      "log3",
      `\n원의 넓이 (반지름 5): ${multiply(PI, multiply(5, 5)).toFixed(2)}`,
    );

    log("log3", "\nnamed export + import 성공!");
  } catch (e) {
    log("log3", `오류: ${e.message}`);
    log(
      "log3",
      "\nhint: math-utils.js에서 export를 붙이고, main.js에서 { } 안에 정확한 이름으로 import 했는지 확인하세요.",
    );
  }
}

// 섹션 4: 혼합 export 확인 — string-utils.js
function test4() {
  try {
    log("log4", "formatName('길동', '홍') 호출 중... (default export)");
    log("log4", `결과: ${formatName("길동", "홍")}`);

    log("log4", "\ntoUpperCase('hello') 호출 중... (named export)");
    log("log4", `결과: ${toUpperCase("hello")}`);

    log("log4", "\naddExclamation('안녕') 호출 중... (named export)");
    log("log4", `결과: ${addExclamation("안녕")}`);

    log("log4", "\n조합 테스트:");
    const name = formatName("길동", "홍");
    const upper = toUpperCase("welcome");
    const excited = addExclamation(name);
    log("log4", `  ${excited} ${upper}`);

    log("log4", "\ndefault + named 혼합 export + import 성공!");
  } catch (e) {
    log("log4", `오류: ${e.message}`);
    log(
      "log4",
      "\nhint: string-utils.js에서 formatName에 export default, 나머지에 export를 붙였는지 확인하세요.",
    );
    log(
      "log4",
      "main.js에서: import formatName, { toUpperCase, addExclamation } from '...'",
    );
  }
}

// 함수들을 전역에 등록 (HTML 버튼에서 호출할 수 있도록)
window.test1 = test1;
window.test2 = test2;
window.test3 = test3;
window.test4 = test4;
window.clearLog = clearLog;
