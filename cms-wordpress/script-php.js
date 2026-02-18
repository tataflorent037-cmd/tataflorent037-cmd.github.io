// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Année dynamique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    const mailtoLink = `mailto:tata.florent037@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    e.target.reset();
    alert('Merci pour votre message ! Votre client email va s\'ouvrir.');
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.skill-category, .timeline-item, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Active nav style
const style = document.createElement('style');
style.textContent = `nav a.active { color: var(--accent); } nav a.active::after { width: 100%; }`;
document.head.appendChild(style);

// Console message
console.log('%c👋 Salut! ', 'background: #00D9FF; color: #0A0E27; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cDéveloppeur PHP Full Stack Senior | TATA Jean Baptiste Florent Raphaël', 'color: #00D9FF; font-size: 14px;');
console.log('%c📧 tata.florent037@gmail.com', 'color: #FF6B35; font-size: 12px;');
