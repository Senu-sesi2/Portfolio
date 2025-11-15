document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // summit form
            this.submit();
        } else {
            alert('Fill in all fields.');
        }
    });
});