//Convert work/break time to mm:ss format
function convertTime(number) {
    let minutes = Math.floor(number / 60);
    let seconds = number % 60;
    //display "08" not "8" for ex.
    seconds < 10 ? seconds = "0" + seconds : "error";
    let time = minutes + ":" + seconds;
    return time;
};

//Next 4 functions test conditions w/ this 
let counter = 0;

//Add up total time during pomodoro()
let totalTimeSoFar = 0;

function timeSoFar() {
    if (counter % 2 === 0) {
        totalTimeSoFar += 1
    } else {
        totalTimeSoFar += 0;
    }
}

//Display total work time on page 
const displayPomoTime = document.getElementById('total-time');
let totalTime = 0; //change num to test w/ below conditions 

function totalPomoTime() {
    if (counter % 2 === 0 && totalTime >= 18000) { //5 Hours
        totalTime += 1500; //add time to global var
        displayPomoTime.textContent = convertTime(totalTime) + " minutes so far. INCREDIBLE!! but maybe take a rest for today.'";
    } else if (counter % 2 === 0 && totalTime >= 14400) { //4 Hours 
        totalTime += 1500;
        displayPomoTime.textContent = convertTime(totalTime) + ' minutes so far. WOW LOOK AT YOU!!'
    } else if (counter % 2 === 0) {
        totalTime += 1500;
        displayPomoTime.textContent = convertTime(totalTime) + ' minutes so far. Great Work!';
    } else {
        totalTime += 0;
        displayPomoTime.textContent = convertTime(totalTime) + ' minutes so far. Great Work!'; //duplicate msg for when counter not % 2
    }

    //console.log('counter' + counter);
    //console.log('totalTime var value: ' + totalTime);
}

//Display work/break message on page after time ends
const breakOrWorkMsg = document.getElementById('msg');
breakOrWorkMsg.addEventListener('click', breakOrWorkTime);

function breakOrWorkTime() {
    if (counter % 2 === 0) {
        breakOrWorkMsg.textContent = 'Break';
    } else {
        breakOrWorkMsg.textContent = 'Work';
    }
}

//Set pomoTime var to work/break time 
let pomoTime = 1500;

function setPomoTime() {
    if (counter % 2 === 0) {
        pomoTime = 1500;
    } else {
        pomoTime = 300;
    }
}

//Pomodoro Timer
const timer = document.getElementById('timer');

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', pomodoro);

function pomodoro() {
    playBtn.removeEventListener('click', pomodoro) //disable multiple clicks

    currentTime = setInterval(function () {
        if (pomoTime >= 1) {
            //display mm:ss format, but decrement time value
            timer.textContent = convertTime(pomoTime);
            pomoTime--;
            timeSoFar();
            //console.log(totalTimeSoFar);  
        } else { //once pomoTime === 0 
            clearInterval(currentTime);
            timer.textContent = convertTime(pomoTime);
            //console.log('counter b4 increment: ' + counter);
            totalPomoTime();
            breakOrWorkTime();
            counter++;
            setPomoTime();
            timeOnPause();
            //console.log('counter after increment: ' + counter);
            //enable pomodoro() click after times up  
            playBtn.addEventListener('click', pomodoro);
        }
    }, 1000);
}

//Pause Pomodoro Timer
const pauseBtn = document.getElementById('pause-button');
pauseBtn.addEventListener('click', pauseButton);

function pauseButton() {
    clearInterval(currentTime);
    //enable pomodoro() click after pause button pressed  
    playBtn.addEventListener('click', pomodoro);
}

//Display total time in mm:ss on page when pause button clicked
pauseBtn.addEventListener('click', timeOnPause)

function timeOnPause() {
    //change 'totalTimeSoFar' value to test conditions
    let convertTimeSoFar = convertTime(totalTimeSoFar);

    if (totalTimeSoFar >= 18000 && counter % 2 === 0) { //5 Hours
        displayPomoTime.textContent = convertTimeSoFar + ' minutes and seconds so far. Maybe take a break for today...';
    } else if (totalTimeSoFar >= 14400 && counter % 2 === 0) { //4 Hours
        displayPomoTime.textContent = convertTimeSoFar + ' minutes and seconds so far. Awesome! Let"s call it a day.';
    } else if (totalTimeSoFar >= 3000 & counter % 2 === 0) { //1 Hour 
        displayPomoTime.textContent = convertTimeSoFar + ' minutes and seconds so far. Great Work!!';
    } else if (totalTimeSoFar >= 60 && counter % 2 === 0) {
        displayPomoTime.textContent = convertTimeSoFar + ' minutes and seconds so far. Keep going!';
    }
}
