// ================= FORM TOGGLE =================
function toggleForm() {
    const login = document.querySelector(".login");
    const signup = document.querySelector(".signup");

    if (login.style.display === "none") {
        login.style.display = "block";
        signup.style.display = "none";
    } else {
        login.style.display = "none";
        signup.style.display = "block";
    }
}

// ================= BACKEND URL =================
const API_URL = "https://home-8i9j.onrender.com";

let userEmail = "";

// ================= SIGNUP =================
function signup() {
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

        // Clear fields
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";

        // Switch to login form
        toggleForm();
    })
    .catch((err) => {
        console.error("Signup Error:", err);
        alert(err.message);
    });
}

// ================= LOGIN =================
function login() {
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

            // Save email in localStorage
            localStorage.setItem("userEmail", email);

            // Show extra section
            document.getElementById("extra").style.display = "block";
        }
    })
    .catch((err) => {
        console.error("Login Error:", err);
        alert(err.message);
    });
}

// ================= SAVE DETAILS =================
function saveDetails() {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;

    // Get email from memory/localStorage
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

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
