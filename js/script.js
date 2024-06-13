const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-10px)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
    });
});
