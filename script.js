// ================= BACKEND URL =================
const API_URL = "https://home-8i9j.onrender.com";

// ================= FORM TOGGLE =================
function toggleForm() {

    const loginBox = document.getElementById("loginBox");

    const signupBox = document.getElementById("signupBox");

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

    event.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();

    let password = document.getElementById("signupPassword").value.trim();

    if (!email || !password) {

        alert("Please fill all fields");

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
            throw new Error(data.message);
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

        console.log(err);

        alert(err.message);
    });
}

// ================= LOGIN =================
function login(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    if (!email || !password) {

        alert("Please fill all fields");

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
            throw new Error(data.message);
        }

        return data;
    })

    .then((data) => {

        document.getElementById("msg").innerText = data.message;

        // Save login email
        localStorage.setItem("userEmail", email);

        // Redirect page
        window.location.href = "home.html";
    })

    .catch((err) => {

        console.log(err);

        alert(err.message);
    });
}
