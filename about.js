// Sidebar toggle
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dynamic year
    document.getElementById("year").textContent = new Date().getFullYear();
});
