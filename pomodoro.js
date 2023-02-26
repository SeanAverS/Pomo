function convertTime(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    seconds < 10 ? seconds = "0" + seconds : "error"; //display "08" not "8"
    let time = minutes + ":" + seconds;
    return time;
};

let counter = 0;
let pomoTime = 5;

function setTime() {
    if (counter % 2 === 0) {
        pomoTime = 5;
    } else {
        pomoTime = 3;
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
            console.log(counter);
            totalPomo();
            breakOrWork();
            counter++;
            setTime(); //once pomoTime === 0 (times up)
            console.log('counter: ' + counter);
        }
    }, 1000);
}

const displayPomoTime = document.getElementById('total-time');

let totalPomoTime = 0;

function totalPomo() {
    if (counter % 2 === 0) {
        totalPomoTime += 1500; //add total work time to global var
    } else {
        totalPomoTime += 0;
    } //console.log('total work: ' + totalPomoTime);
      displayPomoTime.textContent = convertTime(totalPomoTime) + ' minutes. Great work!';
}

const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime);
}

const breakOrWorkMsg = document.getElementById('msg');

breakOrWorkMsg.addEventListener('click', breakOrWork);

function breakOrWork() {
    if (counter % 2 === 0) {
        breakOrWorkMsg.textContent = 'Break Time!';
    } else {
        breakOrWorkMsg.textContent = 'Work Time!';
    }
}

