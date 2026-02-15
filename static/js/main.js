// Initialize the theme when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
});

// Main initialization function
function initializeTheme() {
    setupNavigation();
    setupSmoothScroll();
}

// Setup navigation functionality
function setupNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    // Add active class to current page link
    const currentPath = window.location.pathname;
    const navLinks = navMenu.querySelectorAll('a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Setup smooth scrolling for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};