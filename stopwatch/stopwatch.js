/*
 * IDLE
 * RUNNING
 * PAUSED
 */
let counter = 0;
let intervalId;

// Get Reference to button
const btnEl = document.getElementById("btn");
const counterEl = document.getElementById("counter");

btnEl.addEventListener("click", () => {
    if (btnEl.textContent === "Start") {
        btnEl.textContent = "Pause";

        intervalId = setInterval(() => {
            counter++;
            counterEl.textContent = counter;
        }, 1000);

        return;
    }

    if (btnEl.textContent === "Pause") {
        clearInterval(intervalId);

        btnEl.textContent = "Reset";

        return;
    }

    if (btnEl.textContent === "Reset") {
        btnEl.textContent = "Start";

        counter = 0;
        counterEl.textContent = counter;

        return;
    }
});

// updateState("PAUSED");

// let count = document.getElementById("start-num");
// let start = document.getElementsByClassName("start");
// let countUp = function () {
//     count.textContent = parseFloat(count.textContent) + 1;
// };

// let interval = setInterval(countUp, 1000);
