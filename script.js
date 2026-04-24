// script.js

// Mobile Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = mobileNav.querySelectorAll('a');
const body = document.body;

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
}

// GSAP Animations para Hero (optimizadas)
gsap.from("#hero h2", { duration: 0.8, y: -30, opacity: 0, ease: "power2.out" });
gsap.from("#hero p", { duration: 0.8, y: 30, opacity: 0, delay: 0.3, ease: "power2.out" });
gsap.from("#hero button", { duration: 0.6, scale: 0.8, opacity: 0, delay: 0.6, ease: "power2.out" });

// ScrollReveal Configuration - optimizado para mejor rendimiento
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 600,
    delay: 100,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    reset: false,
    viewFactor: 0.2,
    opacity: 0,
    interval: 80
});

// Servicios Section Animations - sin rotaciones costosas
sr.reveal('#servicios h2', {
    origin: 'top',
    distance: '40px',
    delay: 0,
    duration: 600,
    easing: 'ease-out'
});

sr.reveal('.service-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 600,
    delay: 100,
    interval: 80,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
});

// Nosotros Section Animations - sin rotaciones 3D
sr.reveal('#nosotros span', {
    origin: 'top',
    distance: '25px',
    delay: 0,
    duration: 500
});

sr.reveal('#nosotros h2', {
    origin: 'left',
    distance: '60px',
    delay: 100,
    duration: 600,
    easing: 'ease-out'
});

sr.reveal('#nosotros > div > div > div:first-child p', {
    origin: 'left',
    distance: '40px',
    delay: 150,
    duration: 600
});

sr.reveal('#nosotros > div > div > div:first-child .grid', {
    origin: 'bottom',
    distance: '40px',
    delay: 200,
    duration: 600,
    interval: 60
});

sr.reveal('#nosotros > div > div > div:first-child > div:last-child', {
    origin: 'left',
    distance: '50px',
    delay: 250,
    duration: 700,
    interval: 60
});

sr.reveal('#nosotros > div > div > div:last-child', {
    origin: 'right',
    distance: '60px',
    delay: 150,
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

// Galería Section Animations - optimizadas
sr.reveal('#galeria h2', {
    origin: 'top',
    distance: '40px',
    delay: 0,
    duration: 600
});

sr.reveal('.filter-btn', {
    origin: 'bottom',
    distance: '25px',
    delay: 100,
    duration: 500,
    interval: 60
});

sr.reveal('.gallery-item', {
    origin: 'bottom',
    distance: '50px',
    delay: 150,
    duration: 600,
    interval: 80,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
});

// Agendar Section Animations - optimizadas
sr.reveal('#agendar h2', {
    origin: 'top',
    distance: '40px',
    delay: 0,
    duration: 600
});

sr.reveal('#appointmentForm', {
    origin: 'bottom',
    distance: '60px',
    delay: 100,
    duration: 700,
    easing: 'ease-out'
});

// Contacto Section Animations - optimizadas sin rotaciones 3D
sr.reveal('#contacto span', {
    origin: 'top',
    distance: '25px',
    delay: 0,
    duration: 500
});

sr.reveal('#contacto h2', {
    origin: 'top',
    distance: '50px',
    delay: 50,
    duration: 600
});

sr.reveal('#contacto p:first-of-type', {
    origin: 'bottom',
    distance: '40px',
    delay: 100,
    duration: 600
});

sr.reveal('#contactForm', {
    origin: 'left',
    distance: '60px',
    delay: 150,
    duration: 700,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
});

sr.reveal('#contacto > div > div > div:last-child', {
    origin: 'right',
    distance: '60px',
    delay: 150,
    duration: 700
});

sr.reveal('.social-link', {
    origin: 'bottom',
    distance: '35px',
    delay: 200,
    duration: 600,
    interval: 60
});

// Footer Animations
sr.reveal('footer h3', {
    origin: 'left',
    distance: '80px',
    delay: 0,
    duration: 1200
});

sr.reveal('footer p', {
    origin: 'left',
    distance: '80px',
    delay: 100,
    duration: 1000
});

sr.reveal('.rounded-full', {
    origin: 'bottom',
    distance: '50px',
    delay: 200,
    duration: 1000,
    interval: 80
});

sr.reveal('footer div:nth-child(2)', {
    origin: 'bottom',
    distance: '80px',
    delay: 300,
    duration: 1200,
    rotate: { x: 10 }
});

sr.reveal('footer div:nth-child(3) div:first-child', {
    origin: 'right',
    distance: '80px',
    delay: 200,
    duration: 1200
});

sr.reveal('footer div:nth-child(3) div:last-child', {
    origin: 'right',
    distance: '80px',
    delay: 300,
    duration: 1200
});

// Slider automático en hero
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 4000); // Cambiar cada 4 segundos
}

if (slides.length > 0) {
    showSlides();
}

// Gallery Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                gsap.to(item, { duration: 0.5, opacity: 1, scale: 1, display: 'block' });
            } else {
                gsap.to(item, { duration: 0.5, opacity: 0, scale: 0.8, onComplete: () => item.style.display = 'none' });
            }
        });
        // Update button styles
        filterButtons.forEach(btn => btn.classList.remove('bg-blue-500'));
        button.classList.add('bg-blue-500');
    });
});

// Form Submissions
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    gsap.to(this, { duration: 0.5, scale: 1.05, yoyo: true, repeat: 1 });
    setTimeout(() => {
        alert('Mensaje enviado. Gracias por contactarnos!');
        this.reset();
    }, 1000);
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    gsap.to(this, { duration: 0.5, scale: 1.05, yoyo: true, repeat: 1 });
    setTimeout(() => {
        alert('Turno agendado. Te contactaremos pronto!');
        this.reset();
    }, 1000);
});

// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    
    // Show button when near the bottom of the page
    if (scrollTop + windowHeight >= docHeight - 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});