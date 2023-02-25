function convertTime(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    seconds < 10 ? seconds = "0" + seconds : "error"; //display "08" not "8"
    let time = minutes + ":" + seconds;
    return time;
};

let counter = 0;
let pomoTime = 1500;

function setTime() {
    if (counter % 2 === 0) {
        pomoTime = 1500;
    } else {
        pomoTime = 300;
    }
}

const timer = document.getElementById('timer');

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', pomodoro);

function pomodoro() {
    currentTime = setInterval(function () {
        if (pomoTime >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = convertTime(pomoTime);
            pomoTime--;
        } else {
            clearInterval(currentTime);
            timer.textContent = convertTime(pomoTime);
            counter++;
            setTime(); //once pomoTime === 0 (times up)
            console.log('counter: ' + counter);
            console.log('pomotime: ' + pomoTime)
        }
    }, 1000);
}

const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime);
}


