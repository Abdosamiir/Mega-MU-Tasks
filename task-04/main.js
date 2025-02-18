document.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  const homeSection = document.getElementById("home");
  const homeSectionHeight = homeSection.offsetHeight;

  if (window.scrollY > homeSectionHeight - 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
