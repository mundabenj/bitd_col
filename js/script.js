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
        var day = today.getDate();

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[today.getMonth()]; // Months are zero-based

        var year = today.getFullYear();

        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        document.getElementById("realTime").innerHTML = day + " " + month + " " + year + " " + hours + ":" + minutes + ":" + seconds;
        t=setTimeout(starTime, 1000); // Refresh the time every second
}