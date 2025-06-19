let isRunning = false;
let time = 0;
let intevalid = null;

const display = document.getElementById('display');
const startStopbtn = document.getElementById('startStopbtn');
const resetbtn = document.getElementById('resetbtn');

function formatTime(sec) {
    let hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    let mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    let secs = String(sec % 60).padStart(2, '0');
    
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function startStop() {
    if(!isRunning){
        intevalid = setInterval(()=> {
            time++;
            updateDisplay();
        }, 1000)
        startStopbtn.textContent = 'Stop';       
    }else{
        clearInterval(intevalid);
        startStopbtn.textContent = 'Start';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(intevalid);
    time = 0;
    isRunning = false;
    updateDisplay();
    startStopbtn.textContent = 'Start';
}

startStopbtn.addEventListener('click', startStop)
resetbtn.addEventListener('click', reset)