document.addEventListener('DOMContentLoaded', () => {
    const lightEffect = document.querySelector('.light-effect');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        lightEffect.style.opacity = '0.8';
        lightEffect.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    document.addEventListener('mouseout', () => {
        lightEffect.style.opacity = '0';
    });
});
