(function () {
  "use strict";

  // Toggle "scrolled" class on body based on scroll position
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");

    // Check if the header has specific classes
    const isHeaderSticky =
      header.classList.contains("scroll-up-sticky") ||
      header.classList.contains("sticky-top") ||
      header.classList.contains("fixed-top");

    if (!isHeaderSticky) return;

    // Add or remove "scrolled" class based on scroll position
    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  }

  // Mobile navigation toggle functionality
  function toggleMobileNav() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  mobileNavToggleBtn.addEventListener("click", toggleMobileNav);

  // Close mobile nav when a navmenu link is clicked
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        toggleMobileNav();
      }
    });
  });

  // Toggle dropdowns in the navmenu
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  // Remove spinner when the page loads
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    window.addEventListener("load", () => {
      spinner.remove();
    });
  }

  // Scroll-to-top button functionality
  const scrollTopBtn = document.querySelector(".arrow-top");

  function toggleScrollTopButton() {
    if (scrollTopBtn) {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    }
  }

  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTopButton);
  document.addEventListener("scroll", toggleScrollTopButton);

  const counters = document.querySelectorAll(".counter"); // you can use pure counter library instead of this code https://github.com/srexi/purecounterjs?tab=readme-ov-file
  const speed = 20;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = Number(counter.getAttribute("data-target"));
      const count = Number(counter.innerText);
      // Lower inc to slow and higher to slow
      const inc = Math.ceil(target / speed);
      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Initialize AOS (Animate On Scroll) library
  function initAOS() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", initAOS);

  // FAQ toggle functionality
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  // Scroll to hash anchor on page load
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        setTimeout(() => {
          const scrollMarginTop =
            getComputedStyle(targetSection).scrollMarginTop;
          window.scrollTo({
            top: targetSection.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  // navmenu scrollspy functionality
  const navmenuLinks = document.querySelectorAll(".navmenu a");

  function updatenavmenuScrollspy() {
    navmenuLinks.forEach((link) => {
      if (!link.hash) return;
      const targetSection = document.querySelector(link.hash);
      if (!targetSection) return;

      const scrollPosition = window.scrollY + 200;
      const isSectionInView =
        scrollPosition >= targetSection.offsetTop &&
        scrollPosition <= targetSection.offsetTop + targetSection.offsetHeight;

      if (isSectionInView) {
        document.querySelectorAll(".navmenu a.active").forEach((activeLink) => {
          activeLink.classList.remove("active");
        });
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", updatenavmenuScrollspy);
  document.addEventListener("scroll", updatenavmenuScrollspy);

  // Attach scroll event listener for toggling scrolled class
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);
})();
