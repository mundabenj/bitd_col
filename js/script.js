function greetings(fname) {
    var dayTime = new Date();
    var hours = dayTime.getHours();
    var greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    return greeting + " " + fname + "!";
}

function starTime() {
        // Get the current date and time
    var today = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = days[today.getDay()]; // Get the current day of the week

    var day = today.getDate();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[today.getMonth()]; // Months are zero-based

    var year = today.getFullYear();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    document.getElementById("realTime").innerHTML = dayOfWeek + ", " + day + " " + month + " " + year + " " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    t=setTimeout(starTime, 1000); // Refresh the time every second
}
function formatTime(i){
    if (i < 10) {i = "0" + i};  // Add leading zero to numbers less than 10
    return i;
}