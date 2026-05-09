alert("Script Connected");

const API_URL = "https://home-8i9j.onrender.com";

// ================= ELEMENTS =================
const loginBox = document.getElementById("loginBox");

const signupBox = document.getElementById("signupBox");

const createAccount = document.getElementById("createAccount");

const backLogin = document.getElementById("backLogin");

// ================= TOGGLE =================
createAccount.addEventListener("click", function(event) {

    event.preventDefault();

    loginBox.style.display = "none";

    signupBox.style.display = "block";
});

backLogin.addEventListener("click", function(event) {

    event.preventDefault();

    signupBox.style.display = "none";

    loginBox.style.display = "block";
});

// ================= SIGNUP =================
document.getElementById("signupForm")

.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document
        .getElementById("signupEmail")
        .value
        .trim();

    const password = document
        .getElementById("signupPassword")
        .value
        .trim();

    try {

        const response = await fetch(
            `${API_URL}/signup`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const data = await response.json();

        alert(data.message);

    } catch (error) {

        console.log(error);

        alert("Signup failed");
    }
});

// ================= LOGIN =================
document.getElementById("loginForm")

.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document
        .getElementById("loginEmail")
        .value
        .trim();

    const password = document
        .getElementById("loginPassword")
        .value
        .trim();

    try {

        const response = await fetch(
            `${API_URL}/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const data = await response.json();

        document.getElementById("msg").innerText =
            data.message;

        if (data.message === "Login successful") {

            window.location.href = "home.html";
        }

    } catch (error) {

        console.log(error);

        alert("Login failed");
    }
});
