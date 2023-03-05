//Convert work/break time to mm:ss format
function convertTime(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    //display "08" not "8" for ex.
    seconds < 10 ? seconds = "0" + seconds : "error"; 
    let time = minutes + ":" + seconds;
    return time;
};

//Display total work time on page 
const displayPomoTime = document.getElementById('total-time');
let totalTime = 0;

function totalPomoTime() {
    if (counter % 2 === 0) {
        totalTime += 1500; //add time to global var
    } else {
        totalTime += 0;
    } //console.log('total work: ' + totalPomoTime);
      displayPomoTime.textContent = convertTime(totalTime) + ' minutes so far. Great work!';
}

//Display work/break message after time ends
const breakOrWorkMsg = document.getElementById('msg');
breakOrWorkMsg.addEventListener('click', breakOrWorkTime);

function breakOrWorkTime() {
    if (counter % 2 === 0) {
        breakOrWorkMsg.textContent = 'Break Time!';
    } else {
        breakOrWorkMsg.textContent = 'Work Time!';
    }
}

//Set pomoTime var to work/break time based on global counter
let counter = 0;
let pomoTime = 5;

function setPomoTime() {
    if (counter % 2 === 0) {
        pomoTime = 5;
    } else {
        pomoTime = 3;
    }
}

//add up total time during pomo 
let totalTimeSoFar = 0;

function timeSoFar() {
    if (counter % 2 === 0) {
       totalTimeSoFar += 1
    } else {
        totalTimeSoFar += 0;
    }
}

//Pomodoro Timer
const timer = document.getElementById('timer');

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', pomodoro);

function pomodoro() {
    currentTime = setInterval(function () {
        if (pomoTime >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = convertTime(pomoTime);
            pomoTime--;           
        } else { //once pomoTime === 0 
            clearInterval(currentTime);
            timer.textContent = convertTime(pomoTime);
            //console.log('counter b4 increment: ' + counter);
            totalPomoTime();
            breakOrWorkTime();
            counter++;
            setPomoTime(); 
            //console.log('counter after increment: ' + counter);
        }
    }, 1000);
}

//Pause Timer
const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime);
}  
