
let currentCategory = "";
let currentSearch = "";


function applyFilters() {
  document.querySelectorAll(".video-link").forEach((card) => {
    const title = card.querySelector(".video-title").textContent.toLowerCase();
    const categories = (card.dataset.categories || "").toLowerCase();

    const matchesCategory =
      currentCategory === "" || categories.includes(currentCategory);
    const matchesSearch =
      currentSearch === "" || title.includes(currentSearch);

    card.style.display = matchesCategory && matchesSearch ? "" : "none";
  });
}


document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentCategory = chip.dataset.filter.toLowerCase();
    applyFilters();
  });
});


const searchInput = document.querySelector(".search-wrapper input");
const searchBtn = document.querySelector(".search-btn");

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.toLowerCase();
  applyFilters();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    currentSearch = searchInput.value.toLowerCase();
    applyFilters();
  }
});

searchBtn.addEventListener("click", () => {
  currentSearch = searchInput.value.toLowerCase();
  applyFilters();
});


const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});


const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});