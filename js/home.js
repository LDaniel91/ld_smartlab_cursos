/* ============================================================
   LD SmartLab - Home Interacciones
   ============================================================ */

(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const html = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeLabel.textContent = 'Claro';
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeLabel.textContent = 'Oscuro';
            themeToggle.querySelector('i').className = 'fas fa-moon';
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeLabel.textContent = 'Claro';
            themeToggle.querySelector('i').className = 'fas fa-sun';
        }
    });
})();

(function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
})();

(function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    window.addEventListener('load', () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
})();