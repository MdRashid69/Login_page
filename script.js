document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    // This is a simple example.
    if (username === "user" && password === "password") {
        // Login successful, redirect or perform further actions here.
        alert("Login successful!");
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});