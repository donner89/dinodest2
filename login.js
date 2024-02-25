function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Check if the passwords match
function checkPasswords() {
    var password = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

// Event listener for the signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (!checkPasswords()) {
        event.preventDefault(); // Prevent form submission if passwords don't match
    } else {
        // Collect user data or do something with it
        var username = document.getElementById('newUsername').value;
        // Placeholder for where you would handle user data
    }
});

// Login event
function login() {
    // Placeholder for login logic
    // On successful login, redirect to mainPage.html
    window.location.href = 'mainPage.html';
}

// When the page loads, click the Login tab
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab').click();
});