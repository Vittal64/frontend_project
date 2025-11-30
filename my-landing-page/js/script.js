// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.classList.toggle("open");
    navMenu.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu on link click (mobile)
  navMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      navMenu.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
