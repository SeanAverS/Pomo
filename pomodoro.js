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

const timer = document.getElementById('timer');

let counter = 0;

let timePlaceHolder = 0;

function pomodoro() {
    //set pomodoro to focus or rest time  
    let time = '';
    if (counter % 2 === 0) {
        time = focus;
        timePlaceHolder = 1500;
    } else {
        time = rest;
        timePlaceHolder = 300;
    } //console.log('current time: ' + time); 

    currentTime = setInterval(function () {
        if (timePlaceHolder >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = timeConvert(timePlaceHolder);
            timePlaceHolder--;
        }
        else {
            clearInterval;
            timer.textContent = time;
        }
    }, 1000);
}


