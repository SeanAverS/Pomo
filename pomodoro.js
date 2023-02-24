function timeConvert(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    seconds < 10 ? seconds = "0" + seconds : "error"; //display "08" not "8"
    time = minutes + ":" + seconds;
    return time;
};

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', pomodoro);

const timer = document.getElementById('timer');

let counter = 0;
let pomoTime = 5;

function pomodoro() {
    
    currentTime = setInterval(function () {
        if (pomoTime >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = timeConvert(pomoTime);
            pomoTime--;
        }
        else {
            clearInterval(currentTime);
            timer.textContent = timeConvert(pomoTime);
            counter++;
            console.log('counter');
        }
    }, 1000);
}

const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime);
}


