const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const periodElement = document.querySelector('#period');

function updateClock() {
    const day = new Date();

    // Analog Clock
    const hh = day.getHours() * 30; // 30 degrees per hour
    const mm = day.getMinutes() * 6; // 6 degrees per minute
    const ss = day.getSeconds() * 6; // 6 degrees per second

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Account for minutes in hour hand
    mn.style.transform = `rotateZ(${mm}deg)`; // Minute hand
    sc.style.transform = `rotateZ(${ss}deg)`; // Second hand

    // Digital Clock with 12-hour format and AM/PM
    let hours = day.getHours();
    const minutes = day.getMinutes();
    const seconds = day.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert 0 to 12 for midnight or noon
    hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
    min.innerHTML = (minutes < 10 ? '0' : '') + minutes;
    sec.innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Update AM/PM indicator text
    periodElement.innerHTML = ampm;
}

// Call updateClock every second
setInterval(updateClock, 1000);
