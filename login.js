// Simple login functionality
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple authentication (in production, this would be server-side)
        // For demo purposes, using simple credentials
        if (username === 'investor' && password === 'aionis2026') {
            // Store login state
            localStorage.setItem('investorLoggedIn', 'true');
            localStorage.setItem('investorUsername', username);
            
            // Redirect back to main page with full access
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
}

// Check if user is already logged in
if (localStorage.getItem('investorLoggedIn') === 'true') {
    window.location.href = 'index.html';
} 