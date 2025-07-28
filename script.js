// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        body.classList.add('scrolled');
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
        body.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .team-member, .focus-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Formspree handles the submission automatically
        // We just need to show loading state and handle success/error
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Formspree will handle the rest automatically
        // The form will submit to Formspree and redirect back
    });
}

// Investment cards animation
const investmentCards = document.querySelectorAll('.card');
investmentCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.style.animation = 'fadeInUp 0.8s ease forwards';
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .hero-graphic {
        animation: float 6s ease-in-out infinite;
    }
    
    .card {
        animation: fadeInUp 0.8s ease forwards;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Check if user is logged in and show/hide investor sections
function checkInvestorAccess() {
    const isLoggedIn = localStorage.getItem('investorLoggedIn') === 'true';
    const investorElements = document.querySelectorAll('.investor-only');
    const investorNavItems = document.querySelectorAll('.nav-item.investor-only');
    
    if (isLoggedIn) {
        // Show investor sections
        investorElements.forEach(el => {
            el.style.display = 'block';
        });
        investorNavItems.forEach(el => {
            el.style.display = 'block';
        });
        
        // Change login button to logout
        const loginBtn = document.querySelector('.investor-link');
        if (loginBtn) {
            loginBtn.textContent = 'Logout';
            loginBtn.href = '#';
            loginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('investorLoggedIn');
                localStorage.removeItem('investorUsername');
                window.location.reload();
            });
        }
    } else {
        // Hide investor sections
        investorElements.forEach(el => {
            el.style.display = 'none';
        });
        investorNavItems.forEach(el => {
            el.style.display = 'none';
        });
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', checkInvestorAccess);

// Smooth scroll animations for mobile
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.section, .service-card, .team-member, .focus-card, .term-card, .card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Simple scroll animations (no smooth scrolling that breaks functionality)
function enableScrollAnimations() {
    // Add simple fade-in animations without breaking scroll
    const elementsToAnimate = document.querySelectorAll('.section, .service-card, .team-member, .focus-card, .term-card, .card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    enableScrollAnimations();
});

// Counter animation for statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add hover effects for cards
document.querySelectorAll('.service-card, .focus-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Add CSS for reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle); 

// Cookie Consent Banner
function createCookieConsent() {
    if (!document.getElementById('cookie-consent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookie-consent';
        cookieBanner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #333;
            color: white;
            padding: 20px;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        `;
        
        cookieBanner.innerHTML = `
            <div style="flex: 1; min-width: 300px;">
                <p style="margin: 0; font-size: 14px;">
                    This website uses cookies to enhance your experience. By continuing to use this site, you consent to our use of cookies. 
                    <a href="privacy-policy.html" style="color: #fff; text-decoration: underline;">Learn more</a>
                </p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="accept-cookies" style="
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                ">Accept</button>
                <button id="decline-cookies" style="
                    background: transparent;
                    color: white;
                    border: 1px solid white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                ">Decline</button>
            </div>
        `;
        
        document.body.appendChild(cookieBanner);
        
        // Check if user has already made a choice
        if (localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'none';
        }
        
        // Event listeners
        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.style.display = 'none';
        });
        
        document.getElementById('decline-cookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.style.display = 'none';
        });
    }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createCookieConsent();
}); 