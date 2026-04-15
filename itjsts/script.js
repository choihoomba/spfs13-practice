// ID 선택
const header = document.querySelector("#header");

// 클래스 선택 (첫 번째만)
const title = document.querySelector(".title");

// 태그 선택 (첫 번째만)
const firstP = document.querySelector("p");

// 자손 선택자
const subtitle = document.querySelector("#header p");
const intro = document.querySelector(".content .intro");

// 자식 선택자
const directChild = document.querySelector("#header > h1");

// 속성 선택자
const activeItem = document.querySelector("li.active");
const firstLi = document.querySelector("li:first-child");
const lastLi = document.querySelector("li:last-child");
const secondLi = document.querySelector("li:nth-child(2)");
console.log()