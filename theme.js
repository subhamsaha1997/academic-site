const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Restore saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
}

function updateToggle() {
  const isLight = body.classList.contains("light-theme");

  toggle.textContent = isLight ? "☾" : "☀";
  toggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  const theme = body.classList.contains("light-theme")
    ? "light"
    : "dark";

  localStorage.setItem("theme", theme);
  updateToggle();
});

updateToggle();
