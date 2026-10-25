// ── Phone menu ──
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (navToggle && nav) {
  const setOpen = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    nav.dataset.open = String(open);
  };
  setOpen(false);
  navToggle.addEventListener("click", () => setOpen(navToggle.getAttribute("aria-expanded") !== "true"));
  // Close after picking a link, and on Escape
  nav.addEventListener("click", (e) => e.target.closest("a") && setOpen(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      navToggle.focus();
    }
  });
}

// ── Newsletter form ──
// shortcut: no email provider yet, so nothing is sent or stored. Replace with a real
// endpoint before launch, and add consent text and a privacy notice (UU PDP).
const newsForm = document.getElementById("news-form");
if (newsForm) {
  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = newsForm.previousElementSibling;
    note.textContent = "Sign-up isn't open yet. Check back after launch.";
    note.setAttribute("role", "status");
  });
}
