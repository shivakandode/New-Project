const cheerButton = document.getElementById("cheer-button");
const welcomeText = document.getElementById("welcome-text");
const statusNote = document.getElementById("status-note");
const specialButton = document.getElementById("special-button");
const specialText = document.getElementById("special-text");

const specials = [
  "Truffle Mushroom Ravioli - Rs. 460",
  "Saffron Paneer Steak - Rs. 410",
  "Herb Grilled Chicken Platter - Rs. 520",
  "Roasted Veg Lasagna - Rs. 390",
  "Prawn Coconut Curry Bowl - Rs. 560"
];

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

if (specialButton && specialText) {
  specialButton.addEventListener("click", () => {
    const current = specialText.textContent;
    const availableSpecials = specials.filter((item) => item !== current);
    const randomSpecial = availableSpecials[Math.floor(Math.random() * availableSpecials.length)];
    specialText.textContent = randomSpecial;
  });
}
