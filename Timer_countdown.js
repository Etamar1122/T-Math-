const StartingMinutes = 10;
let time = StartingMinutes * 60;

const countdownEl = document.getElementById('coundown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = '${minutes}:${seconds}';
    time--;
}