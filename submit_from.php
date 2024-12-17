<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $password = htmlspecialchars($_POST['password']);

    // Server-side validation
    if (empty($name) || empty($email) || empty($phone) || empty($password)) {
        echo 'All fields are required.';
    } else {
        // Here, you can add additional checks (email format, password strength, etc.)
        // For example, check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 'Please enter a valid email address.';
            exit();
        }

        // You can hash the password here if you want to store it securely in a database
        // $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // For simplicity, we'll just respond with a success message
        echo 'Registration successful! Welcome, ' . $name . '.';
    }
} else {
    echo 'Invalid request.';
}
?>