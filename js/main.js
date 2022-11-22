// 1. Sticky Header : 스크롤 시 헤더가 따라다니는 기능 //
// 2. Header Menu Toggle
// 3. Navigation Menu Design : 해당 섹션에 네비게이션 활성화 및 디자인 변경
// 4. Question Section Accotdion
// 5. Reveal Effect
// 6.  Mobile Navigation Design

// nfn(화살표함수)
// querySelector(html에서 다 불러올수있음)
//  토글은 이름만 가능

/* ========= Header Sticky =========*/
const stickyHeader = () => {
  // 지역함수로 header를 불러옴 이 함수 안에서만 사용
  const header = document.querySelector(".header");
  const scrY = window.scrollY;
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}; // 스크롤을 내리면 sticky를 넣어줌
/* =================*/

window.addEventListener("scroll", () => {
  stickyHeader();
});

/* ========= Header Menu Toggle =========*/
const menu = document.querySelector(".menu-icon");
const toggleMenu = (event) => {
  // console.log(this); // 화살표 함수는 this에 전역객체 window를 호출한다.
  // console.log(e);
  // console.log(event.taget);
  // console.log(target);
  const target = event.currentTarget;

  // 자식요소 찾는 요소
  // console.log(target.childNodes);
  // console.log(target.children);
  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    // console.log(true);
    // target.firstElementChild.setAttribute("class", "ri-close-line");
    target.children[0].setAttribute("class", "ri-close-line"); // 위에랑 같음
  } else {
    // console.log(false);
    target.firstElementChild.setAttribute("class", "ri-menu-line");
  }
};

menu.addEventListener("click", toggleMenu);

/* =================*/
