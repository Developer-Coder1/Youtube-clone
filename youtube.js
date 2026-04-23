let menuBtn = document.getElementById("menu-btn");
let dropdown = document.querySelector(".dropdown-menu");
menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

const searchInput = document.querySelector(".search-wrapper input");

// Filter on Enter key
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    filterVideos(searchInput.value);
  }
});

// Filter on search icon click
const searchBtn = document.querySelector(".fa-magnifying-glass");
searchBtn.addEventListener("click", () => {
  filterVideos(searchInput.value);
});

// Reset when input is cleared
searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    document.querySelectorAll(".video-link").forEach((card) => {
      card.style.display = "block";
    });
  }
  filterVideos(searchInput.value);
});

function filterVideos(query) {
  const value = query.toLowerCase();
  document.querySelectorAll(".video-link").forEach((card) => {
    const title = card.querySelector(".video-title").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
}

filterVideos("");
