function toggleForm() {
    const login = document.querySelector('.login');
    const signup = document.querySelector('.signup');

    if (login.style.display === "none") {
        login.style.display = "block";
        signup.style.display = "none";
    } else {
        login.style.display = "none";
        signup.style.display = "block";
    }
}