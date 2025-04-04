document.addEventListener('DOMContentLoaded', () => {
    // Parallax Background Scrolling
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const layers = document.querySelectorAll('.bg-layer');
        
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            layer.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Scroll-Triggered Section Animations
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.fromTo(section, 
            { 
                opacity: 0, 
                y: 100 
            },
            {
                opacity: 1, 
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Collection and Fabric Card Hover Effects
    const cards = document.querySelectorAll('.collection-card, .fabric-card, .exhibition-card, .award-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Form Submission
    const contactForm = document.getElementById('designer-contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Navigation Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            gsap.to(window, {
                duration: 1, 
                scrollTo: {y: targetSection, offsetY: 50}
            });
        });
    });

    // Mobile Navigation Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });
});

