function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    document.getElementById("year").textContent = new Date().getFullYear();
});

function handleSubmit(event) {
  event.preventDefault();

  // Create the message element
  const message = document.createElement("div");
  message.className = "success-popup";
  message.textContent = "✅ Thank you! Your message has been sent.";

  // Append to body
  document.body.appendChild(message);

  // Trigger fade-in
  setTimeout(() => {
    message.classList.add("show");
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    message.classList.remove("show");
    setTimeout(() => {
      message.remove();
    }, 300);
  }, 3000);

  event.target.reset();
}

document.getElementById("year").textContent = new Date().getFullYear();

