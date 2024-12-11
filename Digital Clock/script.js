function digitalClock() {
    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let amOrpm = hour < 12 ? "am" : "pm";
    hour = (hour % 12) || 12;

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return hour + ":" + minute + ":" + second + " " + amOrpm;
}

function updateTime() {
    const clockElement = document.getElementById("clock");
    clockElement.textContent = digitalClock();
}

setInterval(updateTime, 1000);

let startTime;
let stopInterval;
let pausedTime = 0;

function startClock() {
    if (!stopInterval) {
        startTime = new Date().getTime() - pausedTime;
        stopInterval = setInterval(updateWatch, 1000);
    }
}

function stopClock() {
    clearInterval(stopInterval);
    pausedTime = new Date().getTime() - startTime;
    stopInterval = null;
}

function resetClock() {
    clearInterval(stopInterval);
    pausedTime = 0;
    document.getElementById('Timer').innerHTML = "00:00:00";
    stopInterval = null;
}

function updateWatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;

    let second = Math.floor(elapsedTime / 1000) % 60;
    let minute = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hour = Math.floor(elapsedTime / 1000 / 60 / 60);

    let displayTime = pad(hour) + ":" + pad(minute) + ":" + pad(second);

    document.getElementById('Timer').innerHTML = displayTime;
}

function pad(num) {
    return `${num < 10 ? '0' : ''}${num}`;
}

function showDate() {
    let todayDate = new Date();

    let year = todayDate.getFullYear();
    let month = todayDate.getMonth() + 1;
    let day = todayDate.getDate();

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = dayNames[todayDate.getDay()]; // Get the day name based on the day of the week

    let toDate = dayName + ", " + day + "-" + month + "-" + year;

    document.getElementById('Date').innerHTML = toDate;
}

showDate();
