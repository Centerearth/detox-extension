console.log("Hello, Detox!");

const overlay = document.createElement("div");
overlay.id = "detox-overlay";

const timerEl = document.createElement("div");
timerEl.id = "detox-timer";
overlay.appendChild(timerEl);

document.body.appendChild(overlay);

const closeButton = document.createElement("button");
closeButton.textContent = "Are you sure you want to continue?";
closeButton.id = "detox-close-button";

let seconds = 10;
timerEl.textContent = seconds;

const interval = setInterval(() => {
  seconds--;
  timerEl.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(interval);
    overlay.appendChild(closeButton);
  }
}, 1000);

closeButton.addEventListener("click", () => {
    overlay.remove();
});