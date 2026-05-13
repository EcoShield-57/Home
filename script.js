document.addEventListener("DOMContentLoaded", () => {

    // ================= SIGNUP =================
    document.querySelector(".signup form").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch("https://sachin-backend-c4wk.onrender.com/signup", {
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

        } catch (error) {
            console.error(error);
            alert("Signup failed");
        }
    });

    // ================= LOGIN =================
    document.querySelector(".login form").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch("https://sachin-backend-c4wk.onrender.com/login", {
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

            if (data.message === "Login successful") {

                alert("Login successful");

                // ✅ Home page open
                window.location.href = "index.html";

            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    });

});