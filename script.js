document.addEventListener('DOMContentLoaded', async () => {
    const loginLink = document.getElementById('login-link');
    const profileSection = document.getElementById('profile-section');

    try {
        // 1. Ask the backend if the user is logged in
        const response = await fetch('/api/check-auth'); // Replace with your actual backend URL
        const data = await response.json();

        // 2. data.isLoggedIn should be returned by your friend's backend
        if (data.isLoggedIn) {
            loginLink.style.display = 'none';
            profileSection.style.display = 'block';
        } else {
            loginLink.style.display = 'block';
            profileSection.style.display = 'none';
        }
    } catch (error) {
        console.error("Backend connection failed:", error);
    }
});

function logout() {
    // 3. Tell backend to clear the session/cookie
    fetch('/api/logout', { method: 'POST' })
        .then(() => {
            window.location.href = "index.html"; // Redirect after logout
        });
}
