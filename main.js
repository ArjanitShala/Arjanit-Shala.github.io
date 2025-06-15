
// Animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.fade-in').forEach(e => observer.observe(e));

// Section active sur scroll
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop + 150 && section.offsetTop + section.offsetHeight > fromTop + 150) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Light/dark mode toggle
const toggle = document.createElement("button");
toggle.textContent = "🌓";
toggle.className = "toggle-theme";
toggle.style.position = "fixed";
toggle.style.top = "15px";
toggle.style.right = "15px";
toggle.style.zIndex = 999;
toggle.onclick = () => document.body.classList.toggle("light");
document.body.appendChild(toggle);


// Confirmation au clic sur Envoyer (formulaire)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Merci ! Votre message a bien été envoyé (simulation).");
    form.reset();
  });
}

// Filtres projets
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const form = document.getElementById("formContact");
const message = document.getElementById("formMessage");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.style.display = "block";
    form.reset();
  });
}
