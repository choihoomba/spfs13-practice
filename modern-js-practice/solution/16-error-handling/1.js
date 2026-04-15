// 1. 안전한 JSON 파싱
function safeParseJSON(text) {
  // TODO: JSON.parse를 try-catch로 감싸기
  // 에러 발생 시 null 반환
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON 파싱 실패:", error.message);
    return null;
  }
}

console.log(safeParseJSON('{"name": "홍길동"}'));
// {name: '홍길동'}

console.log(safeParseJSON("{ invalid }"));
// JSON 파싱 실패: ...
// null
