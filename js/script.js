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

function DaysInMonths(TimeDate) {
    // return days in months 
    var currentMonth = TimeDate.getMonth(); // get the current month (0-11)
    var monthsWith31Days = [0, 2, 4, 6, 7, 9, 11]; // array of months with 31 days
    var monthsWith30Days = [3, 5, 8, 10]; // array of months with 30 days
    var fabruarymonth = 1; // index of February month
    if(monthsWith31Days.includes(currentMonth)){
        var DaysInMonth = 31;
    } else if(monthsWith30Days.includes(currentMonth)){
        var DaysInMonth = 30;
    } else if(currentMonth == fabruarymonth){
        var currentYear = TimeDate.getFullYear(); // get the current year
        var isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0); // check if the current year is a leap year
        if(isLeapYear){
            var DaysInMonth = 29; // if it's a leap year, February has 29 days
        } else {
            var DaysInMonth = 28; // if it's not a leap year, February has 28 days
        }
    } else {
        var DaysInMonth = 0; // if the month is not valid, return an error message
    }
    return DaysInMonth;
}

function formValidation(registrationForm) {
     // JavaScript code for form validation will go here
        // Creat an event listener for form submission
        document.getElementById(registrationForm).addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Clear previous error messages
            document.getElementById('fullNameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            document.getElementById('confirmPasswordError').textContent = '';
            document.getElementById('validation_result').textContent = '';

            // Flag to track if the form is valid
            let isValid = true;

            // Validate Full Name
            const fullName = document.getElementById('fullname').value.trim();
            if (fullName === '') { // Check if full name is empty
                document.getElementById('fullNameError').textContent = 'Full Name is required.';
                isValid = false;
            } else if (fullName.length < 3 || fullName.length > 60) { // Check if full name is between 3 and 60 characters
                document.getElementById('fullNameError').textContent = 'Full Name must be between 3 and 60 characters.';
                isValid = false;
            }else if (!/^[a-zA-Z\s']+$/.test(fullName)) { // Check if full name contains only letters, spaces, and apostrophes
                document.getElementById('fullNameError').textContent = 'Full Name can only contain letters, spaces, and apostrophes.';
                isValid = false;
            }
            // Validate Email
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email format
            const validDomains = ['gmail.com', 'yahoo.com', 'strathmore.edu', 'o365.strathmore.edu']; // List of valid email domains
            const invalidDomains = ['hotmail.com', 'outlook.com', 'aol.com']; // List of invalid email domains
            const emailDomain = email.split('@')[1]; // Extract the domain from the email address

            if (email === '') { // Check if email is empty
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            } else if (!emailPattern.test(email)) { // Check if email is valid
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }else if (!validDomains.includes(emailDomain)) { // Check if email domain is valid
                document.getElementById('emailError').textContent = 'Email domain must be one of the following: ' + validDomains.join(', ') + '.';
                isValid = false;
            }else if (invalidDomains.includes(emailDomain)) { // Check if email domain is invalid
                document.getElementById('emailError').textContent = 'Email domain is not allowed.';
                isValid = false;
            }

            // Validate Phone
            const phone = document.getElementById('phone').value.trim();
            const phonePattern = /^\+?\d{10,15}$/; // Regular expression for validating phone number format
            if(phone === ''){ // Check if phone number is empty
                document.getElementById('phoneError').textContent = 'Phone number is required.';
                isValid = false;
            } else if (!phonePattern.test(phone)) { // Check if phone number is valid
                document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits, optional + at the beginning).';
                isValid = false;
            } else {
                const digitsOnlyPhone = phone.replace(/\D/g, ''); // Remove non-digit characters from the phone number
                if (digitsOnlyPhone.length < 10 || digitsOnlyPhone.length > 15) { // Check if the number of digits is between 10 and 15
                    document.getElementById('phoneError').textContent = 'Phone number must contain between 10 and 15 digits.';
                    isValid = false;
                }
            }
            // Validate Password
            const password = document.getElementById('password').value;
            if(password === ''){ // Check if password is empty
                document.getElementById('passwordError').textContent = 'Password is required.';
                isValid = false;
            } else if (password.length < 6) { // Check if password is at least 6 characters long
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            } else if (!/[A-Z]/.test(password)) { // Check if password contains at least one uppercase letter
                document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter.';
                isValid = false;
            } else if (!/[a-z]/.test(password)) { // Check if password contains at least one lowercase letter
                document.getElementById('passwordError').textContent = 'Password must contain at least one lowercase letter.';
                isValid = false;
            } else if (!/\d/.test(password)) { // Check if password contains at least one digit
                document.getElementById('passwordError').textContent = 'Password must contain at least one digit.';
                isValid = false;
            } else if (!/[!@#$%^&*(),.?":{}'|<>]/.test(password)) { // Check if password contains at least one special character
                document.getElementById('passwordError').textContent = 'Password must contain at least one special character.';
                isValid = false;
            }
            // Validate Confirm Password
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (confirmPassword === '') { // Check if confirm password is empty
                document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
                isValid = false;
            } else if (confirmPassword !== password) { // Check if confirm password matches the password
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
                isValid = false;
            }

            if (isValid) {
                document.getElementById('validation_result').textContent = 'Form is valid! Registration successful.'; // Display success message if the form is valid
                document.getElementById('validation_result').className = 'success'; // Set the class to 'success' for styling          
            } else {
                document.getElementById('validation_result').textContent = '';
            }
        });
    }