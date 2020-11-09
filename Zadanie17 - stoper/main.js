const buttonStart = document.querySelector("button.start");
const buttonStop = document.querySelector("button.stop");
const buttonReset = document.querySelector("button.reset");
const timer = document.querySelector("h3");

let myTimer;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

buttonStart.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        myTimer = setInterval(() => {
            miliseconds++;
            if (miliseconds == 100) {
                miliseconds = 0;
                seconds++;
            }

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            const myString = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${miliseconds < 10 ? "0" + miliseconds : miliseconds}`;
            timer.textContent = myString;
            console.log(myString);
        }, 10);


    }

});

buttonStop.addEventListener("click", () => {
    isRunning = false;
    clearInterval(myTimer);
});

buttonReset.addEventListener("click", () => {
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    timer.textContent = "00:00:00";
});