// Simple user database (insecure for educational purposes)
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const regUsername = document.getElementById("reg-username").value;
    const regPassword = document.getElementById("reg-password").value;
    users.push({ username: regUsername, password: regPassword });
    alert("Registration successful!");
    this.reset();
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        document.getElementById("welcome").style.display = "block";
        document.getElementById("user-welcome").textContent = user.username;

        // Hide login and registration forms
        this.style.display = "none";
        document.getElementById("register-form").style.display = "none";
    } else {
        alert("Login failed. Check your username and password.");
        this.reset();
    }
});

document.getElementById("logout-button").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
});
