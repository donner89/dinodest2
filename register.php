<?php
session_start();

$servername = "localhost";
$dbUsername = "root"; // The default XAMPP MySQL username
$dbPassword = ""; // The default XAMPP MySQL password is typically empty
$dbname = "DinoDestinations";

// Create connection
$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Take the posted form data
$username = $_POST['username'];
$password = $_POST['password'];

// Hash the password for security
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $hashedPassword);

// Execute the prepared statement
if ($stmt->execute()) {
    $_SESSION['signup_message'] = "Account created successfully. You can now log in.";
} else {
    // Check for a duplicate username error
    if ($conn->errno == 1062) {
        $_SESSION['signup_message'] = "Username already exists. Please choose another one.";
    } else {
        $_SESSION['signup_message'] = "Error: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();

// Redirect back to the front page
header('Location: index.html');
exit();
?>
