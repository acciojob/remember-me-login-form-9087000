window.onload = function () {
    // Clear localStorage for Cypress test
    localStorage.clear();
    
    // Check if saved username and password exist
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        document.getElementById("existing").style.display = "block";
    }

    // Existing user button functionality
    document.getElementById("existing").onclick = function () {
        let savedUsername = localStorage.getItem("username");
        alert(`Logged in as ${savedUsername}.`);
    };

    // Form submit functionality
    document.getElementById("loginForm").onsubmit = function (e) {
        e.preventDefault();  // Prevent form submission for demo purposes

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let rememberMe = document.getElementById("rememberMe").checked;

        if (rememberMe) {
            // Save username and password to localStorage if "Remember Me" is checked
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Remove username and password from localStorage if "Remember Me" is unchecked
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}.`);
    };
};
