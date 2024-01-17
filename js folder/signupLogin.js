// sign up and log in
document.getElementById('auth-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var welcomeMessage = document.getElementById('welcome-message');

    // Validate password: at least one alphabet and one digit
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).*$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one alphabet and one digit');
        return;
    }

    // For simplicity, assume a successful form submission (replace with actual server-side validation)
    var isLoggedIn = (document.getElementById('form-title').textContent === 'Log In');

    // Perform any additional validation here (e.g., check username availability, password strength, etc.)

    // Hide all elements inside the container
    var containerElements = document.querySelectorAll('.container *');
    containerElements.forEach(function (element) {
        element.style.display = 'none';
    });

    // Display welcome message
    if (isLoggedIn) {
        welcomeMessage.textContent = 'Welcome back, ' + username + '!';
    } else {
        welcomeMessage.textContent = 'Welcome, ' + username + '!';
    }
    welcomeMessage.style.display = 'block';
});

// Add functionality to switch between login and signup
document.getElementById('switch-text').addEventListener('click', function (event) {
    if (event.target.id === 'switch-link') {
        event.preventDefault();

        var formTitle = document.getElementById('form-title');
        var switchText = document.getElementById('switch-text');

        if (formTitle.textContent === 'Sign Up') {
            formTitle.textContent = 'Log In';
            switchText.innerHTML = 'Don\'t have an account? <a href="#" id="switch-link">Sign Up</a>';
        } else {
            formTitle.textContent = 'Sign Up';
            switchText.innerHTML = 'Already have an account? <a href="#" id="switch-link">Log In</a>';
        }

        document.getElementById('submit-btn').textContent = (formTitle.textContent === 'Log In') ? 'Log In' : 'Sign Up';

        // Clear welcome message if any
        document.getElementById('welcome-message').style.display = 'none';

        // Show the form elements
        var containerElements = document.querySelectorAll('.container *');
        containerElements.forEach(function (element) {
            element.style.display = 'block';
        });
    }
});