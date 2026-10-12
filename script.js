let launchTime = new Date("2026-12-01T10:00:00");

const params = new URLSearchParams(location.search);
if (params.has("demo")) {
    launchTime = new Date(Date.now() + 10 * 1000);
}
let timer;

function updateCountdown(){
    const now = new Date();
    const diff = launchTime - now;
    if (diff <= 0) {
        document.getElementById("seconds").textContent = "00";
        clearInterval(timer);
        setTimeout(function () {
            document.getElementById("countdown").hidden = true;
            document.getElementById("buy-btn").hidden = false;
        }, 1000);
        return;
    }
    const totalSeconds = Math.ceil(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();
timer = setInterval(updateCountdown,250);