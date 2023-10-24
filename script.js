function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const stylesheet = document.getElementById("stylesheet");

    modeToggle.addEventListener("click", function () {
        if (stylesheet.getAttribute("href") === "style.css") {
            stylesheet.setAttribute("href", "night-mode.css");
        } else {
            stylesheet.setAttribute("href", "style.css");
        }
    });
});