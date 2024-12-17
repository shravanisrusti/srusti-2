$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        $('#responseMessage').text('');

        // Get form field values
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm_password').val();

        // Simple validation
        if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
            $('#responseMessage').text('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            $('#responseMessage').text('Passwords do not match.');
            return;
        }

        // Send form data via AJAX to PHP
        $.ajax({
            url: 'submit_form.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                phone: phone,
                password: password
            },
            success: function(response) {
                $('#responseMessage').html(response);
            },
            error: function() {
                $('#responseMessage').text('There was an error submitting the form.');
            }
        });
    });
});