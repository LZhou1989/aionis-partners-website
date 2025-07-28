console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Simple mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Simple cookie consent
    if (!document.getElementById('cookie-consent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookie-consent';
        cookieBanner.style.cssText = 'position: fixed; bottom: 0; left: 0; right: 0; background: #333; color: white; padding: 20px; z-index: 1000; display: flex; justify-content: space-between; align-items: center;';
        cookieBanner.innerHTML = '<p style="margin: 0;">This website uses cookies. <a href="privacy-policy.html" style="color: #fff;">Learn more</a></p><button id="accept-cookies" style="background: #007bff; color: white; border: none; padding: 8px 16px; cursor: pointer;">Accept</button>';
        document.body.appendChild(cookieBanner);
        
        if (localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'none';
        }
        
        const acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'accepted');
                cookieBanner.style.display = 'none';
            });
        }
    }
}); 