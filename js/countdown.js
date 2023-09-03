// Set the target date and time for the countdown (YYYY, MM (0-based), DD, HH, MM, SS)
const targetDate = new Date(2024, 8, 2, 23, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
  `;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "<p>Countdown expired!</p>";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);