console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Mobile menu toggle
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on menu items
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when scrolling
        window.addEventListener('scroll', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }
    
    // Cookie consent
    if (!document.getElementById('cookie-consent')) {
        var cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookie-consent';
        cookieBanner.style.position = 'fixed';
        cookieBanner.style.bottom = '0';
        cookieBanner.style.left = '0';
        cookieBanner.style.right = '0';
        cookieBanner.style.background = '#333';
        cookieBanner.style.color = 'white';
        cookieBanner.style.padding = '20px';
        cookieBanner.style.zIndex = '1000';
        cookieBanner.style.display = 'flex';
        cookieBanner.style.justifyContent = 'space-between';
        cookieBanner.style.alignItems = 'center';
        
        cookieBanner.innerHTML = '<p style="margin: 0;">This website uses cookies. <a href="privacy-policy.html" style="color: #fff;">Learn more</a></p><button id="accept-cookies" style="background: #007bff; color: white; border: none; padding: 8px 16px; cursor: pointer;">Accept</button>';
        
        document.body.appendChild(cookieBanner);
        
        if (localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'none';
        }
        
        var acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'accepted');
                cookieBanner.style.display = 'none';
            });
        }
    }
}); 