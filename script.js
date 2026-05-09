// ================= BACKEND URL =================
const API_URL = "https://home-8i9j.onrender.com";

let userEmail = "";

// ================= FORM TOGGLE =================
function toggleForm() {

    const loginBox = document.querySelector(".login");
    const signupBox = document.querySelector(".signup");

    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
        signupBox.style.display = "none";
    } else {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
    }
}

// ================= SIGNUP =================
function signup(event) {

    // Prevent page refresh
    event.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(async (res) => {

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Signup failed");
        }

        return data;
    })
    .then((data) => {

        alert(data.message);

        // Clear signup fields
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";

        // Go back to login form
        toggleForm();
    })
    .catch((err) => {

        console.error("Signup Error:", err);
        alert(err.message);
    });
}

// ================= LOGIN =================
function login(event) {

    // Prevent page refresh
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(async (res) => {

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Login failed");
        }

        return data;
    })
    .then((data) => {

        document.getElementById("msg").innerText = data.message;

        if (data.message === "Login successful") {

            userEmail = email;

            // Save email in browser
            localStorage.setItem("userEmail", email);

            // Redirect after login
            window.location.href = "home.html";
        }
    })
    .catch((err) => {

        console.error("Login Error:", err);
        alert(err.message);
    });
}

// ================= SAVE DETAILS =================
function saveDetails(event) {

    event.preventDefault();

    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;

    userEmail = localStorage.getItem("userEmail");

    if (!country || !state) {
        alert("Please select country and state");
        return;
    }

    fetch(`${API_URL}/save-details`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmail,
            country: country,
            state: state
        })
    })
    .then(async (res) => {

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Save failed");
        }

        return data;
    })
    .then((data) => {

        alert(data.message);
    })
    .catch((err) => {

        console.error("Save Error:", err);
        alert(err.message);
    });
}

// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
    });
}
