// 레벨2 기본값 설정
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
  theme: userSettings.theme ?? "light",
  notifications: userSettings.notifications ?? true,
  language: userSettings.language ?? "ko",
  fontSize: userSettings.fontSize ?? 14,
};

console.log(defaultSettings);
