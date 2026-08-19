const cheerButton = document.getElementById("cheer-button");
const welcomeText = document.getElementById("welcome-text");
const statusNote = document.getElementById("status-note");

if (cheerButton && welcomeText) {
  cheerButton.addEventListener("click", () => {
    welcomeText.textContent =
      "Thank you for choosing SHIVA's RESTAURANT. Our reservation desk has received your request and will confirm shortly.";
    if (statusNote) {
      statusNote.textContent = "Reservation Desk: +91 98765 43210 - Please call for instant confirmation.";
    }
    cheerButton.textContent = "Reservation Requested";
    cheerButton.disabled = true;
  });
}
