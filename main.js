document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.9 });

    cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('popup-close');
    // פופאפ נפתח אוטומטית
    popup.classList.remove('hide');
    closeBtn.addEventListener('click', function () {
        popup.classList.add('hide');
    });
    // אפשר לסגור גם בלחיצה על הרקע
    popup.addEventListener('click', function (e) {
        if (e.target === popup) popup.classList.add('hide');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedCards = document.querySelectorAll(
        '.service-card, .plan-card'
    );

    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedCards.forEach(card => observer.observe(card));
});