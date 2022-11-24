const header = document.querySelector(".header");

/* ========= Header Sticky =========*/
const stickyHeader = () => {
  const scrY = window.scrollY;
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
/* =================*/

/* ========= Menu Active On Each Sections =========*/
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;

const activateNavMenu = () => {
  const scrY = window.scrollY;
  sections.forEach((section) => {
    const secHeight = section.offsetHeight;
    const secTop = section.offsetTop - headerHeight;
    const secId = section.getAttribute("id");
    // 요소의 속성값을 가져오는 getAttribute.

    if (scrY > secTop && scrY <= secTop + secHeight) {
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
const MobileMenu = document.querySelector(".nav-list");
const body = document.querySelector("body");
const scrY = window.scrollY;

const showMenu = () => {
  menu.children[0].setAttribute("class", "ri-close-line"); // 위에랑 같음
  MobileMenu.classList.add("show");
  body.style.overflow = "hidden"; // 메뉴가 나오면 스크롤 방지

  if (scrY === 0) {
    header.style.boxShadow = "0 2px 2px #efefef";
  }
};

const hideMenu = () => {
  menu.firstElementChild.setAttribute("class", "ri-menu-line");
  MobileMenu.classList.remove("show");
  menu.classList.remove("close");
  body.style.overflow = "auto"; // 메뉴가 나오면 스크롤 방지
  if (scrY === 0) {
    header.setAttribute("style", "");
  }
};

const toggleMenu = (event) => {
  event.preventDefault();
  const target = event.currentTarget;

  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    showMenu();
  } else {
    hideMenu();
  }
};

body.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    hideMenu();
  }
});

menu.addEventListener("click", toggleMenu);

/* =================*/

/* ========= Question Section Accotdion =========*/
const accHeaders = document.querySelectorAll(".question-box");

const activateAccordion = (e) => {
  const $this = e.currentTarget;
  $this.classList.toggle("active");
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

/* =================*/
