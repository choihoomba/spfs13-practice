// 사용자 설정 (일부만 입력됨)
const userSettings = {
  theme: "dark",
  notifications: false, // false도 유효한 설정!
  language: null,
};

// TODO: 기본 설정 객체 생성
// theme: 없으면 'light'
// notifications: 없으면 true (false도 유효!)
// language: 없으면 'ko'
// fontSize: 없으면 14

// ?? 연산자 활용!

const defaultSettings = {
  // TODO: 이 부분을 userSettings 이용해서 채워넣으세요
};

console.log(defaultSettings);

// 예상 출력
// { theme: 'dark', notifications: false, language: 'ko', fontSize: 14 }
