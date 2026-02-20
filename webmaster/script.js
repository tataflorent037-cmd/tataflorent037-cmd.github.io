/* ============================================
   CUSTOM CURSOR
============================================ */
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 6 + "px";
  cursor.style.top = my - 6 + "px";
});

function animRing() {
  rx += (mx - rx - 20) * 0.12;
  ry += (my - ry - 20) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll("a, button, .service-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    ring.classList.add("hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    ring.classList.remove("hover");
  });
});

/* ============================================
   TABS SEO / SEA
============================================ */
function switchTab(tab, btn) {
  document
    .querySelectorAll(".tab-content")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + tab).classList.add("active");
  btn.classList.add("active");
}

/* ============================================
   SCROLL REVEAL
============================================ */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

reveals.forEach((r) => revealObserver.observe(r));

/* ============================================
   SKILLS BARS ANIMATION
============================================ */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".skill-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.3 },
);

const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) skillObserver.observe(skillsGrid);

/* ============================================
   CONTACT FORM
============================================ */
function submitForm(e) {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  e.target.reset();
  setTimeout(() => {
    success.style.display = "none";
  }, 5000);
}

/* ============================================
   SMOOTH SCROLL NAV
============================================ */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
