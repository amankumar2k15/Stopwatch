// Global variables 
const time_el = document.querySelector('.time')
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0;
let interval = null;

// Update the timer 
function timer() {
    seconds = seconds + 1;


    // Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds / 60) - (hrs * 60));
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_el.innerText = ` ${hrs}:${mins}:${secs}`
}


// Event Listeners
start_btn.addEventListener('click', () => {
    interval = setInterval(timer, 1000)

})

stop_btn.addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
})

reset_btn.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 0;
    time_el.innerText = "00:00:00"
})

