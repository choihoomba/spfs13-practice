// 1. 안전한 JSON 파싱
function safeParseJSON(text) {
  // TODO: JSON.parse를 try-catch로 감싸기
  // 에러 발생 시 에러메시지 로그 출력 후 null 반환

  return JSON.parse(text);
}

console.log(safeParseJSON('{"name": "홍길동"}'));
// {name: '홍길동'}

console.log(safeParseJSON("{ invalid }"));
// JSON 파싱 실패: [에러 메시지]
// null
