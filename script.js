const launchtime = new Date("2026-12-01T10:00:00");

function updateCountdown(){
    const now = new Date();
    const diff = launchtime - now;

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor(diff/(1000*60*60))%24;
    const minutes = Math.floor(diff/(1000*60))%60;
    const seconds = Math.floor(diff/1000)%60;

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown,1000);