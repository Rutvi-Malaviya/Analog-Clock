const HOUR_HAND = document.querySelector("#hour");
const MINUTE_HAND = document.querySelector("#minute");
const SECOND_HAND = document.querySelector("#second");

function moveClockHands(){

    var date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let hourPosition = hour*360/12 + (minute*360/60)/12;
    let minutePosition = (minute*360/60) + (seconds*360/60)/60;
    let secondPosition = seconds*360/60;

    HOUR_HAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTE_HAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECOND_HAND.style.transform = "rotate(" + secondPosition + "deg)";

}

var interval = setInterval(moveClockHands, 1000);
