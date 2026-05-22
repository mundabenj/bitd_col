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
    var today = new Date(); // Get the current date and time

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = days[today.getDay()]; // Get the current day of the week

    var day = today.getDate(); // Get the current day of the month (1-31)

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[today.getMonth()]; // Months are zero-based

    var year = today.getFullYear(); // Get the current year (e.g., 2024)

    var hours = today.getHours(); // Get the current hour (0-23)
    var minutes = today.getMinutes(); // Get the current minute (0-59)
    var seconds = today.getSeconds(); // Get the current second (0-59)
    document.getElementById("realTime").innerHTML = dayOfWeek + ", " + day + " " + month + " " + year + " " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); // Display the formatted date and time in the element with id "realTime"
    var t = setTimeout(starTime, 1000); // Refresh the time every second
}
function formatTime(i){
    if (i < 10) {i = "0" + i};  // Add leading zero to numbers less than 10
    return i;
}