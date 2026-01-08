// Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  burger.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
}

burger?.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.hidden = expanded;
});

mobileMenu?.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") closeMenu();
});

// Accordion FAQ
document.querySelectorAll("[data-accordion] .acc__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.querySelector(".acc__icon").textContent = isOpen ? "+" : "–";
    panel.hidden = isOpen;
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
