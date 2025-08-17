/ Toggle light/dark theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Project filter system (future expansion)
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    projects.forEach(project => {
      if (selected === "all" || project.dataset.tags.includes(selected)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});