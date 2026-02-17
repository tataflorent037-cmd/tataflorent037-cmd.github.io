// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Submission Handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Créer le lien mailto
  const mailtoLink = `mailto:florent.tata91@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
  )}`;

  window.location.href = mailtoLink;

  // Reset form
  e.target.reset();

  alert("Merci pour votre message ! Votre client email va s'ouvrir.");
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
    }
  });
}, observerOptions);

// Observe elements for animation on scroll
document
  .querySelectorAll(".skill-category, .timeline-item, .portfolio-item")
  .forEach((el) => {
    observer.observe(el);
  });

// Active navigation link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

// Add active class style dynamically
const style = document.createElement("style");
style.textContent = `
    nav a.active {
        color: var(--accent);
    }
    nav a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

document.getElementById("year").textContent = new Date().getFullYear();

// Console message for developers
console.log(
  "%c👋 Salut! ",
  "background: #00D9FF; color: #0A0E27; font-size: 20px; font-weight: bold; padding: 10px;",
);
console.log(
  "%cDéveloppé par TATA Jean Baptiste Florent Raphaël",
  "color: #00D9FF; font-size: 14px;",
);
console.log(
  "%cDéveloppeur Mobile Cross-Platform | Madagascar 🇲🇬",
  "color: #A0A5B8; font-size: 12px;",
);
console.log("%c📧 frsoftdev1@gmail.com", "color: #FF6B35; font-size: 12px;");
