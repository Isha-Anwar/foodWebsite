// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
  const drinkLinks = document.querySelectorAll(".drinks-gallery a");

  drinkLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // stop the default click behavior

      // Get the drink name from the URL parameter
      const urlParams = new URLSearchParams(this.href.split('?')[1]);
      const drinkName = urlParams.get("item")?.replace(/%20/g, ' ') || "this item";

      // Show confirmation modal
      showConfirmModal(`Are you sure you want to order "${drinkName}"?`, () => {
        window.location.href = this.href;
      });
    });
  });

  // Custom center-screen modal
  function showConfirmModal(message, onConfirm) {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "custom-modal-overlay";

    // Create modal box
    const modal = document.createElement("div");
    modal.className = "custom-modal-box";

    // Message
    const msg = document.createElement("p");
    msg.textContent = message;

    // Buttons
    const btnGroup = document.createElement("div");
    btnGroup.className = "modal-buttons";

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes, Order";
    yesBtn.className = "btn-confirm";

    const noBtn = document.createElement("button");
    noBtn.textContent = "Cancel";
    noBtn.className = "btn-cancel";

    // Append all
    btnGroup.appendChild(yesBtn);
    btnGroup.appendChild(noBtn);
    modal.appendChild(msg);
    modal.appendChild(btnGroup);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Button events
    yesBtn.onclick = () => {
      overlay.remove();
      onConfirm();
    };

    noBtn.onclick = () => overlay.remove();
  }
});
