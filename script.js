// ================= BACKEND URL =================
const API_URL = "https://home-8i9j.onrender.com";

// ================= ELEMENTS =================
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// ================= TOGGLE FUNCTION =================
function toggleForm(show) {

    if (show === "signup") {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
    } 
    
    else {
        loginBox.style.display = "block";
        signupBox.style.display = "none";
    }
}

// ================= SWITCH TO SIGNUP =================
showSignup.addEventListener("click", function(event) {

    event.preventDefault();

    toggleForm("signup");
});

// ================= SWITCH TO LOGIN =================
showLogin.addEventListener("click", function(event) {

    event.preventDefault();

    toggleForm("login");
});

// ================= SIGNUP =================
signupForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    if (!email || !password) {

        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/signup`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        alert(data.message);

        // Switch to login form after signup
        toggleForm("login");

    } catch (error) {

        console.log(error);
        alert("Signup failed");
    }
});

// ================= LOGIN =================
loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {

        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/login`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        document.getElementById("msg").innerText = data.message;

        if (data.message === "Login successful") {

            // Save email
            localStorage.setItem("userEmail", email);

            // Redirect
            window.location.href = "home.html";
        }

    } catch (error) {

        console.log(error);
        alert("Login failed");
    }
});
