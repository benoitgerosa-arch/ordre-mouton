// FAQ Accordion (seul JS utile ici)
document.querySelectorAll("[data-accordion] .acc__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    const icon = btn.querySelector(".acc__icon");
    if (icon) icon.textContent = isOpen ? "+" : "–";

    if (panel) panel.hidden = isOpen;
  });
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
