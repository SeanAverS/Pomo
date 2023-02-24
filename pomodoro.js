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

let pomoTime = 0;

function pomodoro() {
    //set pomodoro to focus or rest time  
    if (counter % 2 === 0) {
        pomoTime = 1500;
    } else {
        pomoTime = 300;
    } //console.log('current time: ' + time); 

    currentTime = setInterval(function () {
        if (pomoTime >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = timeConvert(pomoTime);
            pomoTime--;
        }
        else {
            clearInterval;
            timer.textContent = timeConvert(pomoTime);
        }
    }, 1000);
}

const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime); 
    timer.innerHTML = timeConvert(pomoTime); 
}


