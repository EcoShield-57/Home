<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login / Signup</title>

    <link rel="stylesheet" href="login_style.css">
</head>

<body>

    <div class="auth-card">

        <!-- ================= LOGIN BOX ================= -->
        <div class="box login" id="loginBox">

            <form id="loginForm">

                <h2>Welcome Back</h2>

                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                >

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                >

                <button type="submit" class="btn">
                    Sign In
                </button>

                <p id="msg"></p>

                <p>
                    New here?
                    <a href="#" id="showSignup">
                        Create account
                    </a>
                </p>

            </form>

        </div>

        <!-- ================= SIGNUP BOX ================= -->
        <div
            class="box signup"
            id="signupBox"
            style="display: none;"
        >

            <form id="signupForm">

                <h2>Create Account</h2>

                <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    required
                >

                <input
                    type="email"
                    id="signupEmail"
                    placeholder="Email"
                    required
                >

                <input
                    type="password"
                    id="signupPassword"
                    placeholder="Password"
                    required
                >

                <button type="submit" class="btn">
                    Sign Up
                </button>

                <p>
                    Already have an account?
                    <a href="#" id="showLogin">
                        Sign In
                    </a>
                </p>

            </form>

        </div>

    </div>

    <script src="script.js"></script>

</body>

</html>
