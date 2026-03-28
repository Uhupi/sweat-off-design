const nav = document.querySelector('.recycling_disposal_nav ul');
const prevBtn = document.querySelector('.recycling_disposal_nav__arrow--prev');
const nextBtn = document.querySelector('.recycling_disposal_nav__arrow--next');

if (nav && prevBtn && nextBtn) {
    const scrollAmount = 120;

    function activate(el, action) {
        el.addEventListener('click', action);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                action();
            }
        });
    }

    activate(prevBtn, () => nav.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    activate(nextBtn, () => nav.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}
