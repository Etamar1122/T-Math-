const StartingMinutes = 3;
let time = StartingMinutes * 60;

const countdownEl = document.getElementById('coundown');

updateCountdown()
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if(minutes == 0 && seconds == 0){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/TheGame_end.html')
    }

    seconds = seconds < 10 ? '0' + seconds : seconds;

    if(minutes <= 0 && seconds <= 30){
        console.log('check')
        countdownEl.style='color:red; width:150px;'
    }else {
        countdownEl.style='width:150px;'
    }
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}