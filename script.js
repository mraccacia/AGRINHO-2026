document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SCROLL SUAVE PARA LINKS
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================
    // INTERATIVOS - BOTÕES
    // =========================
    const calcBtn = document.querySelector("#btn-calculadora");
    const quizBtn = document.querySelector("#btn-quiz");

    if (calcBtn) {
        calcBtn.addEventListener("click", () => {
            alert("Calculadora em desenvolvimento 🚜🌱");
        });
    }

    if (quizBtn) {
        quizBtn.addEventListener("click", () => {
            alert("Quiz em desenvolvimento 🌱");
        });
    }

    // =========================
    // ANIMAÇÃO SIMPLES AO ROLAR
    // =========================
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "0.6s ease";
        observer.observe(section);
    });

    // =========================
    // EFEITO PARALLAX NO HERO
    // =========================
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // =========================
    // LAZY LOADING PARA IMAGENS
    // =========================
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

});
