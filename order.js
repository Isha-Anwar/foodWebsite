document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const banner = document.getElementById("confirmationBanner");
  const foodInput = document.getElementById("food");

  // Autofill food item from URL
  const params = new URLSearchParams(window.location.search);
  const item = params.get("item");
  if (item) {
    foodInput.value = item;
  }

  // Form submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show banner if you still want it (optional)
    if (banner) {
      banner.classList.remove("hidden");
    }

    // Show custom popup alert
    showAlert("✅ Thanks! Your order will arrive soon.");

    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Custom alert popup
  function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.classList.add("show");
    }, 10);

    setTimeout(() => {
      alertBox.classList.remove("show");
      setTimeout(() => alertBox.remove(), 500);
    }, 3000);
  }
});

// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});
