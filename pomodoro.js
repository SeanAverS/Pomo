let time = '';

function timeConvert(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    seconds < 10 ? seconds = "0" + seconds : "error"; //display "08" not "8"
    time = minutes + ":" + seconds;
    return time;
};

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', pomodoro);

const focus = timeConvert(1500);
const rest = timeConvert(300);

function pomodoro() {

}

