const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createTimerEl = () => {

    let seconds = 0;
    let minutes = 0;

    if (timersCount < 5) {
        const oneMinute = setInterval(function () {
            h3.innerText = minutes;
            span.innerText = seconds;
            h3.appendChild(span);
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
                if (minutes === 60) {
                    minutes = 0;
                }
            }
        }, 1)


        const timers = document.querySelector(".timers");
        const divTimer = document.createElement("div");
        const divRemove = document.createElement("div");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const miliseconds_p = document.createElement("p");
        const divBtn = document.createElement("div");
        const btnReset = document.createElement("button");
        const btnStop = document.createElement("button");

        divTimer.classList.add("timer", "timmer_1");
        divRemove.classList.add("remove")
        divBtn.classList.add("btn");
        divBtn.classList.add("reset");
        divBtn.classList.add("stop");

        h3.innerText = minutes; //'0';
        span.innerText = seconds; //'00';
        btnReset.innerText = 'Reset';
        btnStop.innerText = 'Stop';


        timers.appendChild(divTimer);
        divTimer.appendChild(h3);
        divTimer.appendChild(divBtn);
        divTimer.appendChild(divRemove);
        h3.appendChild(span);
        divBtn.appendChild(btnReset);
        divBtn.appendChild(btnStop);
        timersCount++;

        btnReset.addEventListener('click', () => {
            minutes = 0;
            seconds = 0;
        })

        const stopIt = btnStop.addEventListener('click', () => {
            clearInterval(oneMinute);
        })

        divRemove.addEventListener('click', () => {
            stopIt;
            divTimer.remove();
            timersCount--;
        })

    }
};


addCounterEl.addEventListener('click', createTimerEl);