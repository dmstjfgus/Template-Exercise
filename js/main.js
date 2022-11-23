// 1. Sticky Header : 스크롤 시 헤더가 따라다니는 기능 //
// 2. Header Menu Toggle //
// 3. Navigation Menu Design : 해당 섹션에 네비게이션 활성화 및 디자인 변경 //
// 4. Question Section Accotdion //
// 5. Reveal Effect //
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

/* ========= Menu Active On Each Sections =========*/
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;

const activateNavMenu = () => {
  // const scrY = window.scrollY;
  // sections.forEach((section) => {
  //   const secHeight = section.offsetHeight; // section 요소의 높이값
  //   const secTop = section.offsetHeight - headerHeight; // section 요소의 윗쪽 옵셋값 - 헤더의 높이
  //   const secId = section.getAttribute("id"); // 각 섹션의 아이디값 저장

  //   if (scrY > secTop && scrY <= secTop + secHeight) {
  //     // && : 합성곱 - 양쪽 모두 ture일 경우 ture
  //     // || : 합성합 - 양쪽 중 하나만 ture일 경우 tur
  //     document.querySelector(`.nav-${secId}`).classList.add("active");
  //   } else {
  //     document.querySelector(`.nav-${secId}`).classList.remove("active");
  //   }
  // });

  const scrY = window.scrollY;
  sections.forEach((section) => {
    const secHeight = section.offsetHeight;
    const secTop = section.offsetTop - headerHeight;
    const secId = section.getAttribute("id");

    if (scrY > secTop && scrY <= secTop + secHeight) {
      // && : 합성곱 - 양쪽 모두 ture일 경우 ture
      // || : 합성합 - 양쪽 중 하나만 ture일 경우 tur
      document.querySelector(`.nav-${secId}`).classList.add("active");
    } else {
      document.querySelector(`.nav-${secId}`).classList.remove("active");
    }
  });
  if (scrY === 0) {
    document.querySelector(".nav-home").classList.add("active");
  }
};
/* =================*/

window.addEventListener("scroll", () => {
  stickyHeader();
  activateNavMenu();
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

/* ========= Question Section Accotdion =========*/
const accHeaders = document.querySelectorAll(".question-box");

const activateAccordion = (e) => {
  // console.log(e.currentTarget); // e.currentTarget 내가 클릭한 곳을 잡아준다 acc박스를
  const $this = e.currentTarget;
  $this.classList.toggle("active");
  // 변수는 특수기호 $,_ 빼고는 사용 불가능 / 예약어 사용 불가능 정해져있는 단어 사용하면 X
};

accHeaders.forEach((header) => {
  header.addEventListener("click", activateAccordion);
});
/* =================*/

/* ========= Element Fade Up Effect(reveal) =========*/
const sr = ScrollReveal({
  reset: false,
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

sr.reveal(".home-box");
sr.reveal(".about-box");
sr.reveal(".step-box", { interval: 200 });
sr.reveal(".img-box", { interval: 200 });

// sr.reveal(".home-box", { duration: 1000, origin: "bottom", distance: "50px" });
/* =================*/
