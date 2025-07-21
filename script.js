// Tab Switching
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    // Add active class to current button
    button.classList.add("active");

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove("active"));

    // Show the selected tab content
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Search Functionality
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const figures = document.querySelectorAll(".tab-content.active figure");

  figures.forEach(figure => {
    const caption = figure.querySelector("figcaption").textContent.toLowerCase();
    if (caption.includes(query)) {
      figure.style.display = "";
    } else {
      figure.style.display = "none";
    }
  });
});

// Image Modal Preview
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

document.querySelector(".modal .close").addEventListener("click", () => {
  modal.style.display = "none";
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}
