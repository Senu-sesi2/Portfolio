document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform simple validation
    if (username === 'user' && password === 'password') {
        // Redirect to the success page
        window.location.href = 'login-success.html';
    } else {
        alert('Invalid username or password');
    }
});