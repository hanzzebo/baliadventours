// ── Live countdown to December 31, 2026 (WITA = UTC+8) ──
const LAUNCH = new Date("2026-12-31T00:00:00+08:00").getTime();

function pad(n) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function tick() {
  const diff = Math.max(0, LAUNCH - Date.now());
  document.getElementById("cd-days").textContent = pad(Math.floor(diff / 864e5));
  document.getElementById("cd-hours").textContent = pad(Math.floor((diff % 864e5) / 36e5));
  document.getElementById("cd-mins").textContent = pad(Math.floor((diff % 36e5) / 6e4));
  document.getElementById("cd-secs").textContent = pad(Math.floor((diff % 6e4) / 1e3));
}
tick();
setInterval(tick, 1000);

// ── Email form submit ──
// Replace the console.log with your actual form endpoint (Mailchimp, ConvertKit, etc.)
function handleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  if (!email) return;
  // TODO: POST to your email provider here
  // fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
  console.log("Subscribe:", email);
  document.getElementById("email-form").style.display = "none";
  document.getElementById("success-msg").classList.add("show");
}
